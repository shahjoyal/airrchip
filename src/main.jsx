import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta); // Dynamically adding viewport meta

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);