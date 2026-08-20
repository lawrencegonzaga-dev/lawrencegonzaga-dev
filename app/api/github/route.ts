import {getGithubRepos} from "@/lib/github";

export async function GET(){
  try {
    const repos = await getGithubRepos();

    return Response.json(
      repos.map((repo:any) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
        updated: repo.updated_at
      }))
    );
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch GitHub repositories" },
      { status: 500 }
    );
  }
}