export interface ProjectSection {
  num: string;
  title: string;
  content: string; // main paragraph(s)
  bullets?: string[];
  subsections?: { title: string; content?: string; bullets?: string[] }[];
  quote?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  sector: string;
  tags: string[];
  year: string;
  role: string;
  scope: string;
  description: string;
  vision: string; // italic quote under intro
  thumbnail: string;
  gallery: string[];
  tools: string[];
  metrics: { label: string; value: string }[];
  sections: ProjectSection[];
  url?: string;
  urlLabel?: string;
}

export const projects: Project[] = [
  // 3. Maono
  {
    slug: "maono",
    title: "Maono",
    subtitle:
      "Conception UX/UI & structuration de l'expérience digitale d'une agence d'innovation africaine",
    type: "Développement Web",
      sector: "Digital · IA · Innovation",
      tags: ["Product", "UI", "Web"],
      year: "2025–2026",
    role: "Développeur Frontend & Intégrateur",
    scope: "Développement Web ",
      description:
        "Maono est une agence digitale, créative et IA positionnée comme acteur de la transformation numérique en Afrique. Le défi était de concevoir une expérience digitale capable de rendre lisible un écosystème complexe — Studio, Systems, Labs, Strategy — sans en diluer l'ambition.",
      vision:
        "Positionner Maono non pas comme une agence parmi d'autres, mais comme un écosystème d'innovation structuré et crédible à l'échelle continentale.",
    thumbnail:
      "/images/projects/maono/01.png",
    gallery: [
      "/images/projects/maono/01.png",
      "/images/projects/maono/02.png",
      "/images/projects/maono/03.png",
    ],
    tools: ["Next.js", "Tailwind CSS", "Framer Motion","Wordpress"],
    metrics: [
        { label: "Type de projet", value: "Client" },
        { label: "Secteur", value: "Digital/IA" },
        { label: "Année", value: "25–26" },
        { label: "Rôle", value: "Developpeur" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & problématique",
        content:
          "Maono devait disposer d'une plateforme web capable de présenter clairement ses pôles (Studio, Systems, Labs, Strategy) tout en restant rapide, accessible et facile à maintenir. Le challenge : transformer un univers riche en une navigation simple, performante et orientée conversion.",
        bullets: [
          "Structurer un site multi-offres sans perdre l'utilisateur",
          "Mettre en place une base technique fiable (SEO, performance, accessibilité)",
          "Assurer l'évolutivité du contenu et des pages (scalabilité)",
          "Conserver une expérience premium sur mobile comme sur desktop",
        ],
          quote:
            "L'objectif : une vitrine technique crédible — qui charge vite, qui se comprend vite, et qui peut évoluer sans dette.",
        },
        {
          num: "03",
          title: "Vision & positionnement",
          content:
            "La plateforme devait refléter une posture : innovation, rigueur et exécution. Le site n'était pas un simple portfolio, mais un outil de communication produit, pensé pour inspirer confiance.",
          bullets: [
            "Clarté du message et hiérarchie de l'information",
            "Preuves de crédibilité (réalisations, expertise, méthode)",
            "Expérience fluide : transitions, micro-interactions, cohérence UI",
          ],
          quote:
            "Une seconde de latence peut coûter une opportunité. La performance fait partie du positionnement.",
        },
        {
          num: "04",
          title: "Mon rôle & responsabilités",
          content:
            "Sur ce projet, j'ai assuré la conception technique et l'implémentation du frontend, avec une approche orientée architecture, performance et qualité.",
          bullets: [
            "Architecture Next.js (routing, composants, découpage, conventions)",
            "Intégration des contenus et structuration des pages (sections, blocs, navigation)",
            "Optimisation performance (Core Web Vitals, images, bundles, lazy loading)",
            "Mise en place des fondamentaux SEO (métadonnées, sémantique, performance)",
            "Qualité & maintenabilité (TypeScript, composants réutilisables, patterns)",
          ],
          quote:
            "Ma priorité : livrer une base saine et scalable, sur laquelle Maono peut itérer vite sans dégrader l'expérience.",
        },
        {
          num: "05",
          title: "Démarche de développement",
          content: "",
          subsections: [
            {
              title: "1. Cadrage & structure",
              content:
                "J'ai travaillé à partir des piliers de Maono pour construire une structure de pages claire (pôles, offres, preuves, CTA) et une navigation cohérente. L'objectif : réduire l'ambiguïté et guider la lecture sans surcharge.",
            },
            {
              title: "2. Implémentation orientée performance",
              content:
                "J'ai mis l'accent sur une implémentation robuste : composants modulaires, pages optimisées, chargement maîtrisé des assets et une base TypeScript stable pour faciliter l'évolution continue du site.",
            },
          ],
        },
        {
          num: "06",
          title: "Direction UI & intentions visuelles",
          content: "",
          subsections: [
            {
              title: "Intention globale",
              content: "L'interface devait refléter :",
              bullets: [
                "Une identité sobre et premium — sans surcharge",
                "Une hiérarchie claire — lisibilité immédiate",
                "Une cohérence cross-device — mobile-first",
              ],
            },
            {
              title: "Principes UI",
              bullets: [
                "Composants réutilisables pour garantir la cohérence",
                "Animations légères au service de la compréhension",
                "Espaces et grilles maîtrisés pour rythmer la lecture",
                "Typographie comme outil de hiérarchie et d'impact",
              ],
            },
          ],
          quote:
            "Le design est au service du message, et le code au service du design — sans compromis sur la performance.",
        },
        {
          num: "07",
          title: "Valeur apportée",
          content: "",
          subsections: [
            {
              title: "Pour Maono",
              bullets: [
                "Une base frontend solide et maintenable",
                "Un site performant et prêt pour l'évolution (nouvelles pages, contenus, offres)",
                "Une vitrine crédible (SEO, accessibilité, qualité perçue)",
              ],
            },
            {
              title: "Pour les utilisateurs",
              bullets: [
                "Accès rapide à l'information (navigation claire, contenu scannable)",
                "Expérience fluide sur mobile et desktop",
                "Temps de chargement réduit et interactions nettes",
              ],
            },
          ],
        },
        {
          num: "08",
          title: "Learnings & recul",
          content:
              "Maono m'a confirmé qu'un site vitrine performant est un produit à part entière : il nécessite une architecture claire, des choix techniques maîtrisés et une attention constante à la qualité perçue. La crédibilité se joue autant dans le contenu que dans l'exécution.",
            quote:
              "La meilleure vitrine, c'est celle qui ne se fait pas remarquer — parce qu'elle fonctionne parfaitement.",
          },
        ],
      url: "https://maono.co",
      urlLabel: "Visiter le site",
      },
  // 4. Alea Park
  {
    slug: "alea-park",
    title: "Alea Park",
    subtitle: "Création du site web d'un complexe sportif & de loisirs",
    type: "Développement Web",
      sector: "Sport · Loisirs",
      tags: ["Web", "UI"],
      year: "2025",
    role: "Développeur Frontend",
    scope: "Développement Web · Intégration · Animations",
    description:
        "Alea Park est un complexe sportif et de loisirs qui réunit sport, convivialité et événementiel sur un même site. Le défi n'était pas de concevoir un site vitrine — c'était de traduire en ligne une expérience collective avant même que l'utilisateur ne franchisse les portes du lieu.",
      vision:
        "L'enjeu digital était de créer l'envie avant la visite — transformer une navigation en projection émotionnelle.",
    thumbnail:
      "/images/projects/aleapark/01.png",
    gallery: [
      "/images/projects/aleapark/01.png",
      "/images/projects/aleapark/02.png",
      "/images/projects/aleapark/03.png",
    ],
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    metrics: [
        { label: "Type de projet", value: "Site web" },
        { label: "Secteur", value: "Sport" },
        { label: "Année", value: "2025" },
        { label: "Rôle", value: "Developpeur" },
    ],
      sections: [
        {
          num: "02",
          title: "Contexte & enjeux",
          content:
            "Alea Park propose une offre multiservices (sport, loisirs, événements). Le site devait présenter cette diversité sans complexifier la lecture, tout en restant rapide sur mobile et efficace pour convertir (contact / réservation).",
          bullets: [
            "Clarifier l'offre en quelques secondes (scannable)",
            "Mettre en valeur les activités avec une UI immersive mais légère",
            "Optimiser le chargement (images, sections, animations)",
            "Faciliter la conversion (CTA visibles, friction minimale)",
          ],
          subsections: [
            {
              title: "Enjeux clés",
              bullets: [
                "Hiérarchiser l'information et structurer les sections",
                "Maintenir une performance stable (Core Web Vitals)",
                "Garantir une expérience fluide sur mobile",
                "Assurer une base maintenable pour évoluer (nouvelles activités, événements)",
              ],
            },
          ],
          quote:
            "L'objectif : une expérience immersive qui reste performante — l'émotion ne doit pas coûter du temps de chargement.",
        },
        {
          num: "03",
          title: "Mon rôle & responsabilités",
          content:
            "Sur ce projet, j'ai assuré l'implémentation frontend et l'intégration UI, avec un focus sur la performance, l'accessibilité et la conversion.",
          bullets: [
            "Intégration des pages et des sections (architecture composants)",
            "Animations et interactions (Framer Motion) sans dégrader la fluidité",
            "Optimisation des images et des chargements (lazy loading, formats)",
            "SEO & sémantique (structure, titres, contenu)",
            "Responsive et accessibilité (mobile-first)",
          ],
          quote:
            "Un site qui convertit commence par un site qui charge vite et se lit sans effort.",
        },
        {
          num: "04",
          title: "Démarche de développement",
          content: "",
          subsections: [
            {
              title: "1. Structure & découpage",
              content:
                "J'ai structuré la page en sections lisibles (hero, activités, ambiance, preuves, contact) avec un découpage clair des composants pour faciliter l'évolution et la réutilisation.",
            },
            {
              title: "2. Performance & UX",
              content: "Objectifs techniques et expérience :",
              bullets: [
                "Chargement rapide sur mobile (images optimisées, lazy loading)",
                "Animations progressives (sans jank)",
                "CTA visibles et accessibles",
                "Contenu hiérarchisé pour être scanné",
              ],
            },
            {
              title: "3. Maintenabilité",
              content:
                "Une base TypeScript propre et des composants cohérents pour permettre d'ajouter de nouvelles activités / événements sans régression.",
            },
          ],
          quote:
            "Une bonne architecture frontend protège la cohérence visuelle et la performance dans la durée.",
        },
        {
          num: "05",
          title: "Direction UI & intentions visuelles",
          content: "",
          subsections: [
            {
              title: "Intention globale",
              content: "Une interface pensée pour :",
              bullets: [
                "Créer une immersion immédiate (hero et visuels)",
                "Garder une hiérarchie lisible (titres, sections, spacing)",
                "Assurer une cohérence UI sur tout le site",
                "Préserver la performance malgré les visuels",
              ],
            },
            {
              title: "Choix visuels",
              bullets: [
                "Fond sombre pour valoriser les images et renforcer la profondeur",
                "Accents lumineux pour structurer la hiérarchie de lecture",
                "Typographies affirmées mais lisibles sur tous supports",
                "Espaces généreux pour équilibrer densité et lisibilité",
              ],
            },
          ],
          quote:
            "Le visuel doit servir le message — et rester optimisé pour ne pas pénaliser l'expérience.",
        },
        {
          num: "06",
          title: "Écrans & sections clés",
          content: "",
          subsections: [
            {
              title: "Hero section",
              content:
                "Message court + visuel fort, avec une mise en page responsive et un chargement optimisé des assets.",
            },
            {
              title: "Section Activités",
              content:
                "Cartes/sections structurées pour présenter l'offre rapidement, sans surcharge, avec une hiérarchie claire.",
            },
            {
              title: "Sections d'ambiance",
              content:
                "Visuels mis en scène avec des animations légères et des optimisations (lazy loading) pour garder une navigation fluide.",
            },
            {
              title: "Call to action",
              content:
                "CTA placés aux moments clés, avec des actions simples (contact / réservation) et une accessibilité correcte.",
            },
          ],
        },
        {
          num: "07",
          title: "Valeur apportée",
          content: "",
          subsections: [
            {
              title: "Pour les utilisateurs",
              bullets: [
                "Compréhension rapide de l'offre et des activités",
                "Expérience fluide sur mobile",
                "Accès direct au contact / réservation",
              ],
            },
            {
              title: "Pour Alea Park",
              bullets: [
                "Un site performant et maintenable",
                "Une vitrine crédible pour attirer et convertir",
                "Une base prête pour faire évoluer contenus et événements",
              ],
            },
          ],
        },
        {
          num: "08",
          title: "Learnings & recul",
          content:
              "Ce projet m'a rappelé qu'un site vitrine est aussi un produit : performance, structure et qualité d'implémentation conditionnent directement la perception. Une UI immersive doit être accompagnée d'une discipline d'optimisation.",
            quote:
              "La meilleure expérience est souvent celle qu'on ne remarque pas : rapide, fluide, évidente.",
          },
        ],
      url: "https://aleapark.tg",
      urlLabel: "Visiter le site",
      },
  // 5. TogoTech
  {
    slug: "togotech",
    title: "TogoTech",
    subtitle:
      "Développement frontend d'une plateforme de valorisation de l'écosystème tech",
    type: "Développement Web",
      sector: "Technologie · Innovation",
      tags: ["Web", "Product"],
      year: "2025",
    role: "Développeur Frontend",
    scope: "Développement Web · Architecture UI · Intégration",
      description:
        "TogoTech est une initiative visant à structurer et valoriser l'écosystème tech togolais. Le défi n'était pas esthétique — c'était architectural : rendre un écosystème fragmenté lisible, hiérarchiser des contenus hétérogènes, et positionner l'innovation locale avec une crédibilité internationale.",
      vision:
        "Structurer un écosystème complexe dans une interface lisible — sans sacrifier la profondeur au profit de la simplification.",
    thumbnail:
      "/images/projects/togotech/01.png",
    gallery: [
      "/images/projects/togotech/01.png",
      "/images/projects/togotech/02.png",
      "/images/projects/togotech/03.png",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    metrics: [
        { label: "Type de projet", value: "Client" },
        { label: "Secteur", value: "Tech" },
        { label: "Année", value: "2025" },
        { label: "Rôle", value: "Developpeur" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & enjeux",
        content:
          "TogoTech devait agréger des contenus variés (acteurs, initiatives, infos) et les rendre trouvables rapidement. L'enjeu côté frontend : transformer une densité de données en une UI claire, rapide et évolutive.",
        bullets: [
          "Navigation claire malgré la densité (catégories, sections)",
          "Performance et lisibilité sur mobile",
          "Composants réutilisables pour scaler les contenus",
        ],
        subsections: [
          {
            title: "Enjeux principaux",
            bullets: [
              "Rendre l'information technologique accessible à tous",
              "Valoriser les initiatives locales",
              "Créer un point d'entrée crédible pour l'écosystème",
              "Offrir une expérience claire malgré la diversité des contenus",
            ],
          },
        ],
          quote:
            "Structurer l'information est aussi un travail d'architecture frontend.",
        },
        {
          num: "03",
          title: "Mon rôle & responsabilités",
          content:
            "Sur ce projet, j'ai contribué à la mise en place d'une base frontend claire et maintenable pour présenter l'écosystème et ses contenus.",
          bullets: [
            "Structuration des pages et des composants",
            "Intégration UI responsive (mobile-first)",
            "Optimisation du rendu et du chargement (assets, sections)",
            "Qualité du code (TypeScript, patterns, réutilisabilité)",
          ],
          quote:
            "Une plateforme utile, c'est une plateforme où l'information se trouve sans effort.",
        },
        {
          num: "04",
          title: "Démarche de développement",
          content: "",
          subsections: [
            {
              title: "1. Découpage & conventions",
              content:
                "Mise en place d'une structure de pages et de composants cohérente pour accueillir des contenus hétérogènes sans multiplier la complexité.",
            },
            {
              title: "2. Lisibilité & performance",
              bullets: [
                "UI scannable (titres, cards, sections)",
                "Chargement progressif et optimisations sur mobile",
                "Composants réutilisables et variantes",
                "Préparation à l'extension (plus d'initiatives, plus d'acteurs)",
              ],
            },
            {
              title: "3. Maintenabilité",
              content:
                "Organisation du code et des composants pour garder une base facile à faire évoluer (ajout de sections, nouveaux types de contenu).",
            },
          ],
        },
        {
          num: "05",
          title: "Direction UI & intentions visuelles",
          content: "",
          subsections: [
            {
              title: "Intention globale",
              content: "L'interface devait :",
              bullets: [
                "Inspirer confiance et crédibilité institutionnelle",
                "Refléter la modernité technologique sans être froide",
                "Rester sobre sans sacrifier la personnalité",
              ],
            },
            {
              title: "Principes UI",
              bullets: [
                "Design épuré à densité maîtrisée",
                "Hiérarchie typographique lisible sur tous supports",
                "Palette cohérente — jamais décorative",
                "Contenu au premier plan, design en support",
              ],
            },
          ],
          quote:
            "Une UI claire + une implémentation robuste = une plateforme crédible.",
        },
        {
          num: "06",
          title: "Écrans & sections clés",
          content: "",
          subsections: [
            {
              title: "Page d'accueil",
              content:
                "Présentation immédiate de la mission, contextualisation de l'écosystème, accès rapide aux contenus stratégiques sans surcharge.",
            },
            {
              title: "Sections de contenu",
              content:
                "Chaque section est pensée pour informer sans submerger, valoriser les initiatives locales et maintenir une lecture structurée à travers la diversité des contenus.",
            },
            {
              title: "Prototype",
              content:
                "Le prototype valide les parcours principaux, teste la compréhension globale et anticipe les comportements réels des utilisateurs cibles.",
            },
          ],
        },
        {
          num: "07",
          title: "Valeur apportée",
          content: "",
          subsections: [
            {
              title: "Pour le client",
              bullets: [
                "Une plateforme structurée et crédible sur la scène internationale",
                "Une base UX solide et extensible",
                "Une image professionnelle alignée avec les ambitions de l'initiative",
              ],
            },
            {
              title: "Pour les utilisateurs",
              bullets: [
                "Accès simplifié à l'information et aux ressources",
                "Lecture claire de l'écosystème tech local",
                "Expérience rassurante et sans friction",
              ],
            },
          ],
        },
        {
          num: "08",
          title: "Learnings & recul",
          content:
                "TogoTech m'a appris que la clarté perçue vient d'abord de la structure : composants, hiérarchie, navigation, performance. Le frontend n'est pas que de l'UI : c'est un système d'organisation de l'information.",
            quote:
              "La clarté n'est pas un style, c'est une architecture.",
          },
        ],
      url: "https://togotech.tg",
      urlLabel: "Visiter le site",
      },
  // 6. SIN
  {
    slug: "sin",
      title: "SIN",
        subtitle: "Société d'Infrastructures Numériques",
        type: "Développement Web",
        sector: "Infrastructures · Institutionnel · Numérique",
        tags: ["Web", "Institutionnel"],
          year: "2025",
        role: "Développeur Frontend",
        scope: "Développement Web · Intégration · Optimisation",
          description:
            "La SIN pilote le développement des infrastructures numériques stratégiques du Togo : fibre optique nationale, data centers, interconnexions internationales. J'ai conçu une expérience digitale institutionnelle capable de traduire la souveraineté numérique du pays en une interface claire, moderne et crédible.",
          vision:
            "Créer une plateforme digitale à la hauteur des ambitions numériques nationales, alliant clarté, autorité et modernité.",
    thumbnail:
      "/images/projects/sin/01.png",
    gallery: [
      "/images/projects/sin/01.png",
      "/images/projects/sin/02.png",
      "/images/projects/sin/03.png",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
      metrics: [
          { label: "Client", value: "SIN" },
          { label: "Création", value: "2025" },
          { label: "Rôle", value: "Developpeur" },
          { label: "Périmètre", value: "Web" },
      ],
        sections: [
            {
              num: "01",
              title: "Contexte",
              content:
                "La SIN est un acteur stratégique de l'écosystème numérique togolais. Le site devait refléter son rôle institutionnel, clarifier ses missions et offrir une expérience web moderne : rapide, accessible, et robuste sur tous les supports.",
              bullets: [
                "Refléter son rôle institutionnel",
                "Clarifier ses missions auprès des partenaires publics et privés",
                "Valoriser les infrastructures nationales",
                "Inspirer confiance et crédibilité",
              ],
              quote:
                "L'enjeu : transformer un contenu dense en une interface claire, performante et facile à maintenir.",
            },
          {
            num: "02",
            title: "Mission & problématique",
            content:
              "Comment traduire la souveraineté numérique d'un pays en une expérience digitale claire et contemporaine ?",
            subsections: [
              {
                title: "Les défis",
                bullets: [
                  "Hiérarchiser une grande quantité d'informations institutionnelles",
                  "Simplifier le vocabulaire technique",
                  "Moderniser l'image sans perdre la posture institutionnelle",
                  "Créer une navigation fluide malgré la densité de contenu",
                ],
              },
            ],
          },
          {
            num: "03",
            title: "Approche de développement",
            content:
              "J'ai structuré le projet autour de trois piliers :",
            subsections: [
              {
                title: "1. Architecture de contenu",
                content:
                  "Repenser l'architecture de l'information pour prioriser les messages clés : mission, infrastructures, services.",
              },
              {
                title: "2. Implémentation stable",
                content:
                  "Composants cohérents, responsive, et une base TypeScript propre pour faciliter l'évolution et réduire la dette.",
              },
              {
                title: "3. Performance & accessibilité",
                content:
                  "Optimisation du chargement et respect des bonnes pratiques d'accessibilité pour une expérience fiable.",
              },
            ],
          },
          {
            num: "04",
            title: "Direction artistique",
            content:
              "L'univers visuel repose sur :",
            bullets: [
              "Un fond sombre profond pour renforcer la dimension stratégique",
              "Des touches de vert pour symboliser croissance et innovation",
              "Des visuels technologiques immersifs — data centers, réseaux, cartographies",
              "Une typographie élégante et institutionnelle",
            ],
            quote:
              "Créer un équilibre entre autorité publique et modernité digitale.",
          },
          {
            num: "05",
            title: "Expérience utilisateur",
            content:
              "L'expérience a été pensée pour :",
            bullets: [
              "Faciliter l'accès aux informations réglementaires",
              "Structurer les contenus longs en blocs digestes",
              "Mettre en avant les infrastructures stratégiques",
              "Offrir une lecture fluide sur desktop et mobile",
            ],
            quote:
              "Chaque section a été conçue pour guider progressivement l'utilisateur, du contexte institutionnel vers la compréhension opérationnelle.",
          },
          {
            num: "06",
            title: "Interfaces clés",
            content: "",
            subsections: [
              {
                title: "Page d'accueil",
                content:
                  "Positionnement stratégique clair, mise en avant des infrastructures et des missions.",
              },
              {
                title: "Page À propos",
                content:
                  "Narration institutionnelle structurée et accessible.",
              },
              {
                title: "Pages Infrastructures",
                content:
                  "Valorisation visuelle des équipements critiques.",
              },
              {
                title: "Responsive",
                content:
                  "Optimisation mobile pour une consultation simplifiée des contenus.",
              },
            ],
          },
          {
            num: "07",
            title: "Résultat & impact",
            content:
              "Un site institutionnel modernisé qui :",
            bullets: [
              "Renforce la crédibilité digitale de la SIN",
              "Clarifie son rôle stratégique",
              "Valorise les infrastructures nationales",
              "Améliore la lisibilité des contenus réglementaires",
            ],
            quote:
              "Construire l'infrastructure numérique d'un pays commence aussi par une interface claire.",
          },
          {
            num: "08",
            title: "Learnings & recul",
            content:
                  "Ce projet m'a rappelé qu'un site institutionnel se juge sur l'exécution : clarté, stabilité, performance, accessibilité. La crédibilité passe autant par la qualité du contenu que par la qualité du frontend.",
                quote:
                  "La crédibilité se perçoit dans les détails : structure, vitesse, cohérence.",
            },
          ],
      url: "https://sin.tg",
      urlLabel: "Visiter le site",
      },
  // 7. ARCEP
  // {
  //   slug: "arcep",
  //   title: "ARCEP",
  //   subtitle: "Développement d'une vitrine institutionnelle moderne et performante",
  //   type: "Développement Web",
  //   sector: "Institutionnel · Régulation · Télécoms",
  //   tags: ["Web", "Institutionnel", "Fullstack", "Architecture"],
  //   year: "2025",
  //   role: "Développeur Frontend",
  //   scope: "Développement Web · Intégration · Performance · SEO",
  //   description:
  //     "ARCEP est une autorité de régulation dont la plateforme web doit rendre accessibles des contenus institutionnels et réglementaires (missions, actualités, décisions, documents) tout en conservant une lecture claire et une crédibilité forte.",
  //   vision:
  //     "Construire une interface institutionnelle fiable : claire pour le public, robuste pour l'évolution, et performante sur tous les supports.",
  //   thumbnail: "/images/projects/arcep/01.png",
  //   gallery: [
  //     "/images/projects/arcep/01.png",
  //     "/images/projects/arcep/02.png",
  //     "/images/projects/arcep/03.png",
  //   ],
  //   tools: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   metrics: [
  //     { label: "Type de projet", value: "Client" },
  //     { label: "Secteur", value: "Institutionnel" },
  //     { label: "Année", value: "2025" },
  //     { label: "Rôle", value: "Developpeur" },
  //   ],
  //   sections: [
  //     {
  //       num: "02",
  //       title: "Contexte & problématique",
  //       content:
  //         "Le site devait présenter une grande quantité de contenu institutionnel, tout en gardant une expérience simple : trouver l'information rapidement, comprendre le rôle de l'institution, et accéder aux documents sans friction.",
  //       bullets: [
  //         "Densité de contenu (documents, actualités, pages institutionnelles)",
  //         "Niveau d'exigence élevé sur la crédibilité et la clarté",
  //         "Performance et accessibilité indispensables (public large)",
  //         "Base maintenable pour itérer sans régression",
  //       ],
  //       quote:
  //         "Sur l'institutionnel, la qualité perçue passe par la clarté et la stabilité de l'expérience.",
  //     },
  //     {
  //       num: "03",
  //       title: "Objectifs produit",
  //       content:
  //         "L'approche a consisté à combiner une structure de contenu rigoureuse et une implémentation frontend stable.",
  //       bullets: [
  //         "Hiérarchiser l'information et clarifier les parcours",
  //         "Renforcer la performance (Core Web Vitals)",
  //         "Améliorer le SEO et l'accessibilité",
  //         "Faciliter l'évolution (nouveaux contenus / nouvelles pages)",
  //       ],
  //       quote:
  //         "Une bonne architecture frontend évite que la complexité du contenu devienne une complexité pour l'utilisateur.",
  //     },
  //     {
  //       num: "04",
  //       title: "Mon rôle & responsabilités",
  //       content:
  //         "J'ai contribué à l'implémentation frontend et à la structuration de l'interface, avec un focus sur la maintenabilité et la performance.",
  //       bullets: [
  //         "Mise en place d'une architecture de composants réutilisables",
  //         "Intégration responsive (mobile-first)",
  //         "Optimisations performance (images, sections, chargement)",
  //         "SEO technique et sémantique",
  //         "Qualité du code (TypeScript, conventions)",
  //       ],
  //       quote:
  //         "Le but : livrer une base solide, simple à faire évoluer et agréable à utiliser.",
  //     },
  //     {
  //       num: "05",
  //       title: "Démarche de développement",
  //       content: "",
  //       subsections: [
  //         {
  //           title: "1. Structure & navigation",
  //           content:
  //             "Découpage des pages et des sections pour guider la lecture : qui sommes-nous, missions, contenus, documents, actualités, contact.",
  //         },
  //         {
  //           title: "2. Performance & accessibilité",
  //           bullets: [
  //             "Optimiser les médias et le chargement",
  //             "Garantir une hiérarchie de titres correcte",
  //             "Assurer une navigation clavier et une bonne lisibilité",
  //           ],
  //         },
  //         {
  //           title: "3. Maintenabilité",
  //           content:
  //             "Composants cohérents, styles maîtrisés et conventions TypeScript pour réduire la dette et accélérer les évolutions.",
  //         },
  //       ],
  //     },
  //     {
  //       num: "06",
  //       title: "Interface & UI",
  //       content: "",
  //       subsections: [
  //         {
  //           title: "Principes",
  //           bullets: [
  //             "Sobriété et lisibilité (institutionnel)",
  //             "Composants cohérents et réutilisables",
  //             "Mise en avant des contenus et documents",
  //           ],
  //         },
  //       ],
  //       quote:
  //         "Une interface institutionnelle doit rassurer : tout doit être clair, stable et prévisible.",
  //     },
  //     {
  //       num: "07",
  //       title: "Valeur apportée",
  //       content: "",
  //       subsections: [
  //         {
  //           title: "Pour l'institution",
  //           bullets: [
  //             "Vitrine crédible et moderne",
  //             "Base technique maintenable",
  //             "Amélioration de la découverte des contenus",
  //           ],
  //         },
  //         {
  //           title: "Pour les utilisateurs",
  //           bullets: [
  //             "Accès rapide à l'information",
  //             "Lecture plus claire des pages et documents",
  //             "Expérience fluide sur mobile",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       num: "08",
  //       title: "Learnings & recul",
  //       content:
  //         "Ce projet m'a confirmé qu'en contexte institutionnel, la valeur se joue sur l'exécution : structurer le contenu, garder une performance stable, et maintenir une base de code saine pour accompagner la durée.",
  //       quote:
  //         "La crédibilité se gagne avec de la clarté, de la performance et de la cohérence.",
  //     },
  //   ],
  //   url: "https://demo.arcep.tg",
  //   urlLabel: "Visiter le site",
  // },
  // 8. Lome Data Centre
  {
    slug: "lome-data-centre",
    title: "Lomé Data Centre",
    subtitle: "Développement d'une vitrine pour le premier Data Center de niveau Tier III au Togo",
    type: "Développement Web",
    sector: "Technologie · Infrastructures",
    tags: ["Web", "Institutionnel"],
    year: "2024",
    role: "Développeur Frontend",
    scope: "Développement Web · Intégration",
    description: "Lomé Data Centre (LDC) est une infrastructure critique. Le site web reflète cette exigence de sécurité, de fiabilité et de haute disponibilité à travers une interface claire, moderne et institutionnelle.",
    vision: "Une vitrine digitale à l'image du centre : sécurisée, performante et fiable.",
    thumbnail: "/images/projects/ldc/01.png",
    gallery: [
      "/images/projects/ldc/01.png",
      "/images/projects/ldc/02.png",
      "/images/projects/ldc/03.png"
    ],
    tools: ["Next.js", "Tailwind CSS"],
    metrics: [
      { label: "Client", value: "LDC" },
      { label: "Secteur", value: "Infrastructures" },
      { label: "Rôle", value: "Developpeur" },
    ],
    sections: [
      {
        num: "01",
        title: "Contexte & réalisation",
        content: "Développement d'une vitrine institutionnelle performante pour mettre en valeur les infrastructures et attirer des partenaires régionaux et internationaux.",
        bullets: [
          "Intégration d'interfaces responsives",
          "Mise en avant des capacités techniques du centre",
          "Optimisation des temps de chargement"
        ]
      }
    ],
    url: "https://lomedatacentre.tg/en",
    urlLabel: "Visiter le site"
  },
  // 9. Palais de Lome
  {
    slug: "palais-de-lome",
    title: "Palais de Lomé",
    subtitle: "Développement vitrine pour le centre d'art et de culture de Lomé",
    type: "Développement Web",
    sector: "Culture · Art",
    tags: ["Web", "Culturel"],
    year: "2023",
    role: "Développeur Frontend",
    scope: "Développement Web · Intégration",
    description: "Le Palais de Lomé est un lieu historique transformé en centre d'art. La plateforme digitale offre une expérience visuelle riche pour présenter les expositions, le parc et l'histoire du lieu.",
    vision: "Traduire l'élégance architecturale et la richesse culturelle dans l'espace digital.",
    thumbnail: "/images/projects/palaisdelome/01.png",
    gallery: [
      "/images/projects/palaisdelome/01.png",
      "/images/projects/palaisdelome/02.png",
      "/images/projects/palaisdelome/03.png"
    ],
    tools: ["Wordpress", "Tailwind CSS", "JavaScript"],
    metrics: [
      { label: "Client", value: "Palais de Lomé" },
      { label: "Secteur", value: "Culture" },
      { label: "Rôle", value: "Developpeur" },
    ],
    sections: [
      {
        num: "01",
        title: "Contexte & réalisation",
        content: "Création d'une plateforme immersive mettant en avant le patrimoine togolais et la programmation culturelle du Palais.",
        bullets: [
          "Mise en valeur du contenu iconographique",
          "Navigation fluide entre les différentes galeries",
          "Expérience optimisée sur mobile pour les visiteurs"
        ]
      }
    ],
    url: "https://palaisdelome.com",
    urlLabel: "Visiter le site"
  },
  // 10. Aurelie Jarry
  {
    slug: "aurelie-jarry",
    title: "Aurélie Jarry",
    subtitle: "Portfolio digital d'artiste contemporaine",
    type: "Développement Web",
    sector: "Art · Portfolio",
    tags: ["Web", "Portfolio"],
    year: "2024",
    role: "Développeur Frontend",
    scope: "Développement Web · UI",
    description: "Une plateforme minimaliste et élégante conçue pour mettre en valeur les œuvres et le parcours créatif de l'artiste de manière immersive.",
    vision: "Le code au service de l'œuvre : un cadre invisible pour sublimer l'art.",
    thumbnail: "/images/projects/aureliejarry/01.png",
    gallery: [
      "/images/projects/aureliejarry/01.png",
      "/images/projects/aureliejarry/02.png",
      "/images/projects/aureliejarry/03.png"
    ],
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Client", value: "Aurélie Jarry" },
      { label: "Secteur", value: "Art" },
      { label: "Rôle", value: "Developpeur" },
    ],
    sections: [
      {
        num: "01",
        title: "Contexte & réalisation",
        content: "Conception et développement d'un portfolio sur mesure avec des transitions douces et une typographie soignée.",
        bullets: [
          "Architecture minimaliste (focus sur les images)",
          "Micro-interactions fluides et discrètes",
          "Performance et SEO"
        ]
      }
    ],
    url: "https://aureliejarry.com",
    urlLabel: "Visiter le site"
  },
  // 11. Fondation BKF
  {
    slug: "fondation-bkf",
    title: "Fondation BKF",
    subtitle: "Plateforme digitale pour l'engagement philanthropique",
    type: "Développement Web",
    sector: "Fondation · ONG",
    tags: ["Web", "Institutionnel"],
    year: "2024",
    role: "Développeur Frontend",
    scope: "Développement Web · Intégration",
    description: "La fondation intervient dans des secteurs clés pour le développement social. Le site permet de présenter les actions, les partenaires et de sensibiliser le public aux causes défendues.",
    vision: "Donner de la visibilité aux actions ayant un impact positif réel.",
    thumbnail: "/images/projects/fondation-bkf/01.png",
    gallery: [
      "/images/projects/fondation-bkf/01.png",
      "/images/projects/fondation-bkf/02.png",
      "/images/projects/fondation-bkf/03.png"
    ],
    tools: ["Next.js", "Tailwind CSS"],
    metrics: [
      { label: "Client", value: "Fondation BKF" },
      { label: "Secteur", value: "Philanthropie" },
      { label: "Rôle", value: "Developpeur" },
    ],
    sections: [
      {
        num: "01",
        title: "Contexte & réalisation",
        content: "Mise en place d'une vitrine claire permettant de communiquer sur les missions de la fondation et ses appels à projets.",
        bullets: [
          "Hiérarchisation claire des domaines d'intervention",
          "Intégration d'un système d'actualités",
          "Accessibilité et clarté de navigation"
        ]
      }
    ],
    url: "https://fondationbkf.org",
    urlLabel: "Visiter le site"
  },
  // 12. Kidole
  // {
  //   slug: "kidole",
  //   title: "Kidole",
  //   subtitle: "Plateforme de gestion pour agences",
  //   type: "Développement Web",
  //   sector: "Saas · Agence",
  //   tags: ["Web", "Saas", "Dashboard"],
  //   year: "2026",
  //   role: "Développeur Full-Stack",
  //   scope: "Développement Web · Architecture · Dashboard",
  //   description: "Conception et développement d'un dashboard métier sur mesure, pensé pour simplifier et optimiser les process d'une agence.",
  //   vision: "Allier puissance métier et simplicité d'utilisation dans un outil du quotidien.",
  //   thumbnail: "/mach.png",
  //   gallery: [
  //     "/mach.png",
  //     "/mach.png",
  //     "/mach.png"
  //   ],
  //   tools: ["Next.js", "Tailwind CSS"],
  //   metrics: [
  //     { label: "Client", value: "Kidole" },
  //     { label: "Secteur", value: "Saas" },
  //     { label: "Rôle", value: "Full-Stack" },
  //   ],
  //   sections: [
  //     {
  //       num: "01",
  //       title: "Contexte & réalisation",
  //       content: "Développement d'une interface d'administration robuste et intuitive pour visualiser directement l'activité et prendre des décisions rapides.",
  //       bullets: [
  //         "Tableaux de bord dynamiques",
  //         "Architecture Full-Stack optimisée",
  //         "Interface fluide et réactive"
  //       ]
  //     }
  //   ],
  //   url: "https://demo.kidole.io/agency/dashboard",
  //   urlLabel: "Visiter le dashboard"
  // }
];
