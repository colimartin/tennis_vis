import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import player_map_json from "./backend/tourn_map.json";
import D3Plotting from "./d3_plotting.js"

const player_map = JSON.parse(JSON.stringify(player_map_json));

function renderPlayers() {
  var players = []
  for (var player in player_map) {
    players.push({player})
  }
  return players               
 };

const DropDown = ({open, trigger, menu, handleMenu}) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li><button key={index} className="menu-item" onClick={() => handleMenu({menuItem})}>{menuItem.player}</button></li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

const MapComponent = (playerName) => {
  let name = playerName.playerName
  return (
    <div>
      <p>
        {name} Map
        <D3Plotting player_tourns={player_map[name]}/>
      </p>
    </div>
  )
}

function App() {
  const [open, setOpen] = useState()
  const [map, setMap] = useState()
  const [currPlayer, setCurrPlayer] = useState()
  const players = renderPlayers()

  function handleOpen() {
    setOpen(!open)
  }

  const handleMenu = (playerName) => {
    setCurrPlayer(playerName.menuItem.player)
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
          menu={players}
          handleMenu={handleMenu}
        />
        { map ? <MapComponent playerName = {currPlayer}/>
        : null
        }
        <a
          className="App-link"
          href="https://github.com/colimartin/tennis_vis"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <p></p>
      </header>
    </div>
  );
}

export default App;
