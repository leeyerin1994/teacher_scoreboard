import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {useSelector} from "react-redux";

const App = () => {
  const players = useSelector(state => state.playerReducer.players);

  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" players={players}></Header>

      {
        players.map(player => (
            <Player name={player.name} key={player.id} id={player.id} score={player.score}>
            </Player>
          )
        )
      }
      <AddPlayerForm></AddPlayerForm>
    </div>
  );
}

export default App;