import React from 'react';
import Experience from './Experience';
import Research from './Research';
import Extracurricular from './Extracurricular';
import Contact from './Contact';


const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <Experience />
      <Research />
      <Extracurricular />      
      <Contact />      
    </main>
  );
};

export default MainContent;
