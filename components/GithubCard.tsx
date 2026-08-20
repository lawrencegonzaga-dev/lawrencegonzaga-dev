export default function GithubCard({repo}:any){
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
      <p className="text-slate-400 mt-2 text-sm">{repo.description || "No description available"}</p>
      <div className="flex gap-3 mt-4">
        {repo.language && (
          <span className="px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs">{repo.language}</span>
        )}
        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">⭐ {repo.stars}</span>
      </div>
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors inline-block text-sm"
      >
        View Repository →
      </a>
    </div>
  )
}