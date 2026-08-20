export default function ChallengeSolution({items}:any){
  return (
    <section>
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Challenges & Solutions</h2>
      {items.map((item:any) => (
        <div key={item.problem} className="rounded-xl border border-slate-700 bg-slate-900 p-6 mb-4">
          <h3 className="text-lg font-semibold text-cyan-400">Challenge</h3>
          <p className="text-slate-400 mt-2">{item.problem}</p>
          <h3 className="text-lg font-semibold text-cyan-400 mt-4">Solution</h3>
          <p className="text-slate-400 mt-2">{item.solution}</p>
        </div>
      ))}
    </section>
  )
}