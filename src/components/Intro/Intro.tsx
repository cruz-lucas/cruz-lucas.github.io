// src/components/Experience.tsx
import React from 'react';
import Link from '@docusaurus/Link'

const Intro: React.FC = () => {
  return (
    <section className="experience">
      <h1>About</h1>
      <div>
        <p>Hi! I'm <strong>Lucas</strong>, an electronics engineer, roboticist, classical guitarist, and autistic individual.</p><br />

        <p>As a <strong>Senior Machine Learning Engineer</strong> at <strong><Link to="https://www.hurb.com/">Hurb</Link></strong> for the past three years, I've had the opportunity to:</p>

        <ul>
          <li>
            Develop the experimentation program and lead their center of excellence team.
          </li>
          <li>
            Ship numerous ML solutions to drive content generation and lawsuit management optimization.
          </li>
        </ul>
        <br />

        <p>I'm also a <strong>Master's Student</strong> at the <strong><Link to='https://www.ualberta.ca/en/index.html'>University of Alberta</Link></strong>, where I focus my research on <strong>reinforcement learning</strong>, specifically trying to merge some methods of model-based RL to develop better <strong>exploration</strong> strategies.</p>
      </div>

    </section>
  );
};

export default Intro;
