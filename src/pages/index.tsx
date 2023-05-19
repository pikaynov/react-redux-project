import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './main';
import { NestedProject } from './main/components/NestedProject';
import { Input } from './main/components/Content/components/Input';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        children: [
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
        <div>
            <RouterProvider router={router} />
        </div>
    );
};
