export const site = {
  name: "YaltLab",
  tagline: "Your alternative lab",
  email: "hello@yaltlab.com",
  description:
    "YaltLab — Your alternative lab. We design, build, and launch software in 14 days so you skip the agency wait and own what ships.",
};

export const nav = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export const clients = [
  "Aries",
  "Fact Finder",
  "CaveMiniplex",
  "Zonaki Vibes",
];

export const stats = [
  { value: "14 days", label: "Idea to live MVP" },
  { value: "100%", label: "Yours to keep" },
  { value: "6+", label: "Surfaces we ship" },
];

export const pillars = [
  {
    title: "Two weeks, not two quarters",
    body: "A locked brief, a date that holds, and software you can click by day four. The alternative to a six-month agency calendar.",
  },
  {
    title: "Built to outlive the sprint",
    body: "Production code from the first commit. No disposable prototype. You leave with a foundation you can keep shipping on.",
  },
  {
    title: "The lab hands you the keys",
    body: "Repo, design files, domain, and cloud in your name. We are a partner for the sprint — not a landlord after it.",
  },
];

export const services = [
  {
    slug: "web",
    title: "Web Development",
    eyebrow: "Product & marketing",
    summary:
      "Web apps and sites that load fast, convert, and do not need a rewrite in six months.",
    body: "MVPs and production platforms on Next.js — type-safe APIs, a funnel and a product designed in the same two weeks.",
  },
  {
    slug: "ios",
    title: "iOS Development",
    eyebrow: "Native Apple",
    summary: "Native Swift apps that feel like they belong on an iPhone.",
    body: "Product, UI, and App Store shipping in one sprint. Gestures people already know, performance that survives review.",
  },
  {
    slug: "android",
    title: "Android Development",
    eyebrow: "Native Google",
    summary: "Kotlin apps that behave on every screen, not just a flagship.",
    body: "Clean architecture, offline-aware data, Material that feels native, and a release pipeline you can run without us.",
  },
  {
    slug: "desktop",
    title: "Desktop Apps",
    eyebrow: "Mac, Windows, Linux",
    summary: "Desktop tools for Mac, Windows, and Linux that still feel local.",
    body: "Electron or Tauri when the work lives on a machine — dashboards, internal systems, creative tools. Fast to ship, honest about performance.",
  },
  {
    slug: "design",
    title: "UI/UX Design",
    eyebrow: "Interface & brand",
    summary: "Flows and a visual system your next engineer can actually use.",
    body: "Research, screens, and a design language built for conversion — and for the people who will live in the product every day.",
  },
  {
    slug: "ai",
    title: "AI / ML",
    eyebrow: "Applied intelligence",
    summary: "AI wired into the workflow — not a slide about tomorrow.",
    body: "Assistants, extraction, ranking, generation. We pick the model, the guardrails, and the UX so the feature ships in the sprint.",
  },
];

export const process = [
  {
    days: "01–03",
    title: "Discover",
    body: "We lock the outcome, the users, and the stack. You leave with a scope, a visual direction, and a two-week plan — not a forty-page PDF.",
  },
  {
    days: "04–11",
    title: "Build",
    body: "Daily working software. Design and engineering in the same thread. You review in the browser, not in a comment thread.",
  },
  {
    days: "12–14",
    title: "Launch",
    body: "Polish, production deploy, analytics, handoff. Domain, repo, and credentials sit with you on day fourteen.",
  },
];

export const works = [
  {
    slug: "ariesfit",
    title: "Ariesfit",
    category: "Fitness app + web",
    result: "AI fitness product spanning app and web — training, tracking, and a site that matches the product.",
    image: "/works/ariesfit.png",
    link: "https://ariesfit.in",
  },
  {
    slug: "brightstudios",
    title: "Bright Studios",
    category: "Agency website",
    result: "A software studio site that loads fast and holds up on every screen.",
    image: "/works/brightstudios.png",
    link: "https://brightstudios.in",
  },
  {
    slug: "gocourier",
    title: "Go Courier",
    category: "Food delivery",
    result: "An ordering site built to be obvious — browse, cart, checkout without friction.",
    image: "/works/gocourier.png",
    link: "https://gocourier-drab.vercel.app/",
  },
  {
    slug: "swagat",
    title: "Swagat Hospital",
    category: "Hospital website",
    result: "A hospital site patients can actually find their way through.",
    image: "/works/swagat.png",
    link: "https://www.swagathospitalbongaigaon.in/",
  },
];

export const testimonials = [
  {
    quote:
      "We needed a product, not another deck. Two weeks later it was live — and the conversation with investors changed overnight.",
    name: "Maya Chen",
    role: "Founder, Aries",
  },
  {
    quote:
      "The usual studio would still be in discovery. YaltLab shipped. The UI holds up because they did not skip the engineering.",
    name: "Jordan Hale",
    role: "CPO, Fact Finder",
  },
  {
    quote:
      "They built our first version like it had to last. A year later we are still on that codebase — which is the point of an alternative lab.",
    name: "Samir Patel",
    role: "CEO, CaveMiniplex",
  },
];

export const plans = [
  {
    name: "Launchpad",
    price: "$1,999",
    cadence: "one-time",
    description:
      "A live web presence this month — for founders who cannot wait on an agency queue.",
    featured: true,
    includes: [
      "Marketing site or landing",
      "Domain, SSL, and security",
      "Analytics and basic SEO",
      "Two revision rounds",
      "1 month of free support after launch",
    ],
  },
  {
    name: "Custom",
    price: "Let’s talk",
    cadence: "scoped",
    description:
      "Apps, platforms, and 14-day sprints with a small team that stays on the work.",
    featured: false,
    includes: [
      "Web, mobile, or desktop",
      "Product design + engineering",
      "Architecture you can scale",
      "Production deploy and handoff",
      "Optional retainer after launch",
    ],
  },
];

export const faqs = [
  {
    q: "Fourteen days — really?",
    a: "Yes, when the scope is locked. An MVP, a marketing site, or a first product slice. If the brief needs a longer arc, we say so on the call.",
  },
  {
    q: "What do you build with?",
    a: "Whatever will still make sense next year. Usually Next.js and TypeScript on the web; Swift and Kotlin natively; AI only where it earns a place in the product.",
  },
  {
    q: "Who owns what we ship?",
    a: "You. Repos, design files, domains, and cloud accounts are in your name from day one. The lab does not keep the keys.",
  },
  {
    q: "How do revisions work?",
    a: "Launchpad includes two rounds. Custom sprints include daily review in the live build, so feedback does not pile up at the end.",
  },
  {
    q: "Can you pick up an existing product?",
    a: "Yes. We audit, stabilize, then ship the next slice — same two-week cadence once the foundation is sound.",
  },
  {
    q: "What happens after day fourteen?",
    a: "A clean handoff, or a retainer if you want us on v2. Either way, you can run the product without us.",
  },
];

export const about = {
  headline: "Your alternative lab — a small team that ships.",
  story:
    "YaltLab means Your alternative lab: the other option when agencies take months and freelancers leave you with a prototype. Design and engineering in one room, idea to live MVP in fourteen days.",
  method:
    "No junior bench, no vanishing PM. A tight crew scopes hard, builds with you in the open, and leaves architecture that does not need a rewrite by summer.",
};

export const socials = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "X", href: "#" },
  { name: "YouTube", href: "#" },
];

export const projectTypes = [
  "Web MVP",
  "Marketing site",
  "iOS / Android",
  "Desktop app",
  "UI/UX",
  "AI feature",
  "Something else",
];
