import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../stores';
import { MainPage } from './main';
import { NestedProject } from './main/components/NestedProject';
import { Tasks } from './main/components/Content/components/Interview';
import { Input } from './main/components/Content/components/Input';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                path: 'interview',
                element: <Tasks/>,
            },
            {
                path: 'input',
                element: <Input/>,
            },
        ],
    },
    {
        path: '/project',
        element: <NestedProject/>,
    },
]);

export const App = () => {
    const a = 'null';
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};
