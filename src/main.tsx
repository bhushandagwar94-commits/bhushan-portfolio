import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactLenis } from 'lenis/react';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ReactLenis root options={{ lerp: 0.085 }}>
        <App />
      </ReactLenis>
    </ErrorBoundary>
  </React.StrictMode>,
);
