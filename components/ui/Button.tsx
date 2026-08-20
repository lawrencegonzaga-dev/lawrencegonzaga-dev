export default function Button({
  children
}:{
  children:React.ReactNode
}){
  return (
    <button className="px-5 py-3 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition-colors">
      {children}
    </button>
  )
}