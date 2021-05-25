import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';


const Tables = () => (
  <div className={styles.component}>

    <h2>Tables View</h2>

    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'> New table booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/asd`} activeClassName='active'> Booked table asd</Link>
  
    <Link to={`${process.env.PUBLIC_URL}/tables/event/new`} activeClassName='active'> New event booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/asd`} activeClassName='active'> Booked event asd</Link>
  </div>
);

export default Tables;