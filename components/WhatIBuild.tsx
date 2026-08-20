const items = [
  {
    title: "Web Applications",
    description: "Responsive SaaS platforms, dashboards, and business applications."
  },
  {
    title: "Frontend Systems",
    description: "Reusable React components, design systems, and interactive interfaces."
  },
  {
    title: "AI Automation",
    description: "AI-assisted workflows, chatbots, and productivity tools."
  },
  {
    title: "Full-Stack Solutions",
    description: "APIs, databases, authentication, and scalable application architecture."
  }
];

export default function WhatIBuild(){
  return (
    <section>
      <h2 className="text-3xl font-bold text-purple-400 mb-6">What I Build</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map(item => (
          <div key={item.title} className="rounded-xl border border-slate-700 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-slate-400 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}