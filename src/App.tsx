import { ChangeEvent, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Game from './game/Game';

let gameSceneManager: Phaser.Scenes.SceneManager;

function App() {
  const [count, setCount] = useState(0);

  // Use an onmount effect to get the game scene manager
  useEffect(() => {
    // Get the game singleton and its scene manager
    // This will never change throughout the component lifetime
    gameSceneManager = Game.Instance.scene;
  }, []);

  const playPauseGame = () => {
    // Get the current active scene. Phaser supports multiple active scenes, but we know we'll only have one active in our case.
    const scene = gameSceneManager.scenes.find((scene: Phaser.Scene) => gameSceneManager.isActive(scene));
    // Emit custom event
    scene?.events.emit('play-pause-logo');
  }

  const handleSizeSlider = (e: ChangeEvent<HTMLInputElement>) => {
    // Get the current active scene. Phaser supports multiple active scenes, but we know we'll only have one active in our case.
    const scene = gameSceneManager.scenes.find((scene: Phaser.Scene) => gameSceneManager.isActive(scene));
    // Emit custom event and pass value from slider
    scene?.events.emit('resize-logo', e.target.value);
  }

  return (
    <div className="App"> 
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        React state:
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <button onClick={() => playPauseGame()}>
          play/pause phaser logo
        </button>
        <br />
        <input type="range" min="1" max="100" defaultValue="100" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSizeSlider(e)} name="logo-size" ></input>
        <label htmlFor="logo-size">logo size</label>
        <br />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
