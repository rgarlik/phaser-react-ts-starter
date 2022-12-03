import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Game from './game/Game';

// Create game
new Game();

// Create react root
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
