// src/components/Education.tsx
import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div>
        <h3>M.Sc. in Computing Science</h3>
        <p><em>University of Alberta</em></p>
        <p>Sept 2024 – Sept 2026 (Expected)</p>
        <p><strong>Advisor:</strong> <a href='https://webdocs.cs.ualberta.ca/~machado/index.html'>Marlos C. Machado, Ph.D.</a></p>
      </div>
      <div>
        <h3>B.Sc. in Electrical and Computer Engineering</h3>
        <p><em>UFRJ, Brazil</em></p>
        <p><strong>Thesis:</strong> Applying Vision Transformer for Pathology Classification in X-Ray Images</p>
        <p><strong>Advisor:</strong> <a href='https://scholar.google.com.br/citations?hl=en&user=aqpkAbkAAAAJ'>Natanael Nunes de Moura Junior, Ph.D.</a></p>
      </div>
    </section>
  );
};

export default Education;
