import React from 'react';
import css from './styles.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    const a = null;
    return (
        <header className={css.header}>
            <ul className={css.nav}>
                <Link to="/">Home</Link>
                <Link to="/interview">Auth type</Link>
                <Link to="/project">Link to outer project</Link>
            </ul>
        </header>
    )
}
