Mobile performance investigation — 11 September 2026

**Scoped implementation follow-up**

Implemented only the requested font and language changes. Fraunces retains its normal/italic styles and variable weights, with the optional optical-size axis removed. Its Latin files fell from approximately 149 KB to 82 KB (45%). The English chapter index's initial modern JavaScript fell from 618,272 to 364,009 decoded bytes (41%), or approximately 156 KB to 94 KB using the same local Brotli comparison. Selected-language text now travels in the page payload instead; sampled index HTML grew from approximately 55 KB to 67 KB before compression.

Shared interface strings, exercise labels and chapter labels are resolved for the current language on the server. Quiz labels are likewise passed as current-language strings. The unprefixed homepage defaults to English, restores a saved language through a statically generated `/api/language/{lang}` response, and cancels superseded language requests. Explicit language URLs win over saved preferences. Footer section links now retain the reader's language. Chapter language switching retains the corresponding localized path, query and anchor. Prefetching, lesson rendering, image dimensions and scrolling behavior were not changed.

Validation: production compilation and static generation completed; the existing checks passed for 1,277 localized pages and 380 chapter payloads. The isolated Windows build emitted a standalone-copy warning because its dependencies were junction-linked; static checks and the production preview completed successfully. TypeScript and the new reader-language tests passed for all 20 languages. Browser checks covered the English default, French preference restoration, explicit-language precedence, translated chapter switching, browser back, German and Arabic/RTL restoration, footer links, and quiz completion. Mobile screenshots were inspected.

Browser testing additionally discovered a **pre-existing inline-style hydration mismatch**: NavBar's server-rendered style text contains `&#x27;` where the client expects literal quotes. Both the live site and the unchanged-style production preview emit React errors 425, 418 and 423 on the English chapter index. A complete navigation test also encountered error 329 during recovery. This was left outside the requested scope. In an isolated debug copy only, normalizing the existing inline style serialization made the complete language/quiz browser checks pass without hydration or runtime errors. No such style changes were applied to the working application. Evidence is in `tmp/mobile-performance/hydration-comparison.json` and `debug-language-browser-check.json`.

The original investigation below describes the production baseline before these changes.

The live site has measurable mobile loading costs, especially fonts and long lesson layout. The investigation does not establish which metric or hidden route caused the reported Vercel RES of 49. Vercel's underlying mobile LCP, CLS and INP percentiles, date range, countries and three hidden poor routes were not available.

**Measurements**

Audited production at https://learnthermo.org using Lighthouse 13.4.1, its mobile viewport and simulated 4x CPU / approximately 1.6 Mbps network settings. These are individual lab observations, not real-user percentiles or RES. Browser and machine timing varied between runs; do not treat small score differences as meaningful.

| Page | Lighthouse performance | FCP | LCP | Total blocking time | Initial CLS |
| --- | ---: | ---: | ---: | ---: | ---: |
| `/en/chapters` | 87 | 2.3 s | 3.5 s | 110 ms | 0 |
| `/en/chapters` (repeat, Edge) | 92 | 1.0 s | 3.3 s | 80 ms | 0 |
| `/en/chapters/fundamental-concepts` | 80 | 1.5 s | 3.9 s | 340 ms | 0 |
| `/en/about` | 93 | 1.3 s | 2.4 s | 250 ms | 0.001 |
| `/` | 90 | 2.0 s | 3.4 s | 40 ms | 0 |
| `/fr/chapitres` | 99 | 1.1 s | 2.1 s | 40 ms | 0 |

The French audit emitted a host CPU calibration warning. The first English index audit used headless Chrome; the other audits used headless Edge. All reports were successfully written without a Lighthouse runtime error in their JSON; the CLI subsequently exited with a Windows temporary-directory cleanup error. The English index's LCP remained above three seconds in both runs, despite the variation in FCP and overall score.

Source JSON, downloaded HTML/assets, screenshots and the scrolling probe are in `tmp/mobile-performance/` (local, ignored artifacts). No application code was changed during this investigation. The workspace contained unrelated edits and acquired further edits while the audit was running.

**Confirmed costs and recommended priorities**

1. **Fonts are a substantial part of the mobile transfer.** The English chapter index downloaded five font files totaling approximately 261 KB; the sample lesson downloaded ten totaling 345 KB, including KaTeX. About downloaded 179 KB. These are measured transfer sizes, including response overhead, in decimal KB. Fraunces normal and italic alone account for approximately 150 KB. Font requests follow CSS discovery. The chapter index's LCP element was a chapter heading; the lesson's was introductory text. The lesson also spent approximately 1.46 s in style/layout work during the audit. This supports prioritizing font size and text rendering, but does not prove every millisecond of LCP delay came from fonts.

   Relevant code: `app/fonts.ts`, `app/components/SiteDocument.tsx`, `app/globals.css`. Fonts are already self-hosted, use `swap`, and have preload disabled. Reduce unnecessary font styles/axes or use lighter font files while retaining the intended typography. Test selective early loading of the actual above-the-fold font only after reducing its size. Avoid enabling every font preload. `scripts/check-page-assets.mjs` currently explicitly requires zero font preloads, so a deliberate policy change would also require updating that check. KaTeX is imported globally, although its font files are only fetched where used.

