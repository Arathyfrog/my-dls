// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import './index.scss';
// import { Theme } from './theme';

const rootElement = document.getElementById('root'); 
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
  <App />
</React.StrictMode>
);
