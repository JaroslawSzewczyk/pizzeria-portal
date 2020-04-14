import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables</h2>
    <Link to={`${process.env.PUBLIC_URL}/booking/book/zxc123`}>Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/booking/new`}>New booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/events/event/ghj456`}>Event</Link>
    <Link to={`${process.env.PUBLIC_URL}/events/new`}>New Event</Link>
  </div>
);

export default Tables;
