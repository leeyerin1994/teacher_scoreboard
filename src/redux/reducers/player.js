import {ADD_PLAYER, CHANGE_SCORE} from "../actonTypes";

let maxId = 4;

const playerInitialState = {
  players: [
    { name: 'LDK', id: 1, score: 10},
    { name: 'PARK', id: 2, score: 20},
    { name: 'KIM', id: 3, score: 30},
    { name: 'LEE', id: 4, score: 40}
  ]
}

export const playerReducer = (state = playerInitialState, action) => {
  let players;
  switch(action.type) {
    case ADD_PLAYER:
      players = [ ...state.players ];
      players.push({name: action.name, id: ++maxId, score: 0});
      return {
        ...state,
        players
      }

    case CHANGE_SCORE:
      players = [ ...state.players ];
      players.forEach(player => {
        if (player.id == action.id) {
          player.score += action.delta;
        }
      })
      return {
        ...state,
        players
      }
  }

  return state;
}