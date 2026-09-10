# Compteur de visites (leçons, exercices et quiz)

Compteur silencieux, non affiché sur le site, qui incrémente un compteur par
page de leçon, d'exercice et de quiz, toutes langues confondues.

## Fonctionnement

- `app/hooks/usePageViewBeacon.ts` : hook client, envoie un `POST /api/views`
  (via `navigator.sendBeacon`, ou `fetch` en repli) une fois par montage, avec
  `{ section: "chapters" | "exercises" | "quiz", lang, slug }`.
- Branché dans `app/[lang]/chapters/ChapterContent.tsx` (clé = `lesson.slug`,
  stable même pour les thèmes multi-leçons), dans
  `app/[lang]/exercises/[slug]/ExerciseViewBeacon.tsx` (clé = `exercise.id`,
  stable entre langues pour un même exercice), et dans
  `app/[lang]/quiz/[lecon]/QuizRunner.tsx` (clé = numéro de leçon ; ne se
  déclenche pas quand le quiz n'est pas traduit dans la langue courante,
  puisque `QuizRunner` n'est alors jamais monté).
- `app/api/views/route.ts` valide `section`/`lang`/`slug` puis appelle
  `incrementPageView` dans `lib/pageViews.server.ts`, qui fait un `INCR` Redis
  sur la clé `views:{section}:{lang}:{slug}`.
- Si Redis n'est pas configuré (env vars absentes), l'incrément est un no-op
  silencieux — jamais d'erreur visible, en dev comme en prod.

## Mise en place (une fois)

1. Créer une base Upstash Redis (gratuite) : soit via Vercel → Storage →
   Marketplace → Upstash Redis, soit directement sur upstash.com.
2. Renseigner dans les variables d'environnement du projet Vercel (et dans
   `.env.local` pour tester en local) :
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
3. Redéployer (ou relancer `next dev`).

## Lire les compteurs

Pas d'interface sur le site. Depuis la console Upstash (onglet "Data
Browser") ou en CLI :

```
redis-cli -u "$UPSTASH_REDIS_REST_URL" ... # via le CLI REST d'Upstash
```

Le plus simple reste l'onglet **Data Browser** de la console Upstash : lister
les clés préfixées par `views:chapters:`, `views:exercises:` ou `views:quiz:`,
chacune contenant un entier (nombre de visites cumulées, toutes sessions
confondues — pas de déduplication par visiteur).
