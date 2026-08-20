import {experience} from "@/data/experience";

export default function Experience(){
  return (
    <section>
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Experience</h2>
      {experience.map((job, i) => (
        <div key={i} className="rounded-xl border border-slate-700 bg-slate-900 p-6 mb-6">
          <h3 className="text-xl font-semibold">{job.role}</h3>
          <p className="text-cyan-400 mt-1">{job.company}</p>
          <ul className="mt-4 text-slate-400 space-y-2">
            {job.highlights.map((item, j) => (
              <li key={j}>• {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}