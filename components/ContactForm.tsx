"use client";

import {useState} from "react";

export default function ContactForm(){
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function submit(e:React.FormEvent){
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });

      if(response.ok){
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={submit} className="rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-5">
      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
      />
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none h-40"
      />
      <button
        disabled={loading}
        className="px-5 py-3 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition-colors disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-green-400 text-sm">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}