2. **Every sampled route receives language data for the whole site.** Production chunks `511-fcb1e239b86bd762.js` and `9-866a78fa3d022f24.js` contain the interface translations and multilingual chapter metadata. Together they are 261,082 bytes of decoded JavaScript, about 65 KB with local Brotli compression. These figures describe code size, not measured execution time or an exact removable amount. The context and navigation imports make them shared even on About.

   Relevant code: `app/context/LangContext.tsx:4`, `lib/chapters.ts:2`, `app/components/NavBar.tsx`, `app/components/Footer.tsx`. Resolve route-language strings and chapter metadata on the server, pass only the current language to client components, and separate lightweight URL/language helpers from large dictionaries. Keep language switching functional, including the unprefixed homepage's saved preference. Static chapter lists and About content are candidates for server components; client components already have server-rendered HTML, so the benefit is smaller hydration/data cost.

3. **The chapter index speculatively downloads several full lesson payloads.** The English index audit recorded seven `_rsc` prefetch requests totaling approximately 209 KB. Overall measured transfer was approximately 713 KB. The French index also prefetched lesson payloads (approximately 184 KB), so this behavior is shared. These requests add bandwidth; the audit does not isolate their effect on LCP.

   Relevant code: `app/[lang]/chapters/ChapterList.tsx:46`. Test disabling viewport prefetch on the dense chapter list, or enable it selectively on intent. Measure both initial loading and subsequent navigation, since prefetch is intended to speed navigation. Next.js documents this behavior and the `prefetch={false}` option in [Linking and Navigating](https://nextjs.org/docs/14/app/building-your-application/routing/linking-and-navigating).

4. **Lesson images do not reserve their final space.** Production HTML for both English and French Fundamental Concepts has two lazy-loaded figures with neither width nor height. The CSS gives them automatic height and no aspect ratio; Lighthouse flagged unsized images. In a separate mobile probe, an unloaded image occupied only 2 px including its border, while the first loaded image occupied approximately 227 px. Read dimensions at build time and emit intrinsic width/height while retaining responsive CSS.

   Relevant code: `lib/chapterContent.server.ts:477`, `app/globals.css:505`. Initial-load CLS was near zero. A separate 390x844 probe with network throttling, 4x CPU slowdown and scrolling through the first 7,000 px recorded a single shift of 0.0346; its cause was not isolated. This does not establish severe field CLS or attribute that shift specifically to an image. Later images and other lessons may behave differently. See Google's guidance on [image dimensions and post-load CLS](https://web.dev/articles/optimize-cls?hl=en).

5. **Long lesson rendering and scroll work deserve a focused follow-up.** The sample lesson has approximately 3,194 DOM elements, mostly generated mathematical content, and a 400,744-byte decoded HTML response. The lesson HTML is also serialized as client props for hydration. Its measured style/layout work exceeded script evaluation. `ChapterContent.tsx:122` scans heading positions with `getBoundingClientRect()` on each scroll event and updates React state. Passive listeners still execute main-thread work.

   Consider a smaller client interaction boundary around server-rendered lesson content. Profile long lessons before introducing section-level rendering deferral, which must preserve anchor navigation, print behavior and accessibility. For the table of contents, evaluate IntersectionObserver or animation-frame scheduling. The scroll handler is a code-level risk, not a measured cause of poor INP in this investigation.

**How to interpret the dashboard**

- `/fr/chapitres` and `/en/chapters` use exactly the same downloaded JS and CSS filenames; localized words rewrite to the same route implementation. Their text, payloads and user populations differ. A higher French RES is not evidence that rewriting URLs makes the page faster.
- The dashboard numbers are metric events, not necessarily distinct visits. Samples of 3–8 events are too small to rank engineering priorities confidently against routes with hundreds of events.
- The supplied dashboard explicitly hides three poor-performing routes. The visible routes therefore cannot explain the overall 49 on their own, and this audit cannot identify the hidden routes.
- Sampled production documents were served as Vercel cache hits or prerendered output. Lighthouse reported root-document response times around 20–30 ms after connection establishment. This provides no evidence of a server-rendering bottleneck from this test location; it does not rule out regional/network TTFB issues for real visitors.
- Lab total blocking time is not INP. Initial-load CLS is not full-visit CLS. Historical RES can include previous deployments. Vercel explains the distinction between real-user RES and lab simulation in [Speed Insights Metrics](https://vercel.com/docs/speed-insights/metrics).

The next field-data check is mobile P75 LCP, CLS and INP for a fixed date range and deployment, then route/path and country breakdowns where available. Compare those same cohorts after any change. Target LCP <= 2.5 s, CLS <= 0.1 and INP <= 200 ms, as documented by Vercel; do not promise a specific RES increase from these lab results.
