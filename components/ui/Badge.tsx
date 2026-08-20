export default function Badge({
  children
}:{
  children:React.ReactNode
}){
  return (
    <span className="px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-sm">
      {children}
    </span>
  )
}