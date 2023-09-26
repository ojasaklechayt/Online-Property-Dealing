// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/UserContext'; // Import UserProvider

ReactDOM.render(
  <React.StrictMode>
    <UserProvider> {/* Wrap your App with UserProvider */}
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
