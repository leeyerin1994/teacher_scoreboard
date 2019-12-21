import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      { name: 'LDK', id: 1},
      { name: 'PARK', id: 2},
      { name: 'KIM', id: 3},
      { name: 'LEE', id: 4}
    ]
  }
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer: ', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      return {
        players: players
      }
    })
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayer={10 + 1}></Header>

        {
          this.state.players.map(player => (
              <Player name={player.name} key={player.id} id={player.id}
                      removePlayer={this.handleRemovePlayer}></Player>
            )
          )
        }
      </div>
    );
  }
}

export default App;
