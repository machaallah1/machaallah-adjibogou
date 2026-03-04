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
  colors: { name: string; hex: string }[];
  tools: string[];
  metrics: { label: string; value: string }[];
  sections: ProjectSection[];
  url?: string;
  urlLabel?: string;
}

export const projects: Project[] = [
  // 1. TOJU
  {
    slug: "toju",
    title: "TOJU",
    subtitle:
      "Conception UX/UI d'une plateforme de suivi en soins palliatifs",
    type: "UX / Product",
    sector: "Santé · e-santé · Social impact",
    tags: ["UX", "Product"],
    year: "2023–2024",
    role: "UX/UI Designer · Concepteur produit",
    scope: "Recherche · UX · UI · Prototype",
      description:
        "TOJU est une plateforme de suivi des patients en soins palliatifs, conçue pour améliorer la coordination médicale, réduire la charge opérationnelle des soignants et renforcer la communication entre professionnels, patients et proches dans un contexte de ressources limitées.",
      vision:
        "Les soins palliatifs ne concernent pas seulement la fin de vie. Ils concernent la dignité, la coordination et la qualité du suivi au quotidien.",
    thumbnail:
      "/images/projects/toju/01.png",
    gallery: [
      "/images/projects/toju/01.png",
      "/images/projects/toju/02.png",
      "/images/projects/toju/03.png",
      "/images/projects/toju/04.png",
      "/images/projects/toju/05.png",
      "/images/projects/toju/06.png",
      "/images/projects/toju/07.png",
      "/images/projects/toju/08.png",
      "/images/projects/toju/09.png",
      "/images/projects/toju/10.png",
      "/images/projects/toju/11.png",
      "/images/projects/toju/12.png",
      "/images/projects/toju/13.png",
      "/images/projects/toju/14.png",
      "/images/projects/toju/15.png",
      "/images/projects/toju/16.png",
      "/images/projects/toju/17.png",
    ],
    colors: [
      { name: "Soft Sage", hex: "#0065FF" },
      { name: "Healing Green", hex: "#0CE07A" },
      { name: "Warm Cream", hex: "#FFD211" },
      { name: "Calm Stone", hex: "#F33060" },
    ],
    tools: ["Figma", "Miro", "Notion", "UserTesting"],
    metrics: [
      { label: "Entretiens", value: "40" },
      { label: "Personas", value: "5" },
      { label: "Journey maps", value: "3" },
      { label: "Année", value: "23–24" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & problématique",
        content:
          "Au Bénin, plus de 62 000 personnes ont besoin de soins palliatifs chaque année, principalement en raison du cancer et du VIH/SIDA. Pourtant, les soins palliatifs restent :",
        bullets: [
          "Peu connus du grand public",
          "Faiblement structurés sur le plan organisationnel",
          "Difficilement accessibles hors des centres hospitaliers",
        ],
        subsections: [
          {
            title: "Les professionnels de santé font face à",
            bullets: [
              "Un manque d'outils numériques adaptés",
              "Une gestion des données souvent réalisée sur Excel",
              "Des difficultés de suivi à domicile",
              "Des problèmes logistiques (déplacements, coordination)",
            ],
          },
        ],
          quote:
            "Comment améliorer l'accessibilité, la coordination et le suivi des soins palliatifs grâce au numérique — dans un contexte de ressources contraintes ?",
        },
        {
          num: "03",
          title: "Recherche & démarche terrain",
          content:
            "TOJU repose sur une recherche qualitative approfondie menée directement sur le terrain.",
          subsections: [
            {
              title: "Méthodologie",
              bullets: [
                "40 entretiens semi-dirigés — 20 professionnels de santé, 20 membres du grand public",
                "Analyse de données issues d'études cliniques nationales",
                "Veilles sociales, concurrentielles, juridiques, littéraires et artistiques",
              ],
            },
            {
              title: "Constats clés",
              bullets: [
                "100 % des personnes du grand public interrogées ne connaissaient pas le terme « soins palliatifs »",
                "Aucun des professionnels interrogés n'avait reçu de formation spécifique durant ses études",
                "La douleur est présente chez 100 % des patients admis en soins palliatifs",
              ],
            },
          ],
          quote:
            "Ces constats terrain ont directement déterminé les priorités UX — pas des hypothèses, des faits.",
        },
        {
          num: "04",
          title: "Cibles utilisateurs",
          content: "TOJU s'adresse à trois profils aux besoins distincts :",
          subsections: [
            {
              title: "Professionnels de santé",
              content:
                "Infirmiers, coordinateurs de soins palliatifs, médecins référents.",
              bullets: [
                "Besoins : suivi structuré, alertes critiques, rapports lisibles, coordination terrain",
              ],
            },
            {
              title: "Patients en soins palliatifs",
              content:
                "Souvent suivis à domicile, mobilité réduite, forte dépendance aux aidants.",
              bullets: [
                "Besoins : soulagement de la douleur, suivi régulier, communication simplifiée",
              ],
            },
            {
              title: "Proches & aidants",
              content:
                "Acteurs clés du suivi quotidien — peu formés, charge émotionnelle élevée.",
              bullets: [
                "Besoins : information accessible, réassurance, lien direct avec les soignants",
              ],
            },
          ],
        },
        {
          num: "05",
          title: "Concept & proposition de valeur",
          content:
            "TOJU est conçu comme une plateforme de suivi palliatif centralisée, accessible et humaine.",
          bullets: [
            "Suivi de l'état de santé en temps réel",
            "Alertes automatiques en cas de changement critique",
            "Planification et suivi des visites à domicile",
            "Centralisation des données patients — remplacement d'Excel",
            "Amélioration de la coordination entre tous les acteurs",
          ],
          quote:
            "Le design vise à soutenir la décision médicale, pas à la complexifier.",
        },
        {
          num: "06",
          title: "Démarche UX",
          content:
            "Le projet repose sur trois axes stratégiques :",
          bullets: [
            "Faciliter l'accès aux soins palliatifs via des parcours sans friction",
            "Renforcer la coordination médicale et la traçabilité des interventions",
            "Sensibiliser et informer autour des soins palliatifs",
          ],
          quote:
            "Chaque fonctionnalité répond à un problème réel identifié sur le terrain — aucune feature spéculative.",
        },
        {
          num: "07",
          title: "Direction UI & intentions visuelles",
          content: "",
          subsections: [
            {
              title: "Intentions",
              bullets: [
                "Interface sobre et rassurante — jamais anxiogène",
                "Priorité absolue à la lisibilité et à l'utilisabilité",
                "Accessibilité maximale — utilisateurs sous stress, contexte médical",
                "Neutralité émotionnelle respectueuse du contexte de soin",
              ],
            },
          ],
          quote:
            "Le design UI s'efface au profit de l'usage. Dans un contexte médical critique, l'interface ne doit jamais être un obstacle.",
        },
        {
          num: "08",
          title: "Prototype & vision produit",
          content:
            "Un prototype fonctionnel a été conçu pour tester les parcours critiques, simuler les alertes, structurer les tableaux de suivi et projeter l'usage réel en contexte hospitalier et à domicile.",
          subsections: [
            {
              title: "Vision long terme",
              bullets: [
                "Intégration aux dossiers médicaux numériques",
                "Partenariats public-privé pour le déploiement",
                "Extension nationale et régionale",
                "Contribution à une stratégie de e-santé structurée",
              ],
            },
          ],
        },
        {
          num: "09",
          title: "Valeur & impact",
          content: "",
          subsections: [
            {
              title: "Impact social",
              bullets: [
                "Amélioration de la qualité de vie et de suivi des patients",
                "Meilleure prise en charge de la douleur — signal prioritaire",
                "Soutien concret aux proches et aidants",
                "Renforcement des pratiques médicales par la structuration des données",
              ],
            },
            {
              title: "Impact système",
              bullets: [
                "Structuration des soins palliatifs à l'échelle institutionnelle",
                "Optimisation des ressources disponibles",
                "Amélioration de la traçabilité et de la coordination intersectorielle",
              ],
            },
          ],
        },
        {
          num: "10",
          title: "Learnings & posture de designer",
          content:
              "TOJU a redéfini ma compréhension du design responsable. Lier recherche sociale et conception numérique, travailler sur des enjeux éthiques et médicaux, concevoir dans un contexte à fort impact humain — tout cela impose une rigueur et une humilité que les projets commerciaux n'exigent pas au même degré.",
            quote:
              "Concevoir pour la santé, c'est concevoir avec responsabilité. Chaque friction dans l'interface a un coût humain.",
          },
        ],
      url: "https://www.figma.com/proto/nrIme8g0vIfAJ6VnsFIgib/Soins-palliatifs-Bariou?page-id=639%3A3128&node-id=639-4233&starting-point-node-id=639%3A4320&show-proto-sidebar=1&t=ij0nW0HkHNiBAG5I-1",
      urlLabel: "Voir le prototype",
      },
    // 2. On Se Dit Oui
  {
    slug: "on-se-dit-oui",
    title: "On Se Dit Oui",
    subtitle:
      "Conception UX/UI & prototype d'une plateforme mariage",
    type: "UX / Product",
      sector: "Événementiel · Mariage",
      tags: ["UX", "UI", "Product"],
      year: "2025",
      role: "UX/UI Designer · Product Designer",
      scope: "UX · UI · Prototype",
      description:
        "On Se Dit Oui est une plateforme B2C dédiée à l'organisation du mariage. Le vrai défi était de concevoir un produit complexe — site builder, gestion des invités, RSVP, dashboard — accessible à des utilisateurs non-techniques, sans dénaturer l'émotion du moment.",
      vision:
        "Concevoir un produit qui simplifie l'organisation sans alourdir l'expérience — et qui protège l'utilisateur contre sa propre complexité.",
    thumbnail:
      "/images/projects/onseditoui/01.png",
    gallery: [
      "/images/projects/onseditoui/01.png",
      "/images/projects/onseditoui/02.png",
      "/images/projects/onseditoui/03.png",
      "/images/projects/onseditoui/04.png",
      "/images/projects/onseditoui/05.png",
      "/images/projects/onseditoui/06.png",
      "/images/projects/onseditoui/07.png",
      "/images/projects/onseditoui/08.png",
      "/images/projects/onseditoui/09.png",
      "/images/projects/onseditoui/10.png",
      "/images/projects/onseditoui/11.png",
      "/images/projects/onseditoui/12.png",
      "/images/projects/onseditoui/13.png",
      "/images/projects/onseditoui/14.png",
      "/images/projects/onseditoui/15.png",
      "/images/projects/onseditoui/16.png",
      "/images/projects/onseditoui/17.png",
    ],
    colors: [
      { name: "Blush Pink", hex: "#3B3026" },
      { name: "Romantic Rose", hex: "#F09C3D" },
      { name: "Warm Cream", hex: "#FDF8F3" },
      { name: "Charcoal", hex: "#596B54" },
    ],
    tools: ["Figma", "FigJam", "Miro", "Notion", "Maze"],
    metrics: [
        { label: "Type de projet", value: "Client" },
        { label: "Secteur", value: "Mariage" },
        { label: "Année", value: "2025" },
        { label: "Rôle", value: "Product" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & problématique",
        content:
          "On Se Dit Oui est une plateforme B2C permettant aux futurs mariés de créer, personnaliser et gérer un site web de mariage, tout en centralisant des fonctionnalités clés comme les RSVP, la gestion des invités et la communication. Les solutions existantes sur le marché présentent plusieurs limites majeures :",
        bullets: [
          "Templates rigides et peu personnalisables",
          "Interfaces complexes pour des utilisateurs non techniques",
          "Multiplication des outils (site, RSVP, liste d'invités, communication)",
          "Faible contrôle de la confidentialité des informations personnelles",
        ],
          quote:
            "Proposer une solution centralisée, accessible à tous les profils — qui réduit la charge mentale sans supprimer le contrôle.",
        },
        {
          num: "03",
          title: "Utilisateurs & cibles",
          content: "",
          subsections: [
            {
              title: "Jeunes mariés connectés (25–32 ans)",
              content:
                "Priorité mobile, attentes élevées en termes de design, faible tolérance à la complexité, besoin de résultats rapides et rassurants.",
            },
            {
              title: "Mariés confirmés (35–45 ans)",
              content:
                "Temps limité, forte sensibilité à la sécurité et à la confidentialité, recherche d'une expérience stable, élégante et fiable.",
            },
          ],
          quote:
            "Ces deux profils ont imposé des compromis précis sur la densité des fonctionnalités et la lisibilité des parcours.",
        },
        {
          num: "04",
          title: "Mon rôle & périmètre",
          content:
            "Sur On Se Dit Oui, j'ai travaillé comme designer produit UX/UI, avec une vision orientée scalabilité et usage réel.",
          bullets: [
            "Définition de l'expérience utilisateur globale et des parcours critiques",
            "Conception des flux de création, personnalisation et gestion",
            "Design UI de la plateforme B2C et de l'interface d'administration",
            "Prototype fonctionnel desktop et mobile",
          ],
          quote:
            "L'enjeu n'était pas esthétique — il était structurel. Un beau produit inutilisable échoue.",
        },
        {
          num: "05",
          title: "Démarche UX",
          content: "",
          subsections: [
            {
              title: "1. Décomposition du produit",
              content:
                "La plateforme a été pensée autour de 3 grands blocs :",
              bullets: [
                "Site vitrine (découverte & conversion)",
                "Templates de sites de mariage personnalisables",
                "Interface d'administration / builder no-code",
              ],
            },
            {
              title: "2. Simplification d'un produit complexe",
              content: "Le cœur du travail UX a été de :",
              bullets: [
                "Rendre un produit riche accessible sans formation préalable",
                "Éviter les effets \"usine à gaz\" — progressivité fonctionnelle",
                "Maintenir la cohérence visuelle malgré le haut niveau de personnalisation",
              ],
            },
          ],
          quote:
            "Chaque décision UX visait à réduire la charge cognitive — pas à limiter les possibilités.",
        },
        {
          num: "06",
          title: "Focus UX : Builder & Dashboard",
          content: "",
          subsections: [
            {
              title: "Dashboard principal",
              content:
                "Hub central : vision immédiate de l'avancement (RSVP, invités, visites), accès rapide aux actions prioritaires, logique de priorisation claire pour réduire les allers-retours.",
            },
            {
              title: "Éditeur de site (Builder)",
              content:
                "Interface WYSIWYG pensée pour l'édition en temps réel : drag & drop, personnalisation guidée (couleurs, photos, contenus), zéro friction technique — accessible sans compétences de développement.",
            },
          ],
          quote:
            "N'importe quel couple devait pouvoir créer un site élégant et cohérent en moins de 30 minutes.",
        },
        {
          num: "07",
          title: "Direction UI & intentions visuelles",
          content: "",
          subsections: [
            {
              title: "Intentions",
              bullets: [
                "Esthétique douce et élégante — émotionnellement juste",
                "UI rassurante : composants stables, états clairs, feedback immédiat",
                "Composants modulaires et cohérents à travers tous les templates",
                "Hiérarchie protégeant contre les mauvais choix visuels",
              ],
            },
            {
              title: "Templates",
              content:
                "Les templates ont été conçus comme des univers visuels complets — pas des skins :",
              bullets: [
                "Élégant classique",
                "Moderne romantique",
                "Bohème authentique",
              ],
            },
          ],
          quote:
            "Le design système protège l'utilisateur de lui-même — il maintient la cohérence même quand les choix personnels divergent.",
        },
        {
          num: "08",
          title: "Valeur apportée",
          content: "",
          subsections: [
            {
              title: "Valeur utilisateur",
              bullets: [
                "Centralisation de tous les outils du mariage en un seul produit",
                "Réduction significative de la charge organisationnelle",
                "Expérience fluide, mobile-first, accessible à tous",
              ],
            },
            {
              title: "Valeur business",
              bullets: [
                "Architecture produit scalable — conçue pour évoluer",
                "Expérience différenciante sur un marché concurrentiel",
                "Base solide pour un modèle SaaS à plusieurs niveaux",
              ],
            },
          ],
        },
        {
          num: "09",
          title: "Learnings & posture de designer",
          content:
              "Ce projet a consolidé ma capacité à structurer des produits complexes sans les simplifier à l'excès, à arbitrer entre richesse fonctionnelle et accessibilité, et à penser la scalabilité dès la phase de conception.",
            quote:
              "Un produit émotionnel demande encore plus de rigueur UX qu'un outil purement fonctionnel. L'émotion ne pardonne pas les frictions.",
          },
        ],
      url: "https://dev.onseditoui.io/fr",
      urlLabel: "Visiter le site",
      },
  // 3. Maono
  {
    slug: "maono",
    title: "Maono",
    subtitle:
      "Conception UX/UI & structuration de l'expérience digitale d'une agence d'innovation africaine",
    type: "UX / UI",
      sector: "Digital · IA · Innovation",
      tags: ["UX", "UI", "Web"],
      year: "2025–2026",
    role: "UX/UI Designer",
    scope: "UX · UI · Structure de contenu · Direction visuelle · Storytelling",
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
      "/images/projects/maono/04.png",
      "/images/projects/maono/05.png",
      "/images/projects/maono/06.png",
      "/images/projects/maono/07.png",
      "/images/projects/maono/08.png",
      "/images/projects/maono/09.png",
      "/images/projects/maono/10.png",
      "/images/projects/maono/11.png",
      "/images/projects/maono/12.png",
      "/images/projects/maono/13.png",
      "/images/projects/maono/14.png",
      "/images/projects/maono/15.png",
      "/images/projects/maono/16.png",
      "/images/projects/maono/17.png",
    ],
    colors: [
      { name: "Deep Black", hex: "#0A0A0A" },
      { name: "Innovation Blue", hex: "#FFF2D7" },
      { name: "Clean White", hex: "#FAFAFA" },
      { name: "Graphite", hex: "#1E1E1E" },
    ],
    tools: ["Figma", "FigJam", "Notion", "Miro", "After Effects"],
    metrics: [
        { label: "Type de projet", value: "Client" },
        { label: "Secteur", value: "Digital/IA" },
        { label: "Année", value: "25–26" },
        { label: "Rôle", value: "UX/UI" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & problématique",
        content:
          "La digitalisation en Afrique est un levier majeur de transformation, mais de nombreuses organisations font face à plusieurs freins :",
        bullets: [
          "Difficulté à structurer leur présence digitale",
          "Manque d'outils adaptés aux réalités locales",
          "Complexité d'intégration des nouvelles technologies (IA, ERP, UX)",
          "Décalage entre standards internationaux et contextes africains",
        ],
          quote:
            "Maono se positionne comme une réponse systémique — combinant design centré usage, technologies intelligentes et compréhension fine des réalités africaines.",
        },
        {
          num: "03",
          title: "Vision & positionnement",
          content:
            "Contrairement à une agence classique, Maono revendique un positionnement clair :",
          bullets: [
            "Le design comme moteur économique — pas comme service décoratif",
            "L'UX comme socle stratégique des organisations",
            "La technologie comme outil d'impact mesurable",
          ],
          quote:
            "Maono ne propose pas des services — elle structure des écosystèmes. Cette distinction devait être perceptible dès les premières secondes de navigation.",
        },
        {
          num: "04",
          title: "Mon rôle & responsabilités",
          content:
            "Sur ce projet, mon rôle était de traduire une vision stratégique complexe en expérience digitale lisible, crédible et inspirante.",
          bullets: [
            "Structuration de l'architecture UX du site",
            "Hiérarchisation des contenus — vision, services, produits, expertise",
            "Design UI aligné avec l'identité Maono",
            "Mise en récit (storytelling) des expertises et de la proposition de valeur",
            "Cohérence entre discours stratégique et perception utilisateur",
          ],
          quote:
            "L'enjeu principal : éviter le discours institutionnel vide — et faire percevoir concrètement la valeur de Maono.",
        },
        {
          num: "05",
          title: "Démarche UX",
          content: "",
          subsections: [
            {
              title: "1. Clarification du message",
              content:
                "Avant toute interface, un travail de fond a été nécessaire : qu'est-ce que Maono fait réellement, et en quoi c'est différent ? Cela a conduit à clarifier les piliers de l'agence, structurer les offres par pôle, et éliminer toute ambiguïté de positionnement.",
            },
            {
              title: "2. Architecture de l'information",
              content:
                "L'architecture UX guide progressivement l'utilisateur à travers un écosystème riche. Chaque section répond à une intention précise : comprendre, rassurer, démontrer, projeter. Aucune section redondante, aucun contenu sans objectif.",
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
              content: "Le design devait refléter :",
              bullets: [
                "La maturité — pas la sophistication décorative",
                "La rigueur — interfaces sobres, hiérarchie affirmée",
                "Une ambition internationale depuis un ancrage africain",
              ],
            },
            {
              title: "Principes UI",
              bullets: [
                "Interfaces contrastées, sobres, sans ornement superflu",
                "Visuels forts qui portent un sens — jamais décoratifs",
                "Espaces maîtrisés pour laisser le discours respirer",
                "Typographie comme outil de hiérarchie et de posture",
              ],
            },
          ],
          quote:
            "Le design ne séduit pas par l'effet visuel — il convainc par la cohérence de la posture.",
        },
        {
          num: "07",
          title: "Valeur apportée",
          content: "",
          subsections: [
            {
              title: "Pour Maono",
              bullets: [
                "Une identité digitale alignée avec sa vision stratégique",
                "Une plateforme crédible pour adresser institutions, entreprises et partenaires",
                "Un support clair pour présenter services, produits et expertises",
              ],
            },
            {
              title: "Pour les utilisateurs",
              bullets: [
                "Compréhension rapide et précise du positionnement",
                "Lecture fluide d'un écosystème riche",
                "Expérience rassurante et professionnelle dès le premier contact",
              ],
            },
          ],
        },
        {
          num: "08",
          title: "Learnings & recul de designer",
          content:
              "Maono m'a permis de travailler à l'échelle d'un système — pas d'une interface. Sur des enjeux de positionnement stratégique, à la frontière entre UX, branding et vision produit. Ce type de projet requiert autant de pensée éditoriale que de rigueur de design.",
            quote:
              "Quand l'ambition est forte, le rôle du designer est d'apporter de la clarté — pas de l'esbroufe.",
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
    type: "UX / UI",
      sector: "Sport · Loisirs",
      tags: ["UX", "UI", "Web"],
      year: "2025",
    role: "UX/UI Designer",
    scope: "UX, UI, structure des contenus, direction visuelle",
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
      "/images/projects/aleapark/04.png",
      "/images/projects/aleapark/05.png",
      "/images/projects/aleapark/06.png",
      "/images/projects/aleapark/07.png",
      "/images/projects/aleapark/08.png",
      "/images/projects/aleapark/09.png",
      "/images/projects/aleapark/10.png",
      "/images/projects/aleapark/11.png",
      "/images/projects/aleapark/12.png",
      "/images/projects/aleapark/13.png",
      "/images/projects/aleapark/14.png",
      "/images/projects/aleapark/15.png",
      "/images/projects/aleapark/16.png",
      "/images/projects/aleapark/17.png",
    ],
    colors: [
      { name: "Deep Dark", hex: "#212121" },
      { name: "Energy Orange", hex: "#EEE8A9" },
      { name: "Light Cream", hex: "#FFF8F0" },
      { name: "Warm Grey", hex: "#0260D2" },
    ],
    tools: ["Figma", "FigJam", "Notion", "Miro"],
    metrics: [
        { label: "Type de projet", value: "Site web" },
        { label: "Secteur", value: "Sport" },
        { label: "Année", value: "2025" },
        { label: "Rôle", value: "UX/UI" },
    ],
      sections: [
        {
          num: "02",
          title: "Contexte & enjeux",
          content:
            "Alea Park s'adresse à un public large et hétérogène :",
          bullets: [
            "Sportifs amateurs",
            "Familles",
            "Groupes d'amis",
            "Entreprises (team building, événements)",
          ],
          subsections: [
            {
              title: "Enjeux clés",
              bullets: [
                "Rendre lisible une offre multiservices sans surcharger l'interface",
                "Déclencher une émotion dès les premières secondes de navigation",
                "Donner envie d'une visite physique à travers l'expérience digitale",
                "Faciliter la prise de contact sans friction technique",
              ],
            },
          ],
          quote:
            "L'enjeu principal n'était pas d'informer, mais de projeter — créer l'anticipation de l'expérience physique.",
        },
        {
          num: "03",
          title: "Mon rôle & responsabilités",
          content:
            "Sur ce projet, j'ai occupé un rôle central et transverse.",
          bullets: [
            "Définition de la vision UX globale",
            "Structuration des contenus et hiérarchisation de l'information",
            "Conception du parcours utilisateur de l'entrée à la conversion",
            "Direction artistique et production UI",
            "Arbitrages visuels au service de l'émotion voulue",
          ],
          quote:
            "L'objectif n'était pas de faire un site vitrine classique, mais un support d'attraction et de projection.",
        },
        {
          num: "04",
          title: "Démarche UX",
          content: "",
          subsections: [
            {
              title: "1. Compréhension du lieu et de l'expérience réelle",
              content:
                "Avant toute conception, le travail a consisté à comprendre :",
              bullets: [
                "Ce que l'on vit sur place — les émotions, les moments forts",
                "Ce que les gens viennent chercher — le collectif, l'évasion",
                "Ce qui différencie Alea Park d'un simple équipement sportif",
              ],
            },
            {
              title: "2. Définition des besoins utilisateurs",
              content: "Les attentes prioritaires identifiées :",
              bullets: [
                "Comprendre l'offre en moins de 10 secondes",
                "Découvrir les activités avec un contexte émotionnel fort",
                "Ressentir l'ambiance — pas juste la lire",
                "Accéder facilement à la réservation ou au contact",
              ],
            },
            {
              title: "3. Architecture de l'information",
              content:
                "Structure conçue pour créer un rythme de lecture narratif :",
              bullets: [
                "Immersion & promesse",
                "Découverte des activités",
                "Réassurance et preuves sociales",
                "Incitation à l'action au bon moment",
              ],
            },
          ],
          quote:
            "Le site devait traduire l'énergie collective du lieu — pas simplement lister des services.",
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
                "Immerger immédiatement — fond sombre, visuels grands formats",
                "Guider le regard par les contrastes et la typographie",
                "Créer un rythme visuel inspiré de l'univers sportif et événementiel",
                "Permettre au contenu de respirer",
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
            "L'interface devait évoquer l'énergie d'un événement — pas la neutralité d'un site institutionnel.",
        },
        {
          num: "06",
          title: "Écrans & sections clés",
          content: "",
          subsections: [
            {
              title: "Hero section",
              content:
                "Image immersive plein écran, message court et percutant. La proposition de valeur est émotionnelle avant d'être informationnelle.",
            },
            {
              title: "Section Activités",
              content:
                "Chaque activité est présentée comme une expérience à vivre — pas comme une ligne dans une liste de services.",
            },
            {
              title: "Sections d'ambiance",
              content:
                "Visuels grands formats pour transmettre l'énergie collective, renforcer la dimension émotionnelle et montrer le lieu en action.",
            },
            {
              title: "Call to action",
              content:
                "Les CTA sont positionnés après les pics émotionnels — là où la décision est naturelle, pas forcée.",
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
                "Compréhension immédiate du concept et de l'offre",
                "Immersion dans l'ambiance du lieu avant la visite",
                "Parcours fluide de la découverte à la prise de contact",
              ],
            },
            {
              title: "Pour Alea Park",
              bullets: [
                "Un outil digital aligné avec l'expérience physique du lieu",
                "Une image professionnelle et différenciante",
                "Un site conçu pour soutenir la fréquentation et la notoriété",
              ],
            },
          ],
        },
        {
          num: "08",
          title: "Learnings & recul de designer",
          content:
              "Ce projet a renforcé une conviction : quand le produit est une expérience physique, le digital doit en être le prolongement émotionnel — pas un catalogue de services.",
            quote:
              "Un bon site de service ne documente pas une offre. Il fait ressentir ce que l'utilisateur n'a pas encore vécu.",
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
      "Conception UX/UI & prototype d'une plateforme technologique",
    type: "UX / UI",
      sector: "Technologie · Innovation",
      tags: ["UX", "UI", "Product"],
      year: "2025",
    role: "UX/UI Designer",
    scope: "UX · UI · Prototype",
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
      "/images/projects/togotech/04.png",
      "/images/projects/togotech/05.png",
      "/images/projects/togotech/06.png",
      "/images/projects/togotech/07.png",
      "/images/projects/togotech/08.png",
      "/images/projects/togotech/09.png",
      "/images/projects/togotech/10.png",
      "/images/projects/togotech/11.png",
      "/images/projects/togotech/12.png",
      "/images/projects/togotech/13.png",
      "/images/projects/togotech/14.png",
      "/images/projects/togotech/15.png",
      "/images/projects/togotech/16.png",
      "/images/projects/togotech/17.png",
    ],
    colors: [
      { name: "Tech Dark", hex: "#00000000" },
      { name: "Trust Blue", hex: "#0EDD83" },
      { name: "Clean White", hex: "#FAFAFA" },
      { name: "Steel Grey", hex: "#00134B" },
    ],
    tools: ["Figma", "FigJam", "Miro", "Notion"],
    metrics: [
        { label: "Type de projet", value: "Client" },
        { label: "Secteur", value: "Tech" },
        { label: "Année", value: "2025" },
        { label: "Rôle", value: "UX/UI" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & enjeux",
        content:
          "Le secteur tech togolais est en pleine croissance, mais souffre souvent :",
        bullets: [
          "D'un manque de visibilité",
          "D'une fragmentation des acteurs",
          "D'une difficulté à accéder à l'information",
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
            "TogoTech répondait à un enjeu central : rendre compréhensible un écosystème riche — sans le réduire ni le simplifier à l'excès.",
        },
        {
          num: "03",
          title: "Mon rôle & responsabilités",
          content:
            "Sur ce projet, je suis intervenu sur l'ensemble de l'expérience utilisateur et visuelle.",
          bullets: [
            "Analyse des besoins utilisateurs et des profils cibles",
            "Structuration de l'architecture de l'information",
            "Conception des parcours clés et des flux de navigation",
            "Design UI complet du site et du prototype interactif",
          ],
          quote:
            "Mon rôle était de rendre un sujet complexe accessible — pas de le simplifier à l'excès.",
        },
        {
          num: "04",
          title: "Démarche UX",
          content: "",
          subsections: [
            {
              title: "1. Compréhension de l'écosystème",
              content:
                "Avant toute interface, il fallait comprendre la diversité des profils utilisateurs, identifier les attentes prioritaires, clarifier la mission réelle de la plateforme. L'objectif n'était pas de tout montrer — mais de hiérarchiser intelligemment selon les cas d'usage.",
            },
            {
              title: "2. Définition des besoins utilisateurs",
              bullets: [
                "Comprendre le positionnement de TogoTech en quelques secondes",
                "Accéder facilement aux informations et initiatives clés",
                "Percevoir la valeur de l'écosystème local",
                "Naviguer sans être submergé par la densité du contenu",
              ],
            },
            {
              title: "3. Architecture de l'information",
              content:
                "L'architecture a été conçue pour guider naturellement l'utilisateur, décomposer les blocs de contenu denses, et proposer une navigation progressive. Chaque page a un rôle clair dans le parcours global — aucune page redondante.",
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
            "Le design sert la lisibilité et la crédibilité du message — pas l'inverse.",
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
          title: "Learnings & recul de designer",
          content:
                "TogoTech m'a appris que structurer l'information est un acte de design à part entière — avant même de concevoir un composant. La rigueur architecturale détermine la clarté perçue bien plus que le style visuel.",
            quote:
              "Dans les sujets complexes, le vrai défi du design est la clarté — pas la sophistication.",
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
        type: "UX / UI",
        sector: "Infrastructures · Institutionnel · Numérique",
        tags: ["UX", "UI", "Web"],
          year: "2025",
        role: "UX/UI Designer",
        scope: "UX · UI · Web · Prototype",
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
      "/images/projects/sin/04.png",
      "/images/projects/sin/05.png",
      "/images/projects/sin/06.png",
      "/images/projects/sin/07.png",
      "/images/projects/sin/08.png",
      "/images/projects/sin/09.png",
      "/images/projects/sin/10.png",
      "/images/projects/sin/11.png",
      "/images/projects/sin/12.png",
      "/images/projects/sin/13.png",
      "/images/projects/sin/14.png",
      "/images/projects/sin/15.png",
      "/images/projects/sin/16.png",
      "/images/projects/sin/17.png",
    ],
    colors: [
      { name: "Void Black", hex: "#0D0D0D" },
      { name: "Neon Violet", hex: "#39C15F" },
      { name: "Signal White", hex: "#FFFFFF" },
      { name: "Glass Grey", hex: "#04585D" },
    ],
    tools: ["Figma", "FigJam", "Notion", "After Effects"],
      metrics: [
          { label: "Client", value: "SIN" },
          { label: "Création", value: "2025" },
          { label: "Rôle", value: "UX/UI" },
          { label: "Périmètre", value: "Web" },
      ],
        sections: [
            {
              num: "01",
              title: "Contexte",
              content:
                "La SIN est un acteur stratégique de l'écosystème numérique togolais. Son site devait refléter son rôle institutionnel, clarifier ses missions auprès des partenaires publics et privés, valoriser les infrastructures nationales et inspirer confiance et crédibilité.",
              bullets: [
                "Refléter son rôle institutionnel",
                "Clarifier ses missions auprès des partenaires publics et privés",
                "Valoriser les infrastructures nationales",
                "Inspirer confiance et crédibilité",
              ],
              quote:
                "L'enjeu principal : transformer un discours technique et réglementaire en une expérience structurée, accessible et impactante.",
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
            title: "Approche UX",
            content:
              "J'ai structuré le projet autour de trois piliers :",
            subsections: [
              {
                title: "1. Clarification stratégique",
                content:
                  "Repenser l'architecture de l'information pour prioriser les messages clés : mission, infrastructures, services.",
              },
              {
                title: "2. Hiérarchisation visuelle",
                content:
                  "Utilisation d'une grille rigoureuse, contrastes forts et respiration maîtrisée pour guider la lecture.",
              },
              {
                title: "3. Crédibilité institutionnelle",
                content:
                  "Palette sobre, typographies élégantes, imagerie technologique forte.",
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
            title: "Learnings & recul de designer",
            content:
                  "Ce projet m'a rappelé qu'un site institutionnel n'est pas un document — c'est une prise de position. Chaque choix typographique, chaque hiérarchie visuelle, chaque respiration contribue à transmettre ou à trahir la posture de l'organisation.",
                quote:
                  "La crédibilité ne se déclare pas. Elle se perçoit — dans chaque détail de l'interface.",
            },
          ],
      url: "https://sin.maono.design",
      urlLabel: "Visiter le site",
      },
];
