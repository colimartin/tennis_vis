import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import player_map_json from "./backend/tourn_map.json";

function renderPlayers() {
  const player_map = JSON.parse(JSON.stringify(player_map_json));
  var players = []
  for (var player in player_map) {
    players.push(<button>{player}</button>)
  }
  return players               
 };

const DropDown = ({open, trigger, menu}) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">{menuItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function App() {
  const [open, setOpen] = useState()
  const [map, setMap] = useState()

  function handleOpen() {
    setOpen(!open)
  }

  function handleMenu() {
    setMap(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to ATP Player Path Visualization
        </h1>
        <p>
          Select a top 100 player to see their travels this season
        </p>
        <DropDown 
          open={open} 
          trigger={<button className="button" onClick={handleOpen}>Select Player</button>}
          menu={renderPlayers()}
        />
        <a
          className="App-link"
          href="https://github.com/colimartin/tennis_vis"
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
