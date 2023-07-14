import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function FetchJSON() {
  fetch('./backend/tourn_map.json').then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
}

function DropDown() {
  const [open, setOpen] = useState()
  const player_JSON = FetchJSON()

  function handleOpen() {
    setOpen(current => !current)
  }

  return (
    <div className="dropdown">
      <button className="button" onClick={handleOpen}>Select Player</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button classname="dropdown-option">Menu 1</button>
          </li>
          <li className="menu-item">
            <button classname="dropdown-option">Menu 2</button>
          </li>
          <li className="menu-item">
            <button classname="dropdown-option">Menu 3</button>
          </li>
          <li className="menu-item">
            <button classname="dropdown-option">Menu 4</button>
          </li>
          <li className="menu-item">
            <button classname="dropdown-option">Menu 5</button>
          </li>
          <li className="menu-item">
            <button classname="dropdown-option">Menu 6</button>
          </li>
          <li className="menu-item">
            <button classname="dropdown-option">Menu 7</button>
          </li>
          <li className="menu-item">
            <button classname="dropdown-option">Menu 8</button>
          </li>
          <li className="menu-item">
            <button classname="dropdown-option">Menu 9</button>
          </li>
          <li className="menu-item">
            <button classname="dropdown-option">Menu 10</button>
          </li>
        </ul>
      ) : null}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to ATP Player Path Visualization
        </h1>
        <p>
          Select a top 100 player to see their travels this season
        </p>
        <DropDown />
        <a
          className="App-link"
          href="https://github.com/colimartin/tennis-data"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
