import Badge from "@/components/ui/Badge";

export default function TechStack({stack}:any){
  return (
    <section>
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Technology Stack</h2>
      <div className="flex flex-wrap gap-3">
        {stack.map((item:string) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </section>
  )
}