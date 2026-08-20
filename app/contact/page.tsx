import ContactForm from "@/components/ContactForm";

export default function ContactPage(){
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Let's Work Together</h1>
      <p className="text-slate-400 mt-4">I'm open to:</p>
      <ul className="text-slate-400 mt-4 space-y-2">
        <li>• Remote Frontend Development</li>
        <li>• Full-Stack Projects</li>
        <li>• AI Automation Solutions</li>
        <li>• Freelance Work</li>
      </ul>
      <div className="mt-8">
        <ContactForm/>
      </div>
    </main>
  )
}