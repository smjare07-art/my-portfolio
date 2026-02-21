"use client";

import "../styles/Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="resume-wrap">
      {/* TOP */}
      <span className="section-pill">✦ Resume</span>

      <h2 className="resume-title">
        Education and practical <br /> experience
      </h2>

      <p className="resume-sub">
        Be who you would seem to be — or, if you'd like it put more simply —
        never imagine yourself not to be otherwise than what it might appear
        to others that what you were or might have been was not otherwise than
        what you had been would have appeared to them to be otherwise.
      </p>

      {/* EDUCATION */}
      <h3 className="block-title">My education</h3>

      <div className="timeline">
        <div className="row">
          <span className="year">2021 – Present</span>
          <div>
            <h4>B.Tech – Computer Science and Engineering</h4>
            <small>Course by DBATU, Lonere</small>
          </div>
          <p>
            Pursuing a B.Tech in Computer Science and Engineering with a focus
            on front-end development, UI/UX principles, and web technologies.
          </p>
        </div>

        <div className="row">
          <span className="year">2019 – 2021</span>
          <div>
            <h4>Higher Secondary Education (12th Grade)</h4>
            <small>Science Stream</small>
          </div>
          <p>
            Completed 12th grade with Physics, Chemistry, and Mathematics,
            building a strong foundation for engineering studies.
          </p>
        </div>

        <div className="row">
          <span className="year">2017 – 2019</span>
          <div>
            <h4>Secondary Education (10th Grade)</h4>
            <small>State Board</small>
          </div>
          <p>
            Completed secondary education with a solid base in mathematics,
            science, and general studies.
          </p>
        </div>
      </div>

      {/* EXPERIENCE */}
      <h3 className="block-title">Work experience</h3>

      <div className="timeline">
        <div className="row">
          <span className="year">2024 – Present</span>
          <div>
            <h4>Web Designer (Intern)</h4>
            <small>Creative Consulting Pvt. Ltd.</small>
          </div>
          <p>
            Worked as a Web Designer intern, creating user-friendly and
            responsive layouts using HTML, CSS, JavaScript, and React.
          </p>
        </div>
      </div>

      {/* TOOLS */}
      <h3 className="block-title">My favourite tools</h3>

      <div className="tools-grid">
        <div className="tool">Ps<br /><span>Photoshop</span></div>
        <div className="tool">Figma</div>
        <div className="tool">Ai<br /><span>Illustrator</span></div>
        <div className="tool">HTML5</div>
        <div className="tool">CSS</div>
        <div className="tool">WordPress</div>
        <div className="tool">JS</div>
      </div>
    </section>
  );
}
