import React from 'react';
import css from './styles.css';

export const Header = () => {
    const a = null;
    return (
        <header className={css.header}>
            <ul className={css.nav}>
                <li><a href="/">Home (not that one which you cant buy)</a></li>
                <li><a href="/input">My Custom Input</a></li>
                <li><a href="/project">Project React-Redux</a></li>
            </ul>
        </header>
    )
}
