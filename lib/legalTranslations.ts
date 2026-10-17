import type { Lang } from "./languages";

/** Publisher and host identity, shown verbatim in every language. */
export const legalPublisher = "Jean-Philippe Bruneton";
export const legalHost = "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA";

/** Label/value separator: French puts a space before the colon, Chinese and Japanese use a full-width one. */
export function legalColon(lang: Lang): string {
  if (lang === "fr") return " : ";
  if (lang === "zh" || lang === "ja") return "：";
  return ": ";
}

interface PrivacyItem {
  label: string;
  // `{email}` is replaced with the contact address when rendered.
  body: string;
}

interface LegalCopy {
  /** Appended right after the "~200 pages … 80+ exercises" sentence on the homepage. */
  cookieFree: string;
  legalTitle: string;
  publisher: string;
  contact: string;
  host: string;
  privacyLink: string;
  privacyTitle: string;
  privacyIntro: string;
  /** Data processed, legal basis, processor, retention, rights — in that order. */
  privacyItems: readonly [PrivacyItem, PrivacyItem, PrivacyItem, PrivacyItem, PrivacyItem];
}

export const legalTranslations: Record<Lang, LegalCopy> = {
  en: {
    cookieFree: " Cookie-free.",
    legalTitle: "Legal notice",
    publisher: "Publisher and publication director",
    contact: "Contact",
    host: "Hosting",
    privacyLink: "Privacy",
    privacyTitle: "Privacy",
    privacyIntro: "This site sets no cookies and uses no advertising trackers. Only your explicit choice of theme or language is kept in your browser (localStorage), and only if you change it.",
    privacyItems: [
      { label: "Data processed", body: "Like any web host, Vercel receives your IP address and technical information (browser, page visited) in its server logs, and for cookie-free audience measurement (Vercel Web Analytics). The site also keeps per-page visit counters, which contain no personal data." },
      { label: "Legal basis", body: "The publisher’s legitimate interest in operating, securing and improving the site (Article 6(1)(f) GDPR)." },
      { label: "Processor", body: "Vercel Inc. (United States); transfers are covered by the EU–US Data Privacy Framework." },
      { label: "Retention", body: "Server logs are kept by Vercel for a limited period under its own retention policy. Audience measurement does not store your IP address and cannot recognise you from one day to the next." },
      { label: "Your rights", body: "You may exercise your rights of access, rectification, erasure and objection by writing to {email}, and lodge a complaint with the CNIL, the French data protection authority (cnil.fr)." },
    ],
  },
  fr: {
    cookieFree: " Sans cookie.",
    legalTitle: "Mentions légales",
    publisher: "Éditeur et directeur de la publication",
    contact: "Contact",
    host: "Hébergeur",
    privacyLink: "Confidentialité",
    privacyTitle: "Confidentialité",
    privacyIntro: "Ce site ne dépose aucun cookie et n’utilise aucun traceur publicitaire. Seul votre choix explicite de thème ou de langue est conservé dans votre navigateur (localStorage), et uniquement si vous le modifiez.",
    privacyItems: [
      { label: "Données traitées", body: "Comme tout hébergeur, Vercel reçoit votre adresse IP et des informations techniques (navigateur, page consultée) dans ses journaux, ainsi que pour une mesure d’audience sans cookie (Vercel Web Analytics). Le site tient aussi des compteurs de visites par page, qui ne contiennent aucune donnée personnelle." },
      { label: "Base légale", body: "L’intérêt légitime de l’éditeur à assurer le fonctionnement, la sécurité et l’amélioration du site (art. 6.1.f du RGPD)." },
      { label: "Sous-traitant", body: "Vercel Inc. (États-Unis) ; les transferts sont encadrés par le Data Privacy Framework UE–États-Unis." },
      { label: "Durée de conservation", body: "Les journaux d’hébergement sont conservés par Vercel pendant une durée limitée, selon sa propre politique. La mesure d’audience ne stocke pas votre adresse IP et ne permet pas de vous reconnaître d’un jour à l’autre." },
      { label: "Vos droits", body: "Vous pouvez exercer vos droits d’accès, de rectification, d’effacement et d’opposition en écrivant à {email}, et introduire une réclamation auprès de la CNIL (cnil.fr)." },
    ],
  },
  de: {
    cookieFree: " Ohne Cookies.",
    legalTitle: "Impressum",
    publisher: "Herausgeber und inhaltlich verantwortlich",
    contact: "Kontakt",
    host: "Hosting",
    privacyLink: "Datenschutz",
    privacyTitle: "Datenschutz",
    privacyIntro: "Diese Website setzt keine Cookies und verwendet keine Werbe-Tracker. Nur Ihre ausdrückliche Wahl von Farbschema oder Sprache wird in Ihrem Browser gespeichert (localStorage), und nur, wenn Sie sie ändern.",
    privacyItems: [
      { label: "Verarbeitete Daten", body: "Wie jeder Hosting-Anbieter erhält Vercel Ihre IP-Adresse und technische Angaben (Browser, aufgerufene Seite) in seinen Server-Logs sowie für eine cookielose Reichweitenmessung (Vercel Web Analytics). Die Website führt außerdem Besuchszähler pro Seite, die keine personenbezogenen Daten enthalten." },
      { label: "Rechtsgrundlage", body: "Berechtigtes Interesse des Herausgebers am Betrieb, an der Sicherheit und an der Verbesserung der Website (Art. 6 Abs. 1 lit. f DSGVO)." },
      { label: "Auftragsverarbeiter", body: "Vercel Inc. (USA); Datenübermittlungen erfolgen auf Grundlage des EU-US Data Privacy Framework." },
      { label: "Speicherdauer", body: "Server-Logs werden von Vercel für einen begrenzten Zeitraum gemäß seiner eigenen Richtlinie aufbewahrt. Die Reichweitenmessung speichert Ihre IP-Adresse nicht und kann Sie nicht von einem Tag zum nächsten wiedererkennen." },
      { label: "Ihre Rechte", body: "Sie können Ihre Rechte auf Auskunft, Berichtigung, Löschung und Widerspruch per E-Mail an {email} ausüben und eine Beschwerde bei der CNIL, der französischen Datenschutzbehörde (cnil.fr), einreichen." },
    ],
  },
  es: {
    cookieFree: " Sin cookies.",
    legalTitle: "Aviso legal",
    publisher: "Editor y director de la publicación",
    contact: "Contacto",
    host: "Alojamiento",
    privacyLink: "Privacidad",
    privacyTitle: "Privacidad",
    privacyIntro: "Este sitio no instala cookies ni utiliza rastreadores publicitarios. Solo se guarda en tu navegador (localStorage) tu elección explícita de tema o de idioma, y únicamente si la cambias.",
    privacyItems: [
      { label: "Datos tratados", body: "Como cualquier proveedor de alojamiento, Vercel recibe tu dirección IP e información técnica (navegador, página visitada) en sus registros del servidor, así como para una medición de audiencia sin cookies (Vercel Web Analytics). El sitio también lleva contadores de visitas por página, que no contienen ningún dato personal." },
      { label: "Base jurídica", body: "El interés legítimo del editor en el funcionamiento, la seguridad y la mejora del sitio (art. 6.1.f del RGPD)." },
      { label: "Encargado del tratamiento", body: "Vercel Inc. (Estados Unidos); las transferencias están amparadas por el Marco de Privacidad de Datos UE-EE. UU." },
      { label: "Conservación", body: "Vercel conserva los registros del servidor durante un periodo limitado, según su propia política. La medición de audiencia no almacena tu dirección IP y no permite reconocerte de un día para otro." },
      { label: "Tus derechos", body: "Puedes ejercer tus derechos de acceso, rectificación, supresión y oposición escribiendo a {email}, y presentar una reclamación ante la CNIL, la autoridad francesa de protección de datos (cnil.fr)." },
    ],
  },
  pt: {
    cookieFree: " Sem cookies.",
    legalTitle: "Aviso legal",
    publisher: "Editor e diretor da publicação",
    contact: "Contacto",
    host: "Alojamento",
    privacyLink: "Privacidade",
    privacyTitle: "Privacidade",
    privacyIntro: "Este site não instala cookies nem utiliza rastreadores publicitários. Apenas a sua escolha explícita de tema ou de idioma é guardada no seu navegador (localStorage), e só se a alterar.",
    privacyItems: [
      { label: "Dados tratados", body: "Como qualquer serviço de alojamento, a Vercel recebe o seu endereço IP e informações técnicas (navegador, página visitada) nos seus registos de servidor, bem como para uma medição de audiência sem cookies (Vercel Web Analytics). O site mantém também contadores de visitas por página, que não contêm dados pessoais." },
      { label: "Fundamento jurídico", body: "O interesse legítimo do editor em assegurar o funcionamento, a segurança e a melhoria do site (art. 6.º, n.º 1, alínea f), do RGPD)." },
      { label: "Subcontratante", body: "Vercel Inc. (Estados Unidos); as transferências estão abrangidas pelo Quadro de Privacidade de Dados UE-EUA." },
      { label: "Conservação", body: "Os registos de servidor são conservados pela Vercel durante um período limitado, segundo a sua própria política. A medição de audiência não guarda o seu endereço IP e não permite reconhecê-lo de um dia para o outro." },
      { label: "Os seus direitos", body: "Pode exercer os seus direitos de acesso, retificação, apagamento e oposição escrevendo para {email}, e apresentar uma reclamação à CNIL, a autoridade francesa de proteção de dados (cnil.fr)." },
    ],
  },
  it: {
    cookieFree: " Senza cookie.",
    legalTitle: "Note legali",
    publisher: "Editore e direttore della pubblicazione",
    contact: "Contatto",
    host: "Hosting",
    privacyLink: "Privacy",
    privacyTitle: "Privacy",
    privacyIntro: "Questo sito non installa cookie e non utilizza tracker pubblicitari. Nel tuo browser (localStorage) viene salvata solo la tua scelta esplicita di tema o di lingua, e solo se la modifichi.",
    privacyItems: [
      { label: "Dati trattati", body: "Come ogni fornitore di hosting, Vercel riceve il tuo indirizzo IP e informazioni tecniche (browser, pagina visitata) nei log del server, oltre che per una misurazione del pubblico senza cookie (Vercel Web Analytics). Il sito tiene inoltre contatori di visite per pagina, che non contengono dati personali." },
      { label: "Base giuridica", body: "Il legittimo interesse dell’editore al funzionamento, alla sicurezza e al miglioramento del sito (art. 6, par. 1, lett. f del GDPR)." },
      { label: "Responsabile del trattamento", body: "Vercel Inc. (Stati Uniti); i trasferimenti sono coperti dal Data Privacy Framework UE-USA." },
      { label: "Conservazione", body: "I log del server sono conservati da Vercel per un periodo limitato, secondo la sua politica. La misurazione del pubblico non memorizza il tuo indirizzo IP e non consente di riconoscerti da un giorno all’altro." },
      { label: "I tuoi diritti", body: "Puoi esercitare i tuoi diritti di accesso, rettifica, cancellazione e opposizione scrivendo a {email}, e presentare un reclamo alla CNIL, l’autorità francese per la protezione dei dati (cnil.fr)." },
    ],
  },
  pl: {
    cookieFree: " Bez plików cookie.",
    legalTitle: "Informacje prawne",
    publisher: "Wydawca i redaktor odpowiedzialny",
    contact: "Kontakt",
    host: "Hosting",
    privacyLink: "Prywatność",
    privacyTitle: "Prywatność",
    privacyIntro: "Ta strona nie zapisuje plików cookie i nie korzysta z narzędzi śledzenia reklamowego. W przeglądarce (localStorage) zapisywany jest tylko Twój wyraźny wybór motywu lub języka, i to wyłącznie wtedy, gdy go zmienisz.",
    privacyItems: [
      { label: "Przetwarzane dane", body: "Jak każdy dostawca hostingu, Vercel otrzymuje Twój adres IP i informacje techniczne (przeglądarka, odwiedzana strona) w dziennikach serwera oraz na potrzeby pomiaru oglądalności bez plików cookie (Vercel Web Analytics). Strona prowadzi też liczniki odwiedzin poszczególnych stron, które nie zawierają danych osobowych." },
      { label: "Podstawa prawna", body: "Prawnie uzasadniony interes wydawcy polegający na zapewnieniu działania, bezpieczeństwa i rozwoju strony (art. 6 ust. 1 lit. f RODO)." },
      { label: "Podmiot przetwarzający", body: "Vercel Inc. (Stany Zjednoczone); przekazywanie danych odbywa się na podstawie ram ochrony danych UE–USA (Data Privacy Framework)." },
      { label: "Okres przechowywania", body: "Dzienniki serwera są przechowywane przez Vercel przez ograniczony czas, zgodnie z jego własną polityką. Pomiar oglądalności nie zapisuje Twojego adresu IP i nie pozwala rozpoznać Cię z dnia na dzień." },
      { label: "Twoje prawa", body: "Możesz skorzystać z prawa dostępu, sprostowania, usunięcia danych i sprzeciwu, pisząc na adres {email}, a także wnieść skargę do CNIL, francuskiego organu ochrony danych (cnil.fr)." },
    ],
  },
  ru: {
    cookieFree: " Без cookie.",
    legalTitle: "Правовая информация",
    publisher: "Издатель и ответственный редактор",
    contact: "Контакт",
    host: "Хостинг",
    privacyLink: "Конфиденциальность",
    privacyTitle: "Конфиденциальность",
    privacyIntro: "Этот сайт не использует файлы cookie и рекламные трекеры. В вашем браузере (localStorage) сохраняется только ваш явный выбор темы или языка — и только если вы его меняете.",
    privacyItems: [
      { label: "Обрабатываемые данные", body: "Как и любой хостинг-провайдер, Vercel получает ваш IP-адрес и технические сведения (браузер, просматриваемая страница) в журналах сервера, а также для измерения аудитории без cookie (Vercel Web Analytics). Сайт также ведёт счётчики посещений страниц, не содержащие персональных данных." },
      { label: "Правовое основание", body: "Законный интерес издателя в обеспечении работы, безопасности и улучшения сайта (ст. 6(1)(f) GDPR)." },
      { label: "Обработчик данных", body: "Vercel Inc. (США); передача данных осуществляется в рамках Data Privacy Framework ЕС–США." },
      { label: "Срок хранения", body: "Журналы сервера хранятся Vercel ограниченное время согласно его собственной политике. Измерение аудитории не сохраняет ваш IP-адрес и не позволяет узнать вас на следующий день." },
      { label: "Ваши права", body: "Вы можете воспользоваться правом на доступ, исправление, удаление данных и возражение, написав на {email}, а также подать жалобу в CNIL — французский орган по защите данных (cnil.fr)." },
    ],
  },
  zh: {
    cookieFree: "无 Cookie。",
    legalTitle: "法律声明",
    publisher: "出版者兼出版负责人",
    contact: "联系方式",
    host: "托管服务",
    privacyLink: "隐私",
    privacyTitle: "隐私政策",
    privacyIntro: "本网站不设置任何 Cookie，也不使用任何广告追踪工具。只有当您主动更改主题或语言时，您的选择才会保存在浏览器中（localStorage）。",
    privacyItems: [
      { label: "处理的数据", body: "与所有网站托管服务商一样，Vercel 会在其服务器日志中接收您的 IP 地址和技术信息（浏览器、访问的页面），并用于不使用 Cookie 的访问量统计（Vercel Web Analytics）。本网站还记录各页面的访问次数，其中不包含任何个人数据。" },
      { label: "法律依据", body: "出版者在保障网站运行、安全和改进方面的正当利益（GDPR 第 6 条第 1 款 f 项）。" },
      { label: "数据处理方", body: "Vercel Inc.（美国）；数据传输受欧盟—美国数据隐私框架（Data Privacy Framework）约束。" },
      { label: "保存期限", body: "服务器日志由 Vercel 根据其自身政策保存有限的时间。访问量统计不会存储您的 IP 地址，也无法跨日识别您。" },
      { label: "您的权利", body: "您可以发送邮件至 {email}，行使查阅、更正、删除及反对的权利，并可向法国数据保护机构 CNIL（cnil.fr）提出投诉。" },
    ],
  },
  ja: {
    cookieFree: "Cookie 不使用。",
    legalTitle: "法的表示",
    publisher: "発行者・編集責任者",
    contact: "連絡先",
    host: "ホスティング",
    privacyLink: "プライバシー",
    privacyTitle: "プライバシー",
    privacyIntro: "このサイトは Cookie を一切設定せず、広告用トラッカーも使用しません。ブラウザ（localStorage）に保存されるのは、テーマや言語をご自身で変更した場合のその選択だけです。",
    privacyItems: [
      { label: "処理されるデータ", body: "一般的なホスティング事業者と同様に、Vercel はサーバーログおよび Cookie を使わないアクセス解析（Vercel Web Analytics）のために、IP アドレスと技術情報（ブラウザ、閲覧ページ）を受け取ります。また、本サイトはページごとの閲覧数を記録していますが、個人データは含まれません。" },
      { label: "法的根拠", body: "サイトの運営・安全確保・改善に関する発行者の正当な利益（GDPR 第6条第1項(f)）。" },
      { label: "処理者", body: "Vercel Inc.（米国）。データ移転は EU・米国データプライバシー枠組み（Data Privacy Framework）に基づいて行われます。" },
      { label: "保存期間", body: "サーバーログは Vercel 自身のポリシーに従い、限られた期間のみ保存されます。アクセス解析は IP アドレスを保存せず、日をまたいで利用者を識別することはできません。" },
      { label: "利用者の権利", body: "{email} までご連絡いただくことで、アクセス・訂正・消去・異議申し立ての権利を行使できます。また、フランスのデータ保護機関 CNIL（cnil.fr）に苦情を申し立てることもできます。" },
    ],
  },
  ko: {
    cookieFree: " 쿠키 없음.",
    legalTitle: "법적 고지",
    publisher: "발행인 겸 편집 책임자",
    contact: "연락처",
    host: "호스팅",
    privacyLink: "개인정보",
    privacyTitle: "개인정보 처리방침",
    privacyIntro: "이 사이트는 쿠키를 설정하지 않으며 광고 추적 도구도 사용하지 않습니다. 브라우저(localStorage)에는 사용자가 직접 테마나 언어를 변경한 경우에만 그 선택이 저장됩니다.",
    privacyItems: [
      { label: "처리되는 데이터", body: "다른 호스팅 업체와 마찬가지로 Vercel은 서버 로그와 쿠키 없는 방문자 통계(Vercel Web Analytics)를 위해 IP 주소와 기술 정보(브라우저, 방문한 페이지)를 받습니다. 또한 이 사이트는 페이지별 방문 수를 집계하지만, 여기에는 개인정보가 포함되지 않습니다." },
      { label: "법적 근거", body: "사이트의 운영, 보안 및 개선에 대한 발행인의 정당한 이익(GDPR 제6조 제1항 (f))." },
      { label: "수탁 처리자", body: "Vercel Inc.(미국). 데이터 이전은 EU-미국 데이터 프라이버시 프레임워크(Data Privacy Framework)의 적용을 받습니다." },
      { label: "보관 기간", body: "서버 로그는 Vercel의 자체 정책에 따라 제한된 기간 동안만 보관됩니다. 방문자 통계는 IP 주소를 저장하지 않으며 날짜가 바뀌면 사용자를 식별할 수 없습니다." },
      { label: "이용자의 권리", body: "{email}로 연락하여 열람, 정정, 삭제 및 처리 반대 권리를 행사할 수 있으며, 프랑스 개인정보 보호 기관인 CNIL(cnil.fr)에 민원을 제기할 수도 있습니다." },
    ],
  },
  hi: {
    cookieFree: " कुकी-मुक्त।",
    legalTitle: "कानूनी सूचना",
    publisher: "प्रकाशक और प्रकाशन निदेशक",
    contact: "संपर्क",
    host: "होस्टिंग",
    privacyLink: "गोपनीयता",
    privacyTitle: "गोपनीयता",
    privacyIntro: "यह साइट कोई कुकी नहीं रखती और किसी विज्ञापन ट्रैकर का उपयोग नहीं करती। आपके ब्राउज़र (localStorage) में केवल थीम या भाषा का आपका स्पष्ट चुनाव सहेजा जाता है, और वह भी तभी जब आप उसे बदलते हैं।",
    privacyItems: [
      { label: "संसाधित डेटा", body: "किसी भी होस्टिंग प्रदाता की तरह, Vercel अपने सर्वर लॉग में और कुकी-रहित दर्शक मापन (Vercel Web Analytics) के लिए आपका IP पता और तकनीकी जानकारी (ब्राउज़र, देखा गया पृष्ठ) प्राप्त करता है। साइट प्रति पृष्ठ विज़िट काउंटर भी रखती है, जिनमें कोई व्यक्तिगत डेटा नहीं होता।" },
      { label: "कानूनी आधार", body: "साइट के संचालन, सुरक्षा और सुधार में प्रकाशक का वैध हित (GDPR अनुच्छेद 6(1)(f))।" },
      { label: "डेटा प्रोसेसर", body: "Vercel Inc. (संयुक्त राज्य अमेरिका); डेटा का स्थानांतरण EU–US डेटा प्राइवेसी फ़्रेमवर्क के अंतर्गत होता है।" },
      { label: "संग्रहण अवधि", body: "सर्वर लॉग Vercel अपनी नीति के अनुसार सीमित अवधि तक रखता है। दर्शक मापन आपका IP पता संग्रहीत नहीं करता और आपको एक दिन से दूसरे दिन पहचान नहीं सकता।" },
      { label: "आपके अधिकार", body: "आप {email} पर लिखकर पहुँच, सुधार, मिटाने और आपत्ति के अपने अधिकारों का उपयोग कर सकते हैं, और फ़्रांस के डेटा संरक्षण प्राधिकरण CNIL (cnil.fr) में शिकायत दर्ज कर सकते हैं।" },
    ],
  },
  vi: {
    cookieFree: " Không dùng cookie.",
    legalTitle: "Thông tin pháp lý",
    publisher: "Nhà xuất bản và người chịu trách nhiệm nội dung",
    contact: "Liên hệ",
    host: "Lưu trữ",
    privacyLink: "Quyền riêng tư",
    privacyTitle: "Quyền riêng tư",
    privacyIntro: "Trang web này không đặt cookie và không dùng công cụ theo dõi quảng cáo. Trình duyệt của bạn (localStorage) chỉ lưu lựa chọn giao diện hoặc ngôn ngữ mà bạn chủ động thay đổi.",
    privacyItems: [
      { label: "Dữ liệu được xử lý", body: "Như mọi nhà cung cấp lưu trữ, Vercel nhận địa chỉ IP và thông tin kỹ thuật của bạn (trình duyệt, trang đã xem) trong nhật ký máy chủ, cũng như để đo lường lượt truy cập không dùng cookie (Vercel Web Analytics). Trang web cũng đếm lượt xem theo từng trang, không chứa dữ liệu cá nhân nào." },
      { label: "Cơ sở pháp lý", body: "Lợi ích chính đáng của nhà xuất bản trong việc vận hành, bảo mật và cải thiện trang web (Điều 6(1)(f) GDPR)." },
      { label: "Bên xử lý dữ liệu", body: "Vercel Inc. (Hoa Kỳ); việc chuyển dữ liệu tuân theo Khung Bảo mật Dữ liệu EU–Hoa Kỳ (Data Privacy Framework)." },
      { label: "Thời gian lưu giữ", body: "Nhật ký máy chủ được Vercel lưu trong thời gian giới hạn theo chính sách riêng của họ. Việc đo lường lượt truy cập không lưu địa chỉ IP và không thể nhận ra bạn từ ngày này sang ngày khác." },
      { label: "Quyền của bạn", body: "Bạn có thể thực hiện quyền truy cập, chỉnh sửa, xóa và phản đối bằng cách viết thư tới {email}, và khiếu nại với CNIL, cơ quan bảo vệ dữ liệu của Pháp (cnil.fr)." },
    ],
  },
  ar: {
    cookieFree: " بدون ملفات تعريف الارتباط.",
    legalTitle: "إشعار قانوني",
    publisher: "الناشر ومدير النشر",
    contact: "التواصل",
    host: "الاستضافة",
    privacyLink: "الخصوصية",
    privacyTitle: "الخصوصية",
    privacyIntro: "لا يضع هذا الموقع أي ملفات تعريف ارتباط (cookies) ولا يستخدم أي أدوات تتبّع إعلانية. لا يُحفظ في متصفحك (localStorage) إلا اختيارك الصريح للمظهر أو اللغة، وذلك فقط إذا غيّرته.",
    privacyItems: [
      { label: "البيانات المعالَجة", body: "كأي مزوّد استضافة، تتلقى Vercel عنوان IP الخاص بك ومعلومات تقنية (المتصفح، الصفحة التي تمت زيارتها) في سجلات الخادم، وكذلك لقياس الجمهور دون ملفات تعريف ارتباط (Vercel Web Analytics). ويحتفظ الموقع أيضًا بعدّادات زيارات لكل صفحة لا تتضمن أي بيانات شخصية." },
      { label: "الأساس القانوني", body: "المصلحة المشروعة للناشر في تشغيل الموقع وتأمينه وتحسينه (المادة 6(1)(و) من اللائحة العامة لحماية البيانات GDPR)." },
      { label: "المعالِج", body: "Vercel Inc. (الولايات المتحدة)؛ وتخضع عمليات نقل البيانات لإطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة." },
      { label: "مدة الاحتفاظ", body: "تحتفظ Vercel بسجلات الخادم لمدة محدودة وفق سياستها الخاصة. ولا يخزّن قياس الجمهور عنوان IP الخاص بك ولا يمكنه التعرّف عليك من يوم إلى آخر." },
      { label: "حقوقك", body: "يمكنك ممارسة حقوقك في الاطلاع والتصحيح والمحو والاعتراض بمراسلة {email}، كما يمكنك تقديم شكوى إلى CNIL، الهيئة الفرنسية لحماية البيانات (cnil.fr)." },
    ],
  },
  id: {
    cookieFree: " Tanpa cookie.",
    legalTitle: "Informasi hukum",
    publisher: "Penerbit dan penanggung jawab publikasi",
    contact: "Kontak",
    host: "Hosting",
    privacyLink: "Privasi",
    privacyTitle: "Privasi",
    privacyIntro: "Situs ini tidak memasang cookie dan tidak menggunakan pelacak iklan. Hanya pilihan tema atau bahasa yang Anda ubah sendiri yang disimpan di peramban Anda (localStorage).",
    privacyItems: [
      { label: "Data yang diproses", body: "Seperti penyedia hosting lainnya, Vercel menerima alamat IP dan informasi teknis Anda (peramban, halaman yang dikunjungi) dalam log servernya, serta untuk pengukuran pengunjung tanpa cookie (Vercel Web Analytics). Situs ini juga mencatat jumlah kunjungan per halaman, tanpa data pribadi apa pun." },
      { label: "Dasar hukum", body: "Kepentingan sah penerbit dalam menjalankan, mengamankan, dan meningkatkan situs (Pasal 6(1)(f) GDPR)." },
      { label: "Pemroses data", body: "Vercel Inc. (Amerika Serikat); transfer data tunduk pada Kerangka Privasi Data UE–AS (Data Privacy Framework)." },
      { label: "Masa penyimpanan", body: "Log server disimpan oleh Vercel untuk jangka waktu terbatas sesuai kebijakannya sendiri. Pengukuran pengunjung tidak menyimpan alamat IP Anda dan tidak dapat mengenali Anda dari hari ke hari." },
      { label: "Hak Anda", body: "Anda dapat menggunakan hak akses, perbaikan, penghapusan, dan keberatan dengan menulis ke {email}, serta mengajukan pengaduan kepada CNIL, otoritas perlindungan data Prancis (cnil.fr)." },
    ],
  },
  tr: {
    cookieFree: " Çerezsiz.",
    legalTitle: "Yasal bilgiler",
    publisher: "Yayıncı ve yayın sorumlusu",
    contact: "İletişim",
    host: "Barındırma",
    privacyLink: "Gizlilik",
    privacyTitle: "Gizlilik",
    privacyIntro: "Bu site hiçbir çerez yerleştirmez ve reklam amaçlı izleyici kullanmaz. Tarayıcınızda (localStorage) yalnızca tema veya dil tercihiniz, ve yalnızca siz değiştirdiğinizde saklanır.",
    privacyItems: [
      { label: "İşlenen veriler", body: "Her barındırma sağlayıcısı gibi Vercel de sunucu kayıtlarında ve çerezsiz ziyaretçi ölçümü (Vercel Web Analytics) için IP adresinizi ve teknik bilgileri (tarayıcı, ziyaret edilen sayfa) alır. Site ayrıca sayfa başına ziyaret sayaçları tutar; bunlar kişisel veri içermez." },
      { label: "Hukuki dayanak", body: "Yayıncının sitenin işleyişi, güvenliği ve geliştirilmesindeki meşru menfaati (GDPR md. 6(1)(f))." },
      { label: "Veri işleyen", body: "Vercel Inc. (ABD); veri aktarımları AB–ABD Veri Gizliliği Çerçevesi (Data Privacy Framework) kapsamındadır." },
      { label: "Saklama süresi", body: "Sunucu kayıtları Vercel tarafından kendi politikasına göre sınırlı bir süre saklanır. Ziyaretçi ölçümü IP adresinizi saklamaz ve sizi bir günden diğerine tanıyamaz." },
      { label: "Haklarınız", body: "{email} adresine yazarak erişim, düzeltme, silme ve itiraz haklarınızı kullanabilir, Fransız veri koruma otoritesi CNIL’e (cnil.fr) şikâyette bulunabilirsiniz." },
    ],
  },
  bn: {
    cookieFree: " কুকি-মুক্ত।",
    legalTitle: "আইনি তথ্য",
    publisher: "প্রকাশক ও প্রকাশনা পরিচালক",
    contact: "যোগাযোগ",
    host: "হোস্টিং",
    privacyLink: "গোপনীয়তা",
    privacyTitle: "গোপনীয়তা",
    privacyIntro: "এই সাইট কোনো কুকি রাখে না এবং কোনো বিজ্ঞাপন ট্র্যাকার ব্যবহার করে না। আপনার ব্রাউজারে (localStorage) কেবল থিম বা ভাষার যে পছন্দ আপনি নিজে বদলান, সেটিই সংরক্ষিত হয়।",
    privacyItems: [
      { label: "প্রক্রিয়াকৃত তথ্য", body: "যেকোনো হোস্টিং প্রদানকারীর মতো, Vercel তার সার্ভার লগে এবং কুকি-মুক্ত দর্শক পরিমাপের (Vercel Web Analytics) জন্য আপনার IP ঠিকানা ও প্রযুক্তিগত তথ্য (ব্রাউজার, দেখা পৃষ্ঠা) পায়। সাইটটি প্রতিটি পৃষ্ঠার ভিজিট গণনাও রাখে, যাতে কোনো ব্যক্তিগত তথ্য নেই।" },
      { label: "আইনি ভিত্তি", body: "সাইট পরিচালনা, সুরক্ষা ও উন্নয়নে প্রকাশকের বৈধ স্বার্থ (GDPR অনুচ্ছেদ 6(1)(f))।" },
      { label: "তথ্য প্রক্রিয়াকারী", body: "Vercel Inc. (মার্কিন যুক্তরাষ্ট্র); তথ্য স্থানান্তর EU–US ডেটা প্রাইভেসি ফ্রেমওয়ার্কের আওতায় হয়।" },
      { label: "সংরক্ষণের মেয়াদ", body: "Vercel নিজস্ব নীতি অনুযায়ী সার্ভার লগ সীমিত সময়ের জন্য সংরক্ষণ করে। দর্শক পরিমাপ আপনার IP ঠিকানা সংরক্ষণ করে না এবং এক দিন থেকে আরেক দিনে আপনাকে চিনতে পারে না।" },
      { label: "আপনার অধিকার", body: "{email} ঠিকানায় লিখে আপনি তথ্য দেখা, সংশোধন, মুছে ফেলা ও আপত্তির অধিকার প্রয়োগ করতে পারেন, এবং ফরাসি তথ্য সুরক্ষা কর্তৃপক্ষ CNIL-এর (cnil.fr) কাছে অভিযোগ জানাতে পারেন।" },
    ],
  },
  ur: {
    cookieFree: " کوکیز کے بغیر۔",
    legalTitle: "قانونی معلومات",
    publisher: "ناشر اور ذمہ دار مدیر",
    contact: "رابطہ",
    host: "ہوسٹنگ",
    privacyLink: "رازداری",
    privacyTitle: "رازداری",
    privacyIntro: "یہ سائٹ کوئی کوکی نہیں رکھتی اور کوئی اشتہاری ٹریکر استعمال نہیں کرتی۔ آپ کے براؤزر (localStorage) میں صرف تھیم یا زبان کا وہ انتخاب محفوظ ہوتا ہے جو آپ خود تبدیل کریں۔",
    privacyItems: [
      { label: "زیرِ عمل ڈیٹا", body: "ہر ہوسٹنگ فراہم کنندہ کی طرح Vercel اپنے سرور لاگز میں اور کوکی کے بغیر ناظرین کی پیمائش (Vercel Web Analytics) کے لیے آپ کا IP پتہ اور تکنیکی معلومات (براؤزر، دیکھا گیا صفحہ) وصول کرتا ہے۔ سائٹ ہر صفحے کے وزٹ بھی گنتی ہے، جن میں کوئی ذاتی ڈیٹا شامل نہیں۔" },
      { label: "قانونی بنیاد", body: "سائٹ کو چلانے، محفوظ رکھنے اور بہتر بنانے میں ناشر کا جائز مفاد (GDPR آرٹیکل 6(1)(f))۔" },
      { label: "ڈیٹا پروسیسر", body: "Vercel Inc. (امریکہ)؛ ڈیٹا کی منتقلی EU–US ڈیٹا پرائیویسی فریم ورک کے تحت ہوتی ہے۔" },
      { label: "محفوظ رکھنے کی مدت", body: "Vercel سرور لاگز کو اپنی پالیسی کے مطابق محدود مدت تک رکھتا ہے۔ ناظرین کی پیمائش آپ کا IP پتہ محفوظ نہیں کرتی اور آپ کو ایک دن سے دوسرے دن پہچان نہیں سکتی۔" },
      { label: "آپ کے حقوق", body: "آپ {email} پر لکھ کر رسائی، درستی، حذف اور اعتراض کے اپنے حقوق استعمال کر سکتے ہیں، اور فرانس کے ڈیٹا تحفظ کے ادارے CNIL (cnil.fr) میں شکایت درج کرا سکتے ہیں۔" },
    ],
  },
  sw: {
    cookieFree: " Bila vidakuzi.",
    legalTitle: "Taarifa za kisheria",
    publisher: "Mchapishaji na mkurugenzi wa uchapishaji",
    contact: "Mawasiliano",
    host: "Uhifadhi wa tovuti",
    privacyLink: "Faragha",
    privacyTitle: "Faragha",
    privacyIntro: "Tovuti hii haiweki vidakuzi wala haitumii vifuatiliaji vya matangazo. Kivinjari chako (localStorage) huhifadhi tu chaguo lako la mandhari au lugha, na hilo tu ukilibadilisha mwenyewe.",
    privacyItems: [
      { label: "Data inayochakatwa", body: "Kama mtoa huduma yeyote wa uhifadhi, Vercel hupokea anwani yako ya IP na taarifa za kiufundi (kivinjari, ukurasa uliotembelewa) katika kumbukumbu za seva zake, na pia kwa upimaji wa wageni bila vidakuzi (Vercel Web Analytics). Tovuti pia huhesabu matembeleo ya kila ukurasa, bila data yoyote ya binafsi." },
      { label: "Msingi wa kisheria", body: "Maslahi halali ya mchapishaji katika kuendesha, kulinda na kuboresha tovuti (Kifungu 6(1)(f) cha GDPR)." },
      { label: "Mchakataji wa data", body: "Vercel Inc. (Marekani); uhamishaji wa data unasimamiwa na Mfumo wa Faragha ya Data kati ya EU na Marekani (Data Privacy Framework)." },
      { label: "Muda wa kuhifadhi", body: "Kumbukumbu za seva huhifadhiwa na Vercel kwa muda mfupi kulingana na sera yake. Upimaji wa wageni hauhifadhi anwani yako ya IP na hauwezi kukutambua kutoka siku moja hadi nyingine." },
      { label: "Haki zako", body: "Unaweza kutumia haki zako za kufikia, kurekebisha, kufuta na kupinga kwa kuandika kwa {email}, na kuwasilisha malalamiko kwa CNIL, mamlaka ya Ufaransa ya ulinzi wa data (cnil.fr)." },
    ],
  },
  fa: {
    cookieFree: " بدون کوکی.",
    legalTitle: "اطلاعات حقوقی",
    publisher: "ناشر و مدیر مسئول",
    contact: "تماس",
    host: "میزبانی",
    privacyLink: "حریم خصوصی",
    privacyTitle: "حریم خصوصی",
    privacyIntro: "این سایت هیچ کوکی‌ای ذخیره نمی‌کند و از هیچ ردیاب تبلیغاتی استفاده نمی‌کند. در مرورگر شما (localStorage) فقط انتخاب صریح شما برای پوسته یا زبان ذخیره می‌شود، آن هم تنها اگر آن را تغییر دهید.",
    privacyItems: [
      { label: "داده‌های پردازش‌شده", body: "مانند هر ارائه‌دهندهٔ میزبانی، Vercel نشانی IP و اطلاعات فنی شما (مرورگر، صفحهٔ بازدیدشده) را در گزارش‌های سرور خود و برای سنجش مخاطبان بدون کوکی (Vercel Web Analytics) دریافت می‌کند. سایت همچنین شمار بازدید هر صفحه را نگه می‌دارد که هیچ دادهٔ شخصی‌ای در آن نیست." },
      { label: "مبنای قانونی", body: "منفعت مشروع ناشر در راه‌اندازی، امنیت و بهبود سایت (مادهٔ ۶(۱)(f) مقررات GDPR)." },
      { label: "پردازشگر", body: "Vercel Inc. (ایالات متحده)؛ انتقال داده‌ها در چارچوب حریم خصوصی داده‌های اتحادیهٔ اروپا و آمریکا (Data Privacy Framework) انجام می‌شود." },
      { label: "مدت نگهداری", body: "گزارش‌های سرور طبق سیاست خود Vercel برای مدتی محدود نگهداری می‌شوند. سنجش مخاطبان نشانی IP شما را ذخیره نمی‌کند و نمی‌تواند شما را از یک روز به روز دیگر بازشناسد." },
      { label: "حقوق شما", body: "می‌توانید با نوشتن به {email} از حق دسترسی، اصلاح، پاک‌کردن و اعتراض خود استفاده کنید و به CNIL، نهاد فرانسوی حفاظت از داده‌ها (cnil.fr)، شکایت کنید." },
    ],
  },
};
