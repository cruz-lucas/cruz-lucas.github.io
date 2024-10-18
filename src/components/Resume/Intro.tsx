// src/components/Experience.tsx
import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="experience">
      <h1>About</h1>
      <div>
        <p>Hi! I'm <strong>Lucas</strong>, an electronics engineer, roboticist, classical guitarist, and autistic individual.</p><br />

        <p>As a <strong>Senior Machine Learning Engineer</strong> at <a href='https://www.hurb.com/'>Hurb</a> for the past three years, I've had the opportunity to:</p>

        <ul>
          <li>
            Develop the experimentation program and lead their center of excellence team.
          </li>
          <li>
            Ship numerous ML solutions to drive content generation and lawsuit management optimization.
          </li>
        </ul>
        <br />

        <p>I'm also a <strong>master's student</strong> at the <strong><a href='https://www.ualberta.ca/en/index.html'>University of Alberta</a></strong>, where I focus my research on <strong>reinforcement learning</strong>, specifically trying to merge some methods of model-based Reinforcement Learning to develop better exploration strategies.</p>
      </div>

    </section>
  );
};

export default Intro;
