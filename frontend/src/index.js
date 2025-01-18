import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated for React 18+
import './index.css';
import App from './App';

// Use createRoot instead of ReactDOM.render for React 18+
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No root element found in the DOM!");
}
