import React from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import css from './styles.css';


export const MainPage = () => {
    const a = 'asfa';
    return (
        <div className={css.main}>
            <Header/>
            <Content />
            <Footer />
        </div>
    );
};
