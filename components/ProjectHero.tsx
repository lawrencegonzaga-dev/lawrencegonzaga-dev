export default function ProjectHero({project}:any){
  return (
    <section className="border-b border-slate-800 pb-12">
      <p className="text-cyan-400 font-mono text-sm">PROJECT CASE STUDY</p>
      <h1 className="text-5xl font-bold mt-4">{project.title}</h1>
      <h2 className="text-purple-400 text-2xl mt-2">{project.subtitle}</h2>
    </section>
  )
}