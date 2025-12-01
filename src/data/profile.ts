export const profile = {
  name: "Ankit Sanger",
  title: "Backend Developer · Buddy4Study",
  summary:
    "Backend engineer focused on resilient Java services that help thousands of students discover and win education funding. I translate business rules into maintainable APIs, automate manual review pipelines, and obsess over observability so issues never surprise stakeholders.",
  location: "Ghaziabad, India",
  phone: "+91 9711187594",
  email: "ankitsengar251@gmail.com",
  linkedin: "",
};

export const stats = [
  {
    label: "Production Experience",
    value: "1.5+ yrs",
    detail: "Buddy4Study backend",
  },
  {
    label: "Core Stack",
    value: "Java · Spring",
    detail: "Microservices & REST",
  },
  {
    label: "Ship Velocity",
    value: "12+ services",
    detail: "from ideation to prod",
  },
];

export const experiences = [
  {
    role: "Java Developer",
    company: "Buddy4Study",
    timeframe: "Jan 2025 – Present",
    description:
      "Owning scholarship-matching microservices that handle scholarship ingestion, scoring, and notification flows for learners across India.",
    achievements: [
      "Led migration from monolithic workflow to modular Spring Boot services with async messaging and resilient retries.",
      "Introduced contract tests + GitHub Actions quality gates that cut regression incidents by 40%.",
      "Instrumented distributed tracing, reducing average incident triage time from 2 hours to 20 minutes.",
    ],
  },
  {
    role: "Java Intern",
    company: "Buddy4Study",
    timeframe: "Jul 2024 – Dec 2024",
    description:
      "Built foundational tooling for the engineering team while learning production-ready Java and DevOps practices.",
    achievements: [
      "Automated scholarship data normalization scripts that saved 10+ analyst hours every week.",
      "Pair-programmed on RESTful APIs, writing integration tests and documentation as part of each PR.",
      "Demoed a student-facing notification system prototype adopted for the 2025 application season.",
    ],
  },
];

export const focusAreas = [
  {
    title: "Platform Skills",
    items: [
      "Java 21 & Spring Boot 3",
      "RESTful design, GraphQL exploration",
      "MySQL · PostgreSQL · Redis",
      "Messaging with Kafka & RabbitMQ",
    ],
  },
  {
    title: "Engineering Practices",
    items: [
      "Domain-driven design & modular monoliths",
      "CI/CD with GitHub Actions & Sonar",
      "Automated testing pyramid (unit → e2e)",
      "Observability: OpenTelemetry & Grafana",
    ],
  },
];

export const strengths = [
  {
    label: "Builder Mindset",
    description:
      "Take ambiguous business goals, slice them into increments, and keep shipping — even when specs evolve mid-sprint.",
  },
  {
    label: "Systems Thinking",
    description:
      "Design services with resiliency budgets, backpressure controls, and clear ownership so on-call never feels chaotic.",
  },
  {
    label: "Developer Enablement",
    description:
      "Document patterns, bootstrap starter repos, and champion automation that frees teammates to focus on product impact.",
  },
];

export const contactActions = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    helper: "I'll reply within 24 hours",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    helper: "Prefer WhatsApp or morning calls",
  },
  {
    label: "Location",
    value: profile.location,
    href: "https://maps.app.goo.gl/VF1TALrx4gXxm2FSA",
    helper: "Open to hybrid or remote roles",
  },
];


