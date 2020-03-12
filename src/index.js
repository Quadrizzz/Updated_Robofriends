import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Containers/index.css';
// import Header from './header';
import App from '../src/Containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';




ReactDOM.render(<App /> ,document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();