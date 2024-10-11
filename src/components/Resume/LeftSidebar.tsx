// src/components/LeftSidebar.tsx
import React from 'react';
import Education from './Education';
import Skills from './Skills';
import Certifications from './Certifications';
import Teaching from './Teaching';
import Presentation from './Presentation';

const LeftSidebar: React.FC = () => {
  return (
    <aside className="left-sidebar">
      <Education />
      {/* <Skills /> */}
      <Teaching />
      <Presentation />
      <Certifications />
    </aside>
  );
};

export default LeftSidebar;
