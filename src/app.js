import '../styles/default.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';


var root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

ReactDOM.render(
    <div className="container">
        <App></App>
    </div>
    ,
    document.getElementById('root')
);
