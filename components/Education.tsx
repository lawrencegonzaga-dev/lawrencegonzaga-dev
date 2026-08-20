import {education} from "@/data/education";

export default function Education(){
  return (
    <section>
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Education</h2>
      {education.map((edu, i) => (
        <div key={i} className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-cyan-400 mt-1">{edu.school}</p>
          <p className="text-slate-400 mt-1">{edu.graduation}</p>
          <p className="text-slate-400 mt-3">
            Relevant Coursework: {edu.coursework.join(", ")}
          </p>
        </div>
      ))}
    </section>
  )
}