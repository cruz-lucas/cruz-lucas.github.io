import React from 'react';
import LeftSidebar from '../Intro/LeftSidebarHome';
import MainContent from '../Intro/MainContentHome';
import '../Resume/CV.css'


const Resume: React.FC = () => {
  return (
    <div className="resume">
      <div className="resume-container">
        <LeftSidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Resume;
