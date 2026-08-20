export const projects = [
  {
    slug: "flowboard",
    title: "Flowboard",
    subtitle: "Full-Stack Project Management SaaS",
    overview: "Flowboard is a full-stack project management application designed to help users organize projects, tasks, deadlines, and productivity workflows.",
    problem: "Managing projects requires multiple tools. Users need a centralized workspace for tasks, progress tracking, and deadlines.",
    solution: "Built a complete SaaS-style application with authentication, project workflows, dashboards, Kanban boards, calendar views, and AI-assisted insights.",
    architecture: [
      "Next.js App Router",
      "React Server Components",
      "Supabase Authentication",
      "PostgreSQL Database",
      "Row Level Security",
      "Server Actions"
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Zod",
      "Vitest"
    ],
    features: [
      "Authentication system",
      "Project CRUD",
      "Task management",
      "Kanban workflow",
      "Calendar deadlines",
      "Dashboard analytics",
      "AI assistant",
      "Responsive design"
    ],
    security: [
      "Supabase Row Level Security",
      "Server-side validation",
      "Protected routes",
      "Secure authentication flow"
    ],
    testing: [
      "Unit testing",
      "API testing",
      "Validation testing"
    ],
    challenges: [
      {
        problem: "Protecting user-owned data",
        solution: "Implemented PostgreSQL Row Level Security policies"
      },
      {
        problem: "Managing complex workflows",
        solution: "Created reusable components and server actions"
      }
    ],
    github: "https://github.com/lawrencegonzaga-dev/project-manager"
  },
  {
    slug: "salesflow-crm",
    title: "SalesFlow CRM",
    subtitle: "Frontend CRM Application",
    overview: "SalesFlow CRM is a frontend CRM application that simulates real sales operations with lead management, contact tracking, deals, tasks, and reporting.",
    problem: "Sales workflows needed a simple CRM interface to manage contacts, leads, deals, tasks, and reports efficiently.",
    solution: "Created a CRM system with 8 functional modules including contacts, leads, deals, tasks, reports, and calendar workflows.",
    architecture: [
      "React Component Architecture",
      "Context API State Management",
      "Vite Build Tool",
      "Reusable UI Components",
      "Responsive Design System"
    ],
    stack: [
      "React",
      "JavaScript",
      "Vite",
      "Context API",
      "CSS Modules",
      "LocalStorage"
    ],
    features: [
      "Lead management pipeline",
      "Contact management",
      "Deal tracking",
      "Task scheduling",
      "Reports dashboard",
      "Persistent application state",
      "Responsive UI",
      "24+ reusable components"
    ],
    security: [
      "Client-side validation",
      "Data persistence layer",
      "Input sanitization"
    ],
    testing: [
      "Component testing",
      "State management testing",
      "Responsive testing"
    ],
    challenges: [
      {
        problem: "Managing complex application state across modules",
        solution: "Implemented Context API with reducer patterns for predictable state updates"
      },
      {
        problem: "Building 24+ reusable components efficiently",
        solution: "Created a component library with consistent design tokens and props"
      }
    ],
    github: "https://github.com/lawrencegonzaga-dev/salesflow-crm"
  },
  {
    slug: "ztii",
    title: "ZTII Industrial Intelligence",
    subtitle: "Predictive Maintenance & Explainable AI",
    overview: "ZTII is an industrial intelligence prototype demonstrating predictive maintenance workflows using telemetry data and explainable AI risk analysis.",
    problem: "Industrial systems need better monitoring and explainable alerts to prevent equipment failures and reduce downtime.",
    solution: "Built a predictive maintenance simulation using telemetry and explainable AI with risk scoring and dashboard visualization.",
    architecture: [
      "FastAPI Backend",
      "Telemetry Processing",
      "SHAP Explainable AI",
      "Risk Scoring Engine",
      "Docker Containerization",
      "Dashboard Visualization"
    ],
    stack: [
      "Python",
      "FastAPI",
      "SHAP",
      "Docker",
      "Pandas",
      "NumPy",
      "REST API"
    ],
    features: [
      "5 dashboard modules",
      "Predictive maintenance",
      "Explainable AI risk analysis",
      "Telemetry data processing",
      "Docker deployment",
      "API architecture"
    ],
    security: [
      "API authentication",
      "Input validation",
      "Rate limiting"
    ],
    testing: [
      "API testing",
      "Model validation",
      "Integration testing"
    ],
    challenges: [
      {
        problem: "Making AI predictions explainable to non-technical users",
        solution: "Used SHAP values to provide transparent feature importance explanations"
      },
      {
        problem: "Processing real-time telemetry data efficiently",
        solution: "Designed streaming data pipeline with FastAPI async endpoints"
      }
    ],
    github: "https://github.com/lawrencegonzaga-dev/ztii"
  }
];