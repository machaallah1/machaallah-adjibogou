import type { Project, ProjectSection } from "./projects";

/**
 * English overrides for project translatable fields.
 * Keyed by slug. Only text fields are overridden — images, tools, urls stay the same.
 */
export const projectsEn: Record<
  string,
  Partial<
    Omit<Project, "slug" | "thumbnail" | "gallery" | "tools" | "url" | "tags" | "year"> & {
      metrics: { label: string; value: string }[];
      sections: ProjectSection[];
    }
  >
> = {
  maono: {
    subtitle:
      "UX/UI Design & structuring of the digital experience for an African innovation agency",
    type: "Web Development",
    sector: "Digital · AI · Innovation",
    role: "Frontend Developer & Integrator",
    scope: "Web Development",
    description:
      "Maono is a digital, creative and AI agency positioned as a key player in digital transformation in Africa. The challenge was to design a digital experience that makes a complex ecosystem — Studio, Systems, Labs, Strategy — clear and readable without diluting its ambition.",
    vision:
      "Position Maono not as just another agency, but as a structured and credible innovation ecosystem on a continental scale.",
    metrics: [
      { label: "Project type", value: "Client" },
      { label: "Sector", value: "Digital/AI" },
      { label: "Year", value: "25–26" },
      { label: "Role", value: "Developer" },
    ],
    urlLabel: "Visit site",
    sections: [
      {
        num: "02",
        title: "Context & challenge",
        content:
          "Maono needed a web platform capable of clearly presenting its divisions (Studio, Systems, Labs, Strategy) while remaining fast, accessible and easy to maintain. The challenge: transforming a rich universe into simple, high-performance, conversion-oriented navigation.",
        bullets: [
          "Structure a multi-offering site without losing the user",
          "Establish a reliable technical foundation (SEO, performance, accessibility)",
          "Ensure content and page scalability",
          "Maintain a premium experience on mobile and desktop",
        ],
        quote:
          "The goal: a credible technical showcase — that loads fast, is understood quickly, and can evolve without debt.",
      },
      {
        num: "03",
        title: "Vision & positioning",
        content:
          "The platform had to reflect a posture: innovation, rigor and execution. The site wasn't just a portfolio, but a product communication tool, designed to inspire trust.",
        bullets: [
          "Message clarity and information hierarchy",
          "Credibility evidence (achievements, expertise, methodology)",
          "Fluid experience: transitions, micro-interactions, UI consistency",
        ],
        quote:
          "One second of latency can cost an opportunity. Performance is part of the positioning.",
      },
      {
        num: "04",
        title: "My role & responsibilities",
        content:
          "On this project, I handled technical design and frontend implementation, with an approach focused on architecture, performance and quality.",
        bullets: [
          "Next.js architecture (routing, components, splitting, conventions)",
          "Content integration and page structuring (sections, blocks, navigation)",
          "Performance optimization (Core Web Vitals, images, bundles, lazy loading)",
          "SEO fundamentals (metadata, semantics, performance)",
          "Quality & maintainability (TypeScript, reusable components, patterns)",
        ],
        quote:
          "My priority: deliver a clean and scalable foundation on which Maono can iterate fast without degrading the experience.",
      },
      {
        num: "05",
        title: "Development approach",
        content: "",
        subsections: [
          {
            title: "1. Framing & structure",
            content:
              "I worked from Maono's pillars to build a clear page structure (divisions, offerings, proof, CTA) and consistent navigation. The goal: reduce ambiguity and guide reading without overload.",
          },
          {
            title: "2. Performance-oriented implementation",
            content:
              "I focused on robust implementation: modular components, optimized pages, controlled asset loading and a stable TypeScript foundation to facilitate continuous site evolution.",
          },
        ],
      },
      {
        num: "06",
        title: "UI direction & visual intentions",
        content: "",
        subsections: [
          {
            title: "Overall intention",
            content: "The interface had to reflect:",
            bullets: [
              "A sober and premium identity — without overload",
              "A clear hierarchy — immediate readability",
              "Cross-device consistency — mobile-first",
            ],
          },
          {
            title: "UI principles",
            bullets: [
              "Reusable components to ensure consistency",
              "Lightweight animations in service of comprehension",
              "Controlled spaces and grids to rhythm the reading",
              "Typography as a tool for hierarchy and impact",
            ],
          },
        ],
        quote:
          "Design serves the message, and code serves the design — without compromising on performance.",
      },
      {
        num: "07",
        title: "Value delivered",
        content: "",
        subsections: [
          {
            title: "For Maono",
            bullets: [
              "A solid and maintainable frontend foundation",
              "A performant site ready for evolution (new pages, content, offerings)",
              "A credible showcase (SEO, accessibility, perceived quality)",
            ],
          },
          {
            title: "For users",
            bullets: [
              "Quick access to information (clear navigation, scannable content)",
              "Fluid experience on mobile and desktop",
              "Reduced load times and sharp interactions",
            ],
          },
        ],
      },
      {
        num: "08",
        title: "Learnings & reflection",
        content:
          "Maono confirmed that a performant showcase site is a product in its own right: it requires clear architecture, controlled technical choices and constant attention to perceived quality. Credibility plays out as much in content as in execution.",
        quote:
          "The best showcase is one that goes unnoticed — because it works perfectly.",
      },
    ],
  },

  "alea-park": {
    subtitle: "Website creation for a sports & leisure complex",
    type: "Web Development",
    sector: "Sports · Leisure",
    role: "Frontend Developer",
    scope: "Web Development · Integration · Animations",
    description:
      "Alea Park is a sports and leisure complex that brings together sports, conviviality and events on a single site. The challenge wasn't to design a showcase site — it was to translate a collective experience online before the user even walks through the doors.",
    vision:
      "The digital challenge was to create desire before the visit — transforming navigation into emotional projection.",
    metrics: [
      { label: "Project type", value: "Website" },
      { label: "Sector", value: "Sports" },
      { label: "Year", value: "2025" },
      { label: "Role", value: "Developer" },
    ],
    urlLabel: "Visit site",
    sections: [
      {
        num: "02",
        title: "Context & challenges",
        content:
          "Alea Park offers a multi-service range (sports, leisure, events). The site had to present this diversity without complicating the reading, while remaining fast on mobile and effective for conversion (contact / booking).",
        bullets: [
          "Clarify the offer in seconds (scannable)",
          "Showcase activities with immersive but lightweight UI",
          "Optimize loading (images, sections, animations)",
          "Facilitate conversion (visible CTAs, minimal friction)",
        ],
        subsections: [
          {
            title: "Key challenges",
            bullets: [
              "Prioritize information and structure sections",
              "Maintain stable performance (Core Web Vitals)",
              "Ensure a fluid mobile experience",
              "Build a maintainable base for evolution (new activities, events)",
            ],
          },
        ],
        quote:
          "The goal: an immersive experience that stays performant — emotion shouldn't cost loading time.",
      },
      {
        num: "03",
        title: "My role & responsibilities",
        content:
          "On this project, I handled frontend implementation and UI integration, with a focus on performance, accessibility and conversion.",
        bullets: [
          "Page and section integration (component architecture)",
          "Animations and interactions (Framer Motion) without degrading fluidity",
          "Image and loading optimization (lazy loading, formats)",
          "SEO & semantics (structure, titles, content)",
          "Responsive and accessibility (mobile-first)",
        ],
        quote:
          "A site that converts starts with a site that loads fast and reads effortlessly.",
      },
      {
        num: "04",
        title: "Development approach",
        content: "",
        subsections: [
          {
            title: "1. Structure & splitting",
            content:
              "I structured the page into readable sections (hero, activities, ambiance, proof, contact) with clear component splitting to facilitate evolution and reuse.",
          },
          {
            title: "2. Performance & UX",
            content: "Technical objectives and experience:",
            bullets: [
              "Fast loading on mobile (optimized images, lazy loading)",
              "Progressive animations (jank-free)",
              "Visible and accessible CTAs",
              "Hierarchized content for scanning",
            ],
          },
          {
            title: "3. Maintainability",
            content:
              "A clean TypeScript base and consistent components to allow adding new activities / events without regression.",
          },
        ],
        quote:
          "Good frontend architecture protects visual consistency and performance over time.",
      },
      {
        num: "05",
        title: "UI direction & visual intentions",
        content: "",
        subsections: [
          {
            title: "Overall intention",
            content: "An interface designed to:",
            bullets: [
              "Create immediate immersion (hero and visuals)",
              "Keep a readable hierarchy (titles, sections, spacing)",
              "Ensure UI consistency across the site",
              "Preserve performance despite the visuals",
            ],
          },
          {
            title: "Visual choices",
            bullets: [
              "Dark background to enhance images and reinforce depth",
              "Bright accents to structure reading hierarchy",
              "Bold but readable typography across all devices",
              "Generous spacing to balance density and readability",
            ],
          },
        ],
        quote:
          "The visual must serve the message — and remain optimized to not penalize the experience.",
      },
      {
        num: "06",
        title: "Key screens & sections",
        content: "",
        subsections: [
          {
            title: "Hero section",
            content:
              "Short message + strong visual, with responsive layout and optimized asset loading.",
          },
          {
            title: "Activities section",
            content:
              "Structured cards/sections to present the offer quickly, without overload, with clear hierarchy.",
          },
          {
            title: "Ambiance sections",
            content:
              "Visuals showcased with light animations and optimizations (lazy loading) to keep navigation fluid.",
          },
          {
            title: "Call to action",
            content:
              "CTAs placed at key moments, with simple actions (contact / booking) and proper accessibility.",
          },
        ],
      },
      {
        num: "07",
        title: "Value delivered",
        content: "",
        subsections: [
          {
            title: "For users",
            bullets: [
              "Quick understanding of offers and activities",
              "Fluid mobile experience",
              "Direct access to contact / booking",
            ],
          },
          {
            title: "For Alea Park",
            bullets: [
              "A performant and maintainable site",
              "A credible showcase to attract and convert",
              "A foundation ready to evolve content and events",
            ],
          },
        ],
      },
      {
        num: "08",
        title: "Learnings & reflection",
        content:
          "This project reminded me that a showcase site is also a product: performance, structure and implementation quality directly condition perception. An immersive UI must be accompanied by optimization discipline.",
        quote:
          "The best experience is often the one you don't notice: fast, fluid, obvious.",
      },
    ],
  },

  togotech: {
    subtitle:
      "Frontend development of a platform to showcase the tech ecosystem",
    type: "Web Development",
    sector: "Technology · Innovation",
    role: "Frontend Developer",
    scope: "Web Development · UI Architecture · Integration",
    description:
      "TogoTech is an initiative aiming to structure and showcase the Togolese tech ecosystem. The challenge wasn't aesthetic — it was architectural: making a fragmented ecosystem readable, hierarchizing heterogeneous content, and positioning local innovation with international credibility.",
    vision:
      "Structuring a complex ecosystem into a readable interface — without sacrificing depth for simplification.",
    metrics: [
      { label: "Project type", value: "Client" },
      { label: "Sector", value: "Tech" },
      { label: "Year", value: "2025" },
      { label: "Role", value: "Developer" },
    ],
    urlLabel: "Visit site",
    sections: [
      {
        num: "02",
        title: "Context & challenges",
        content:
          "TogoTech needed to aggregate varied content (actors, initiatives, info) and make it quickly findable. The frontend challenge: transforming data density into a clear, fast and scalable UI.",
        bullets: [
          "Clear navigation despite density (categories, sections)",
          "Performance and readability on mobile",
          "Reusable components to scale content",
        ],
        subsections: [
          {
            title: "Key challenges",
            bullets: [
              "Make technological information accessible to everyone",
              "Showcase local initiatives",
              "Create a credible entry point for the ecosystem",
              "Offer a clear experience despite content diversity",
            ],
          },
        ],
        quote:
          "Structuring information is also frontend architecture work.",
      },
      {
        num: "03",
        title: "My role & responsibilities",
        content:
          "On this project, I contributed to setting up a clear and maintainable frontend base to present the ecosystem and its content.",
        bullets: [
          "Page and component structuring",
          "Responsive UI integration (mobile-first)",
          "Rendering and loading optimization (assets, sections)",
          "Code quality (TypeScript, patterns, reusability)",
        ],
        quote:
          "A useful platform is one where information is found effortlessly.",
      },
      {
        num: "04",
        title: "Development approach",
        content: "",
        subsections: [
          {
            title: "1. Splitting & conventions",
            content:
              "Setting up a consistent page and component structure to accommodate heterogeneous content without multiplying complexity.",
          },
          {
            title: "2. Readability & performance",
            bullets: [
              "Scannable UI (titles, cards, sections)",
              "Progressive loading and mobile optimizations",
              "Reusable components and variants",
              "Prepared for extension (more initiatives, more actors)",
            ],
          },
          {
            title: "3. Maintainability",
            content:
              "Code and component organization to keep a base easy to evolve (adding sections, new content types).",
          },
        ],
      },
      {
        num: "05",
        title: "UI direction & visual intentions",
        content: "",
        subsections: [
          {
            title: "Overall intention",
            content: "The interface had to:",
            bullets: [
              "Inspire institutional trust and credibility",
              "Reflect technological modernity without being cold",
              "Remain sober without sacrificing personality",
            ],
          },
          {
            title: "UI principles",
            bullets: [
              "Clean design with controlled density",
              "Readable typographic hierarchy across all devices",
              "Consistent palette — never decorative",
              "Content in the foreground, design in support",
            ],
          },
        ],
        quote:
          "A clear UI + a robust implementation = a credible platform.",
      },
      {
        num: "06",
        title: "Key screens & sections",
        content: "",
        subsections: [
          {
            title: "Homepage",
            content:
              "Immediate mission presentation, ecosystem contextualization, quick access to strategic content without overload.",
          },
          {
            title: "Content sections",
            content:
              "Each section is designed to inform without overwhelming, showcase local initiatives and maintain structured reading across content diversity.",
          },
          {
            title: "Prototype",
            content:
              "The prototype validates main flows, tests overall comprehension and anticipates real behaviors of target users.",
          },
        ],
      },
      {
        num: "07",
        title: "Value delivered",
        content: "",
        subsections: [
          {
            title: "For the client",
            bullets: [
              "A structured and credible platform on the international stage",
              "A solid and extensible UX foundation",
              "A professional image aligned with the initiative's ambitions",
            ],
          },
          {
            title: "For users",
            bullets: [
              "Simplified access to information and resources",
              "Clear reading of the local tech ecosystem",
              "Reassuring and frictionless experience",
            ],
          },
        ],
      },
      {
        num: "08",
        title: "Learnings & reflection",
        content:
          "TogoTech taught me that perceived clarity comes first from structure: components, hierarchy, navigation, performance. Frontend isn't just UI: it's an information organization system.",
        quote:
          "Clarity isn't a style, it's architecture.",
      },
    ],
  },

  sin: {
    subtitle: "Digital Infrastructure Corporation",
    type: "Web Development",
    sector: "Infrastructure · Institutional · Digital",
    role: "Frontend Developer",
    scope: "Web Development · Integration · Optimization",
    description:
      "SIN drives the development of Togo's strategic digital infrastructure: national fiber optics, data centers, international interconnections. I designed an institutional digital experience capable of translating the country's digital sovereignty into a clear, modern and credible interface.",
    vision:
      "Create a digital platform worthy of national digital ambitions, combining clarity, authority and modernity.",
    metrics: [
      { label: "Client", value: "SIN" },
      { label: "Created", value: "2025" },
      { label: "Role", value: "Developer" },
      { label: "Scope", value: "Web" },
    ],
    urlLabel: "Visit site",
    sections: [
      {
        num: "01",
        title: "Context",
        content:
          "SIN is a strategic player in Togo's digital ecosystem. The site had to reflect its institutional role, clarify its missions and offer a modern web experience: fast, accessible, and robust across all devices.",
        bullets: [
          "Reflect its institutional role",
          "Clarify its missions to public and private partners",
          "Showcase national infrastructure",
          "Inspire trust and credibility",
        ],
        quote:
          "The challenge: transform dense content into a clear, performant and easy-to-maintain interface.",
      },
      {
        num: "02",
        title: "Mission & challenge",
        content:
          "How to translate a country's digital sovereignty into a clear and contemporary digital experience?",
        subsections: [
          {
            title: "The challenges",
            bullets: [
              "Hierarchize a large amount of institutional information",
              "Simplify technical vocabulary",
              "Modernize the image without losing institutional posture",
              "Create fluid navigation despite content density",
            ],
          },
        ],
      },
      {
        num: "03",
        title: "Development approach",
        content:
          "I structured the project around three pillars:",
        subsections: [
          {
            title: "1. Content architecture",
            content:
              "Rethinking information architecture to prioritize key messages: mission, infrastructure, services.",
          },
          {
            title: "2. Stable implementation",
            content:
              "Consistent components, responsive, and a clean TypeScript base to facilitate evolution and reduce debt.",
          },
          {
            title: "3. Performance & accessibility",
            content:
              "Loading optimization and accessibility best practices for a reliable experience.",
          },
        ],
      },
      {
        num: "04",
        title: "Art direction",
        content:
          "The visual universe rests on:",
        bullets: [
          "Deep dark background to reinforce the strategic dimension",
          "Green accents symbolizing growth and innovation",
          "Immersive technological visuals — data centers, networks, cartographies",
          "Elegant and institutional typography",
        ],
        quote:
          "Creating a balance between public authority and digital modernity.",
      },
      {
        num: "05",
        title: "User experience",
        content:
          "The experience was designed to:",
        bullets: [
          "Facilitate access to regulatory information",
          "Structure long content into digestible blocks",
          "Highlight strategic infrastructure",
          "Offer fluid reading on desktop and mobile",
        ],
        quote:
          "Each section was designed to progressively guide the user, from institutional context to operational understanding.",
      },
      {
        num: "06",
        title: "Key interfaces",
        content: "",
        subsections: [
          {
            title: "Homepage",
            content:
              "Clear strategic positioning, highlighting infrastructure and missions.",
          },
          {
            title: "About page",
            content:
              "Structured and accessible institutional narrative.",
          },
          {
            title: "Infrastructure pages",
            content:
              "Visual showcase of critical equipment.",
          },
          {
            title: "Responsive",
            content:
              "Mobile optimization for simplified content browsing.",
          },
        ],
      },
      {
        num: "07",
        title: "Result & impact",
        content:
          "A modernized institutional site that:",
        bullets: [
          "Strengthens SIN's digital credibility",
          "Clarifies its strategic role",
          "Showcases national infrastructure",
          "Improves regulatory content readability",
        ],
        quote:
          "Building a country's digital infrastructure also starts with a clear interface.",
      },
      {
        num: "08",
        title: "Learnings & reflection",
        content:
          "This project reminded me that an institutional site is judged on execution: clarity, stability, performance, accessibility. Credibility comes as much from content quality as from frontend quality.",
        quote:
          "Credibility is perceived in the details: structure, speed, consistency.",
      },
    ],
  },

  "lome-data-centre": {
    subtitle: "Development of a showcase for the first Tier III Data Center in Togo",
    type: "Web Development",
    sector: "Technology · Infrastructure",
    role: "Frontend Developer",
    scope: "Web Development · Integration",
    description: "Lomé Data Centre (LDC) is a critical infrastructure. The website reflects this requirement for security, reliability and high availability through a clear, modern and institutional interface.",
    vision: "A digital showcase matching the center: secure, performant and reliable.",
    metrics: [
      { label: "Client", value: "LDC" },
      { label: "Sector", value: "Infrastructure" },
      { label: "Role", value: "Developer" },
    ],
    urlLabel: "Visit site",
    sections: [
      {
        num: "01",
        title: "Context & achievements",
        content: "Development of a performant institutional showcase to highlight the infrastructure and attract regional and international partners.",
        bullets: [
          "Responsive interface integration",
          "Highlighting the center's technical capabilities",
          "Loading time optimization",
        ],
      },
    ],
  },

  "palais-de-lome": {
    subtitle: "Showcase development for Lomé's art and culture center",
    type: "Web Development",
    sector: "Culture · Art",
    role: "Frontend Developer",
    scope: "Web Development · Integration",
    description: "The Palais de Lomé is a historic building transformed into an art center. The digital platform offers a rich visual experience to present exhibitions, the park and the history of the venue.",
    vision: "Translating architectural elegance and cultural richness into the digital space.",
    metrics: [
      { label: "Client", value: "Palais de Lomé" },
      { label: "Sector", value: "Culture" },
      { label: "Role", value: "Developer" },
    ],
    urlLabel: "Visit site",
    sections: [
      {
        num: "01",
        title: "Context & achievements",
        content: "Creation of an immersive platform showcasing Togolese heritage and the cultural programming of the Palace.",
        bullets: [
          "Showcasing iconographic content",
          "Fluid navigation between galleries",
          "Mobile-optimized experience for visitors",
        ],
      },
    ],
  },

  "aurelie-jarry": {
    subtitle: "Digital portfolio for a contemporary artist",
    type: "Web Development",
    sector: "Art · Portfolio",
    role: "Frontend Developer",
    scope: "Web Development · UI",
    description: "A minimalist and elegant platform designed to showcase the artist's works and creative journey in an immersive way.",
    vision: "Code in service of the artwork: an invisible frame to elevate art.",
    metrics: [
      { label: "Client", value: "Aurélie Jarry" },
      { label: "Sector", value: "Art" },
      { label: "Role", value: "Developer" },
    ],
    urlLabel: "Visit site",
    sections: [
      {
        num: "01",
        title: "Context & achievements",
        content: "Design and development of a custom portfolio with smooth transitions and refined typography.",
        bullets: [
          "Minimalist architecture (focus on images)",
          "Fluid and subtle micro-interactions",
          "Performance and SEO",
        ],
      },
    ],
  },

  "fondation-bkf": {
    subtitle: "Digital platform for philanthropic engagement",
    type: "Web Development",
    sector: "Foundation · NGO",
    role: "Frontend Developer",
    scope: "Web Development · Integration",
    description: "The foundation operates in key sectors for social development. The site presents actions, partners and raises public awareness of the causes defended.",
    vision: "Giving visibility to actions with real positive impact.",
    metrics: [
      { label: "Client", value: "Fondation BKF" },
      { label: "Sector", value: "Philanthropy" },
      { label: "Role", value: "Developer" },
    ],
    urlLabel: "Visit site",
    sections: [
      {
        num: "01",
        title: "Context & achievements",
        content: "Setting up a clear showcase to communicate the foundation's missions and calls for projects.",
        bullets: [
          "Clear hierarchy of intervention areas",
          "Integration of a news system",
          "Accessibility and navigation clarity",
        ],
      },
    ],
  },
};
