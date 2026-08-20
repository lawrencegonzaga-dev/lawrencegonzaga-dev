"use client";

import Link from "next/link";
import {motion} from "framer-motion";

export default function ProjectCard({project}:any){
  return (
    <motion.div
      whileHover={{y: -8}}
      className="rounded-xl border border-slate-700 bg-slate-900 p-6"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-cyan-400 mt-1">{project.stack}</p>
      <p className="text-slate-400 mt-3">{project.solution}</p>
      <Link href={`/projects/${project.slug}`} className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors inline-block">
        View Case Study →
      </Link>
    </motion.div>
  )
}