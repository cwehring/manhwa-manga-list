import React from 'react';
import ShortButton from '../components/short-button';
import {useRouter} from 'next/router';
import '../styles/global.css';
import styles from '../styles/home.module.css';

function Home() {
    const router = useRouter();
    
    const handleClick1 = () => {
        console.log('Sign Up clicked');
        router.push('/signup');
    };
    
    const handleClick2 = () => {
        console.log('Login clicked');
        router.push('/login');
    };
    
    return (
        <div className={styles.container}>
        <h1>Manhwa & Manga List</h1>
            <div style={{display: 'flex', gap: '3em', justifyContent: 'center'}}>
                <ShortButton text="Sign Up" onClick={handleClick1} backgroundColor="#FFD7D1" hoverColor="#FFAEAE" textColor="white"/>
                <ShortButton text="Login"  onClick={handleClick2} backgroundColor="#FFD7D1" hoverColor="#FFAEAE" textColor="white"/>
            </div>
        </div>
    );
}

export default Home;
