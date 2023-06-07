import React from 'react';
import css from '../styles.css';

export const Nstdheader = () => {
    const a = null;
    return (
        <header>
            <ul className={css.header}>
                <li><a href="/">back to the main</a></li>
                <li><a href="/NestedProject/talk">click</a></li>
                <li><a href="/NestedProject/notalk">dont click</a></li>
            </ul>
            <div className={css.borderend}>Nested Project<br />
                <img id='Pashka-Stameska' title='Gigached' src='https://avatars.yandex.net/get-music-content/5502420/a1febdfe.a.24116597-1/400x400' alt='avatar' />
            </div>
        </header>
    )
}
