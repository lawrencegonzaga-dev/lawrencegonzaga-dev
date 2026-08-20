export default function Card({
  children
}:{
  children:React.ReactNode
}){
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
      {children}
    </div>
  )
}