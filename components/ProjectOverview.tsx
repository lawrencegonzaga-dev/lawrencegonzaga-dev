export default function ProjectOverview({project}:any){
  return (
    <section>
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Overview</h2>
      <p className="text-slate-400 leading-relaxed">{project.overview}</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Problem</h3>
      <p className="text-slate-400 leading-relaxed">{project.problem}</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Solution</h3>
      <p className="text-slate-400 leading-relaxed">{project.solution}</p>
    </section>
  )
}