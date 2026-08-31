// Every claim in this file is verified against the actual repository:
// - Flowboard  → github.com/lawrencegonzaga-dev/project-manager (README + package.json)
// - SalesFlow  → github.com/lawrencegonzaga-dev/salesflow-crm   (README + package.json)
// - ZTII       → github.com/lawrencegonzaga-dev/ztii            (backend source + tree)
// Do not add a feature description that the repository does not implement.

export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface ProjectScreenshot {
  // Path under public/ (e.g. "/projects/flowboard-dashboard.webp").
  // Omit until the real image exists; the case study then renders a
  // themed placeholder with the alt + caption so the layout is proof-ready.
  src?: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  solution: string;
  // Short, hiring-oriented card copy. "Problem solved" answers what the user
  // could not do before; "delivered" lists what was actually built.
  cardProblem: string;
  cardDelivered: string;
  architecture: string[];
  stack: string[];
  features: string[];
  technicalDecisions: string[];
  challenges: ProjectChallenge[];
  github: string;
  // Only set when a real deployed URL exists.
  liveDemo?: string;
  // Screenshot under public/projects/ (e.g. "/projects/flowboard.webp").
  // Cards render a themed placeholder until a real screenshot is added.
  image?: string;
  imageAlt?: string;
  // 3–5 screenshots shown inside the case study, each with a short caption.
  screenshots: ProjectScreenshot[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "flowboard",
    title: "Flowboard",
    subtitle: "Full-Stack Project Management SaaS",
    overview:
      "Flowboard is a full-stack project management application built with Next.js, TypeScript, and Supabase. Each authenticated user gets a private workspace to plan projects, organize tasks, monitor progress, and focus on overdue work.",
    problem:
      "Project planning tools need to keep every user's data strictly private while still providing dashboards, boards, and calendars that respond quickly.",
    solution:
      "Built a full-stack SaaS application with authentication, private project and task CRUD, dashboard metrics, a drag-and-drop board, a deadline calendar, and a workspace assistant.",
    cardProblem:
      "Built a private multi-user workspace while preventing users from accessing or modifying another user's project data.",
    cardDelivered:
      "Authentication, project and task workflows, dashboards, drag-and-drop boards, deadline tracking, search, pagination, and database-level authorization.",
    architecture: [
      "Next.js App Router (Server Components + Server Actions)",
      "Supabase Auth (email/password)",
      "PostgreSQL with Row Level Security",
      "Zod server-side validation",
      "dnd-kit drag-and-drop board",
      "Vitest tests",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    features: [
      "Email/password authentication with persistent or session-only sign-in",
      "Private project and task CRUD with server-side validation",
      "Dashboard metrics, progress summaries, recent activity, and task charts",
      "Project and task search, filtering, sorting, and server-side pagination",
      "Quick task status and priority updates with optimistic feedback",
      "Drag-and-drop project board with accessible status updates",
      "Deadline calendar grouped by overdue, today, upcoming, and completed",
      "Project assistant with built-in workspace insights and optional LLM provider",
    ],
    technicalDecisions: [
      "PostgreSQL Row Level Security is the database-level authorization boundary: projects are restricted to owner_id, and tasks require ownership of both the task and its parent project.",
      "Server Components and Server Actions verify the authenticated user for every protected operation; the browser only ever holds the Supabase publishable key.",
      "Every mutation is validated server-side with Zod before it reaches the database.",
      "The assistant works without an AI model: deterministic workspace insights by default, with an optional Ollama/OpenAI provider whose output is schema-validated and falls back to built-in insights.",
      "Content Security Policy, frame, MIME-type, referrer, and permissions headers are configured in next.config.ts.",
    ],
    challenges: [
      {
        problem: "Preventing users from attaching tasks to another user's project",
        solution:
          "RLS policies require ownership of both the task and its parent project, so cross-user writes are blocked at the database level, not just in the UI.",
      },
      {
        problem: "Making the assistant useful without depending on an AI model",
        solution:
          "Deterministic insights rank open tasks and summarize real workspace data; an optional provider adds flexible answers with schema validation and a safe fallback.",
      },
    ],
    github: "https://github.com/lawrencegonzaga-dev/project-manager",
    liveDemo: "https://project-manager-flax-six.vercel.app",
    image: "/flowboard-photo.png",
    imageAlt: "Flowboard workspace assistant with project progress and priority insights",
    screenshots: [
      {
        alt: "Screenshot placeholder for the Flowboard private dashboard with project progress metrics",
        caption: "Private dashboard",
      },
      {
        alt: "Screenshot placeholder for the Flowboard project and task workspace",
        caption: "Project / task workspace",
      },
      {
        alt: "Screenshot placeholder for the Flowboard drag-and-drop task board",
        caption: "Drag-and-drop board",
      },
      {
        alt: "Screenshot placeholder for the Flowboard deadline calendar",
        caption: "Deadline calendar",
      },
      {
        src: "/flowboard-photo.png",
        alt: "Flowboard workspace assistant showing project progress, priorities, and built-in insights",
        caption: "Workspace assistant",
      },
    ],
    featured: true,
  },
  {
    slug: "salesflow-crm",
    title: "SalesFlow CRM",
    subtitle: "Frontend CRM Application",
    overview:
      "SalesFlow CRM is a frontend CRM built with React 19, Vite, and React Router. It models a real sales operation across eight modules — dashboard, contacts, leads, deals, tasks, calendar, reports, and settings — with application state persisted in the browser.",
    problem:
      "Sales workflows need a straightforward CRM to manage contacts, leads, deals, tasks, and reports without a backend dependency.",
    solution:
      "Built a CRM with eight functional modules, enforced lead and deal lifecycles, and versioned browser persistence so work survives reloads.",
    cardProblem:
      "Built predictable sales workflows while preventing invalid stage changes, duplicate lead conversions, and inconsistent persisted data.",
    cardDelivered:
      "Contacts, leads, deals, tasks, calendar, reporting, lifecycle rules, filtering, and reusable CRM interfaces across eight modules.",
    architecture: [
      "React 19 + Vite 8",
      "React Router 7",
      "Context API state management",
      "Domain modules owning business rules",
      "Versioned localStorage persistence",
    ],
    stack: ["React", "JavaScript", "Vite", "React Router"],
    features: [
      "Lead pipeline with sequential stages (New → Contacted → Qualified → Converted) and Lost available from active stages",
      "Deal pipeline with sequential stages (New → Qualified → Proposal → Negotiation → Won/Lost)",
      "Idempotent lead-to-deal conversion — converting twice cannot create duplicate deals",
      "Task scheduling and calendar workflow",
      "Reports dashboard across leads, deals, and tasks",
      "Versioned localStorage persistence with normalization on load",
    ],
    technicalDecisions: [
      "Lead and deal stage rules live in single domain modules (leads.js, deals.js) instead of being duplicated across components.",
      "Persisted data is normalized and validated on load — stored state is never trusted as-is.",
      "Lead conversion is idempotent: converting an already-converted lead returns the existing deal instead of creating another.",
      "Forms report validation with aria-invalid and aria-describedby so errors are announced to screen readers.",
    ],
    challenges: [
      {
        problem: "Preventing duplicate deals during lead conversion",
        solution:
          "Made lead conversion idempotent so converting the same qualified lead again returns its existing linked deal instead of creating a duplicate.",
      },
      {
        problem: "Trusting persisted localStorage data",
        solution:
          "Normalized and validated stored records on load, so stale or hand-edited browser storage cannot corrupt application state.",
      },
    ],
    github: "https://github.com/lawrencegonzaga-dev/salesflow-crm",
    image: "/crm-photo.png",
    imageAlt: "SalesFlow CRM application dashboard preview",
    screenshots: [
      {
        src: "/crm-photo.png",
        alt: "SalesFlow CRM dashboard with leads, deals, and reports",
        caption: "Sales dashboard",
      },
      {
        alt: "SalesFlow CRM lead pipeline with sequential stages",
        caption: "Lead pipeline",
      },
      {
        alt: "SalesFlow CRM deal pipeline with stage and value tracking",
        caption: "Deal pipeline",
      },
      {
        alt: "SalesFlow CRM calendar and scheduled tasks",
        caption: "Calendar workflow",
      },
      {
        alt: "SalesFlow CRM reports across leads, deals, and tasks",
        caption: "Reports",
      },
    ],
    featured: true,
  },
  {
    slug: "ztii",
    title: "ZTII Industrial Intelligence",
    subtitle: "Industrial Telemetry Monitoring & Risk Scoring",
    overview:
      "ZTII is a FastAPI-based industrial telemetry prototype: devices post sensor readings, a rule-based engine scores equipment health and risk, and a dashboard visualizes device state and history. Built with Python, SQLite, and device simulators that generate realistic telemetry.",
    problem:
      "Industrial equipment needs continuous sensor monitoring that turns raw temperature and vibration readings into clear health and risk signals before failures happen.",
    solution:
      "Built a FastAPI telemetry service with sensor ingestion, rule-based risk scoring, device state and history endpoints, a dashboard UI, and device simulators for development.",
    cardProblem:
      "Turned raw temperature and vibration telemetry into understandable equipment health, risk, and maintenance signals.",
    cardDelivered:
      "Telemetry ingestion, device monitoring, risk analysis, API validation, dashboard visualization, and device simulation.",
    architecture: [
      "FastAPI REST API",
      "SQLite persistence (device state + sensor history)",
      "Rule-based health/risk analysis engine",
      "Pydantic request schemas",
      "Python dashboard",
      "Device sensor simulators",
    ],
    stack: ["Python", "FastAPI", "SQLite", "Pydantic"],
    features: [
      "POST /sensor-data ingestion that stores each reading and runs analysis",
      "Rule-based health, risk, and recommendation scoring from temperature and vibration",
      "Device state and per-device history query endpoints",
      "Dashboard UI covering devices, alerts, history, and settings",
      "Device simulators that generate continuous multi-device telemetry",
      "Tests for API, analysis rules, and database behavior",
    ],
    technicalDecisions: [
      "Rule-based scoring instead of machine learning: transparent thresholds make every health, risk, and recommendation explainable without training data.",
      "SQLite with INSERT OR REPLACE keeps one authoritative latest-state row per device alongside an append-only sensor history.",
      "FastAPI + Pydantic validate sensor payloads at the API boundary.",
      "Simulators drive development: realistic multi-device telemetry without physical hardware.",
    ],
    challenges: [
      {
        problem: "Turning raw sensor readings into actionable output",
        solution:
          "The analysis engine maps temperature and vibration to a health status, a risk level, and a concrete recommendation for every reading.",
      },
      {
        problem: "Keeping latest device state and full history consistent",
        solution:
          "Each ingestion writes the authoritative device row and appends immutable sensor history in one request.",
      },
    ],
    github: "https://github.com/lawrencegonzaga-dev/ztii",
    image: "/ztii-photo.png",
    imageAlt: "ZTII industrial telemetry monitoring dashboard preview",
    screenshots: [
      {
        src: "/ztii-photo.png",
        alt: "ZTII monitoring dashboard with device health and risk state",
        caption: "Monitoring dashboard",
      },
      {
        alt: "ZTII device history and sensor telemetry charts",
        caption: "Device history",
      },
      {
        alt: "ZTII risk analysis with health, risk, and recommendation scoring",
        caption: "Risk analysis",
      },
      {
        alt: "ZTII telemetry ingestion API validation responses",
        caption: "API validation",
      },
    ],
    featured: true,
  },
];
