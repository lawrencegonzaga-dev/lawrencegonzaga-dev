import ContactForm from "@/components/ContactForm";

export default function Contact(){
  return (
    <section id="contact">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Let's Build Something</h2>
      <p className="text-slate-400 max-w-2xl mb-8">
        I'm currently looking for remote frontend, full-stack, and AI automation opportunities.
        Let's build useful software.
      </p>
      <ContactForm/>
    </section>
  )
}