import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import Card from './Card';
import reportWebVitals from './reportWebVitals';
//import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import { robots } from './robots';
// import Cardlist from './components/Cardlist';


import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App/>);

// ReactDOM.render(<App/>,document.getElementById('root'));
// ServiceWorkerRegistration();


//const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM.render(
  //<React.StrictMode>
   // <cardlist robots={robots}/>
    //, document.getElementById('root'));
  //</React.StrictMode>
//registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
