// src/components/Experience.tsx
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      {/* Repeat this block for each experience */}
      <div>
        <h3>Senior Machine Learning Engineer, <em>Hurb</em></h3> 
        <p>Dec 2021 – Sept 2024 (2 years and 9 months)</p>
        <ul>
          <li>
            <strong>Leadership:</strong> Directed Hurb's experimentation program, fostering a culture of innovation and
            data-driven decision-making.
          </li>
          <li>
            <strong>Collaboration:</strong> Worked cross-functionally with product, engineering, and data science teams
            to implement scalable experimentation solutions (feature flags, A/B tests, and multi-armed badint algorithms).
          </li>
          <li>
            <strong>Technical Expertise and Innovation:</strong> Led the project to employ Large Language Models to solve multiple tasks in the legal department, including to predict civil lawsuit outcomes with 83% accuracy in production.
          </li>
        </ul>

        <h3>Data Scientist (Internship), <em>Murabei</em></h3>
        <p>Oct 2020 – April 2021 (7 months)</p>
        <ul>
          <li>
          <strong>Model Development:</strong> Designed and trained generalized linear and ensemble models for SME credit analysis using scikit-learn.
          </li>
          <li>
          <strong>Deployment:</strong> Model deployed hosting an API in Google Cloud Platform.
          </li>
        </ul>

        <h3>R&D Engineer (Internship), <em>TechnipFMC</em></h3>
        <p>May 2021 – Oct 2021 (7 months)</p>
        <ul>
          <li>
            <strong>Hardware Design:</strong> Designed PCBs for an underwater robotic manipulator, ensuring robust power and signal integrity.
          </li>
        </ul>
      </div>
      {/* Add other experiences similarly */}
    </section>
  );
};

export default Experience;
