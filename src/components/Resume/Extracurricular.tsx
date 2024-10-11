// src/components/Extracurricular.tsx
import React from 'react';

const Extracurricular: React.FC = () => {
  return (
    <section className="extracurricular">
      <h2>Extracurricular Activities</h2>
      <div>
        <h3>Team Lead, MinervaBots Robotics Team</h3>
        <p>April 2017 – January 2020 (2 years and 9 months)</p>
        <ul>
          <li>Led the team to win 17 trophies in 6 categories over three years.</li>
          <li>
            Secured second place among American teams in the autonomous category at the 2019 All Japan Robot-Sumo
            Tournament in Tokyo.
          </li>
          <li>Managed a cross-functional team of mechanical, control and electrical engineers in developing an autonomous sumo robot.</li>
        </ul>
      </div>
      {/* Add other activities similarly */}
    </section>
  );
};

export default Extracurricular;
