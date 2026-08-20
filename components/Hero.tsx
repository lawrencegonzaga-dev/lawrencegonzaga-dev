"use client";

import {useEffect, useRef} from "react";

export default function Hero(){
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const lines = [
      "whoami",
      "→ frontend developer, becoming full-stack",
      "cat focus.txt",
      "→ react · next.js · typescript · node.js"
    ];
    const el = typedRef.current;
    if(!el) return;

    let li = 0, ci = 0, deleting = false;

    function typeLoop(){
      const current = lines[li];
      if(!deleting){
        ci++;
        el.textContent = current.slice(0, ci);
        if(ci === current.length){
          deleting = false;
          setTimeout(()=>{ deleting = true; typeLoop(); }, 1400);
          return;
        }
      } else {
        ci--;
        el.textContent = current.slice(0, ci);
        if(ci === 0){
          deleting = false;
          li = (li + 1) % lines.length;
        }
      }
      setTimeout(typeLoop, deleting ? 22 : 38);
    }
    typeLoop();

    // reduced motion respect
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      el.textContent = lines[1];
      const cursor = document.querySelector('.cursor') as HTMLElement;
      if(cursor) cursor.style.animation = 'none';
    }
  }, []);

  return (
    <header className="hero">
      <div className="wrap">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
            <span className="terminal-title">~/lawrence — zsh</span>
          </div>
          <div className="terminal-body">
            <span className="prompt">$</span> <span className="out" ref={typedRef}></span><span className="cursor"></span>
          </div>
        </div>

        <h1>Lawrence Gonzaga <span className="accent">/</span> builds things<br/>that work<span className="accent">.</span></h1>
        <div className="role">Software Developer — Frontend → Full-Stack</div>
        <p className="lede">I build modern web applications, interactive interfaces, and software systems with a focus on clean engineering, usability, and continuous improvement.</p>
        <div className="stack-line"><b>Currently focused on:</b> React · Next.js · TypeScript · Node.js</div>
        <div className="btn-row">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#" className="btn btn-ghost">Download CV</a>
          <a href="https://github.com/lawrencegonzaga-dev" className="btn btn-ghost">GitHub</a>
        </div>
      </div>
    </header>
  )
}