// src/components/Skills.tsx
import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <ul>
        <li>
          <strong>Programming Languages:</strong> Python, TypeScript, C++, JavaScript, R
        </li>
        <li>
          <strong>Machine Learning Frameworks:</strong> TensorFlow, PyTorch, scikit-learn
        </li>
        <li>
          <strong>AI & ML Expertise:</strong> NLP, Deep Learning, Generative Models, Vision Transformers, SVMs
        </li>
        <li>
          <strong>Cloud Technologies:</strong> Docker, Kubernetes, Google Cloud Platform
        </li>
        <li>
          <strong>Databases:</strong> SQL (PostgreSQL), NoSQL (MongoDB)
        </li>
        <li>
          <strong>Web Development:</strong> React, Flask, Node.js, HTML, CSS
        </li>
        <li>
          <strong>Tools & Platforms:</strong> Git, JIRA, Agile Methodologies, Altium Designer
        </li>
      </ul>
    </section>
  );
};

export default Skills;
