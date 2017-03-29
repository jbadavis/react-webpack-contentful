import React from 'react';

import styles from './header.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>My Contentful Example Site</h1>
    </div>
  )
};

export default Header;
