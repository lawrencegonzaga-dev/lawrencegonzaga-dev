export default function WorkProcess() {
  return (
    <section id="work" data-reveal>
      <div className="wrap">
        <div className="eyebrow">Engineering Process</div>
        <h2 className="sec-title">
          From problem <span className="accent">to shipped solution.</span>
        </h2>
        <div className="work-flow">
          <div className="work-step">
            <div className="work-num">01</div>
            <div>
              <h4>Understand</h4>
              <p>
                Pin down the actual problem, the constraints, and what &quot;working&quot;
                means before writing code.
              </p>
            </div>
          </div>
          <div className="work-step">
            <div className="work-num">02</div>
            <div>
              <h4>Build</h4>
              <p>
                Turn the requirements into a working implementation with the simplest
                architecture that covers them.
              </p>
            </div>
          </div>
          <div className="work-step">
            <div className="work-num">03</div>
            <div>
              <h4>Test</h4>
              <p>
                Exercise the edge cases and failure paths, and verify the behavior matches
                the requirements — not the assumptions.
              </p>
            </div>
          </div>
          <div className="work-step">
            <div className="work-num">04</div>
            <div>
              <h4>Refine</h4>
              <p>
                Improve architecture, accessibility, and maintainability once the behavior
                is correct.
              </p>
            </div>
          </div>
          <div className="work-step">
            <div className="work-num">05</div>
            <div>
              <h4>Ship</h4>
              <p>
                Deploy, document the decisions, and keep the project verifiable by anyone
                who opens the repository.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
