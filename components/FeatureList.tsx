export default function FeatureList({features}:any){
  return (
    <section>
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Key Features</h2>
      <ul className="grid md:grid-cols-2 gap-3">
        {features.map((item:string) => (
          <li key={item} className="text-slate-400 flex items-start gap-2">
            <span className="text-cyan-400">✓</span> {item}
          </li>
        ))}
      </ul>
    </section>
  )
}