const playerInitialState = {
  players: [
    { name: 'LDK', id: 1, score: 10},
    { name: 'PARK', id: 2, score: 20},
    { name: 'KIM', id: 3, score: 30},
    { name: 'LEE', id: 4, score: 40}
  ]
}

export const playerReducer = (state = playerInitialState, action) => {

  return state;
}