import React from 'react';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
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
