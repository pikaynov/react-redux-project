import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/stores';
import { Content } from '../Content';
import css from './styles.css';
import { Nstdheader } from './Nstdheader';
import { Nstdfooter } from './Nstdfooter/indes';
import { Talk } from './talk';
import { Notalk } from './notalk';

export const NestedProject = () => (<body className={css.box}>
    <div className={css.footer}>
        <Nstdheader />
        <Content />
        <Nstdfooter />
    </div>
</body>)

const router2 = createBrowserRouter([
    {
        path: '/project',
        element: <Nstdheader />,
    },
    {
        path: 'NestedProject/talk',
        element: <Talk />,
    },
    {
        path: 'NestedProject/notalk',
        element: <Notalk />,
    },
]);

const App2 = () => (
    <Provider store={store}>
        <RouterProvider router2={router} />
    </Provider>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App2 />);

