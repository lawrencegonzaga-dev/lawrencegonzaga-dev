const username = "lawrencegonzaga-dev";

export async function getGithubRepos(){
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`,
    {
      next: { revalidate: 3600 }
    }
  );

  if(!response.ok){
    throw new Error("Failed fetching Github repositories");
  }

  return response.json();
}