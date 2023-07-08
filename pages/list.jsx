import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import '../styles/global.css';
import styles from '../styles/list.module.css';
import { Link, Element } from 'react-scroll';

function List() {
    const linkStyle = {
        fontFamily: 'Catamaran-Light, sans-serif',
        textDecoration: 'none',
        cursor: 'pointer', 
        display: 'inline-block', 
      };
    
      const hoverStyle = {
        textDecoration: 'underline',
      };    

  return (
    <Layout>
    <div className={styles.container}>
        <h1>My List</h1> 
        <span>
        <Link to="curr-read" style={linkStyle} 
       
        onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }}
        onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}
        >Currently Reading
        
        </Link>
        </span>

        <Element name="curr-read">
            <p>Currently Reading(-)</p>
        </Element>

        <p>Currently Reading</p>
        <p>Completed</p>
        <p>Plan to Read</p>
        <p>Dropped</p>
    </div>
    </Layout>
  );
}

export default List;
