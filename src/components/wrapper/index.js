import React from 'react';
import Header from '../header'
import Footer from '../footer'
import styles from './index.module.css'

function Wrapper(props) {
  return (
    <div className={styles.app}>
    <Header />
    <div className={styles.container}>    
    {props.children}
    </div>
    <Footer />
    </div>
  );
}

export default Wrapper;