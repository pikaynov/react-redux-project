import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './styles.css';

export const Content = () => {
    const a = null;
    return (
        <main className={css.content}>
            <Outlet />
        </main>
    )
}
