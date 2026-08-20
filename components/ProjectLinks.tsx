import {Github, ExternalLink} from "lucide-react";

export default function ProjectLinks({project}:any){
  return (
    <section className="border-t border-slate-800 pt-8">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Links</h2>
      <div className="flex gap-4 flex-wrap">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-lg border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
        >
          <Github size={18}/> View Repository
        </a>
        <a
          href="#"
          className="px-5 py-3 rounded-lg border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
        >
          <ExternalLink size={18}/> Live Demo
        </a>
      </div>
    </section>
  )
}