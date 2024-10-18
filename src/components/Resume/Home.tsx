import React from 'react';
import LeftSidebar from './LeftSidebarHome';
import MainContent from './MainContentHome';
import './CV.css'


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
