import React from 'react';
import Contact from '../Resume/Contact';
import profile from '@site/static/img/profile.png';

import styles from './styles.module.css'

const LeftSidebar: React.FC = () => {
  return (
    <aside className="left-sidebar">
      <div className="sidebar-home">      
      <div className={styles.avatarArea}>
        <img
            src={profile}
            alt="Lucas"
          />
      </div>
      <h1>Lucas Cruz</h1>
      <p>MSc Student<br/>
      Department of Computing Science<br/>
      University of Alberta<br/>
      Edmonton, AB, Canada</p>
      <Contact />
      </div>
    </aside>
  );
};

export default LeftSidebar;
