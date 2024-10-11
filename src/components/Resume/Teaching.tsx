// src/components/Teaching.tsx
import React from 'react';

const Teaching: React.FC = () => {
  return (
    <section className="teaching">
      <h2>Teaching Experience</h2>
      <div>
        <h3>Teaching Assistant</h3>
        <p><em>University of Alberta</em></p>
        <p>September 2024 – Present</p>
        <ul>
          <li><strong>CMPUT 365: Reinforcement Learning I</strong></li>
        </ul>
      </div>
      <div>
        <h3>Robotics Instructor, <em>TRON Robótica Educativa</em></h3>
        <p>May 2018 – Aug 2018 (3 months)</p>
        <p>Conducted a robotics course for 9-10-year-olds, teaching basics of electricity, electronics, and Arduino programming.</p>
      </div>
    </section>
  );
};

export default Teaching;
