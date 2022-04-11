import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./styles/global.scss";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render((
  <App/> 
));

reportWebVitals();
