import React from 'react';
import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard</h2>
    <Link to='/'>Dashboard</Link>
  </div>
);

export default Dashboard;
