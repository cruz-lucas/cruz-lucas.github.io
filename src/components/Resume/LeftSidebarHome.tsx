// src/components/LeftSidebar.tsx
import React from 'react';
import Contact from './Contact';
import profile from '@site/static/img/profile.png';

import styles from './styles.module.css'

const LeftSidebar: React.FC = () => {
  return (
    <aside className="left-sidebar">
      <div className={styles.avatarArea}>
        <img
            src={profile}
            alt="Lucas"
          />
      </div>
      <Contact />
    </aside>
  );
};

export default LeftSidebar;
