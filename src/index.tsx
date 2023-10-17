import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages';

const node = ReactDOM.render(<App />, document.getElementById('root'));
console.log(document.getElementById('root')._reactRootContainer)
