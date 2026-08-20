import GithubCard from "./GithubCard";
import {getGithubRepos} from "@/lib/github";

export default async function GithubProjects(){
  let repos:any[] = [];

  try {
    repos = await getGithubRepos();
  } catch (error) {
    return (
      <section>
        <h2 className="text-3xl font-bold text-purple-400 mb-6">GitHub Projects</h2>
        <p className="text-slate-400">Unable to load GitHub repositories at this time.</p>
      </section>
    )
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-purple-400 mb-6">GitHub Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.slice(0, 6).map((repo:any) => (
          <GithubCard key={repo.name} repo={repo}/>
        ))}
      </div>
    </section>
  )
}