import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function updateRootStyle() {
  if (window.innerWidth >= 1280) {
    document.documentElement.style.setProperty(
      '--layoutWidth',
      `${window.innerWidth}`
    );
  } else {
    document.documentElement.style.removeProperty('--layoutWidth');
  }
}

updateRootStyle();
window.addEventListener('resize', updateRootStyle);
