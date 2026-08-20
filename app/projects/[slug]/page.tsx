import Link from "next/link";
import {projects} from "@/data/projects";
import {notFound} from "next/navigation";
import ProjectHero from "@/components/ProjectHero";
import ProjectOverview from "@/components/ProjectOverview";
import TechStack from "@/components/TechStack";
import FeatureList from "@/components/FeatureList";
import Architecture from "@/components/Architecture";
import ChallengeSolution from "@/components/ChallengeSolution";
import ProjectLinks from "@/components/ProjectLinks";

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug} = await params;
  const project = projects.find(p => p.slug === slug);

  if(!project){
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors mb-8 inline-block">
        ← Back to Home
      </Link>

      <ProjectHero project={project}/>
      <ProjectOverview project={project}/>
      <TechStack stack={project.stack}/>
      <FeatureList features={project.features}/>
      <Architecture items={project.architecture}/>
      <ChallengeSolution items={project.challenges}/>
      <ProjectLinks project={project}/>
    </main>
  )
}