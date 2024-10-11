// src/components/Research.tsx
import React from 'react';

const Research: React.FC = () => {
  return (
    <section className="research">
      <h2>Research Experience</h2>
      {/* Repeat this block for each research experience */}
      <div>
        <h3>Undergraduate Researcher, <em>Signal Processing Lab, UFRJ</em></h3>
        <p>
          August 2020 – December 2021 (1 year and 5 months)
        </p>
        <ul>
          <li>
            Developed a Computer-Aided Diagnosis system for tuberculosis from chest X-ray images, improving diagnostic
            accuracy to 86%.
          </li>
          <li>
            Implemented a Hierarchical Mixture of Experts model using SVMs for image quality assessment in public health
            digitization, achieving F1 of 0.91.
          </li>
        </ul>
        <h3>Undergraduate Researcher, <em>Control and Automation Lab, UFRJ</em></h3>
        <p>
          Mar 2018 – Jun 2019 (1 year and 4 months)
        </p>
        <ul>
          <li>
            Designed electronic systems for a Remotely Operated Vehicle (ROV) for underwater exploration.
          </li>
          <li>
            Prototyped PCBs for subsea use with Altium Designer, optimizing underwater thruster controls, cameras, and sensors for precision and reliability.
          </li>
          <li>
            Developed C++ routines for ROV communication and control, enabling SPI data interfacing between AVR microcontrollers to allow vehicle coordination.
          </li>
        </ul>
      </div>

    </section>
  );
};

export default Research;
