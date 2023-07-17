import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './styles.css';
import img from './imgs/city_background.jpg';

export const Content = () => {
    const a = null;
    return (
        <main className={css.content}>
            {/* <img src={img} /> */}
            <Outlet />
        </main>
    )
}
