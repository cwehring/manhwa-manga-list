import React from 'react';
import LongButton from '../components/long-button';
import {useRouter} from 'next/router';
import styles from '../styles/book.module.css';
import '../styles/global.css';
import Layout from '../components/layout';

function Book() {
    const router = useRouter();

    const handleClick = () => {
        console.log('Add to List clicked');
    };

    return (
        <Layout>
        <div className={styles.container}>
            <img src="/images/no-image.webp" alt="Book" />
            <div className={styles.textContainer}>
                <h2>Title</h2>
                <p>Author: </p>
                <p>Artist: </p>
                <p>Type: </p>
                <div style={{marginTop: '3.5em'}}>
                    <LongButton text="Add to List" onClick={handleClick} backgroundColor={"white"} textColor="#FFAEAE"/>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default Book;