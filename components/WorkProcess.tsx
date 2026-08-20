export default function WorkProcess(){
  return (
    <section id="work">
      <div className="wrap">
        <div className="eyebrow">How I Work</div>
        <h2 className="sec-title">I don't just learn. <span className="accent">I build.</span></h2>
        <div className="work-flow">
          <div className="work-step">
            <div className="work-num">01</div>
            <div><h4>Understand</h4><p>I first try to understand the problem rather than immediately writing code.</p></div>
          </div>
          <div className="work-step">
            <div className="work-num">02</div>
            <div><h4>Build</h4><p>I turn the idea into a working implementation as quickly as possible.</p></div>
          </div>
          <div className="work-step">
            <div className="work-num">03</div>
            <div><h4>Break</h4><p>I test it, debug it, and find where my assumptions were wrong.</p></div>
          </div>
          <div className="work-step">
            <div className="work-num">04</div>
            <div><h4>Refactor</h4><p>Once it works, I improve the architecture, UX, code quality, and maintainability.</p></div>
          </div>
          <div className="work-step">
            <div className="work-num">05</div>
            <div><h4>Ship</h4><p>A project isn't finished when it works locally. I want to deploy it and make it usable.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}