import React from 'react';
import styles from './Order.module.scss';
import { Link } from 'react-router-dom';

const Order = () => (
  <div className={styles.component}>
    <h2>Order</h2>
    <Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Link>
    <Link to={`${process.env.PUBLIC_URL}/ordering/order/123abc`}>Order</Link>
    <p>id: 123abc</p>
  </div>
);

export default Order;
