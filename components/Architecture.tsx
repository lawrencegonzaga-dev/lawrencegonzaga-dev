export default function Architecture({items}:any){
  return (
    <section>
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Architecture</h2>
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
        {items.map((item:string) => (
          <p key={item} className="text-slate-400 py-1 font-mono text-sm">
            → {item}
          </p>
        ))}
      </div>
    </section>
  )
}