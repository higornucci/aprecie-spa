import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
// reset material UI
import CssBaseline from '@mui/material/CssBaseline'; 
// FONTES MATERIAL UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);