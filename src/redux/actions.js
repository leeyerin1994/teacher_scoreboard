// action creator: 액션을 (동적으로) 만드는 함수
export const updateUser = (name) => ({
  type: 'updateUser',
  payload: name
})

export const addPlayer = (name) => ({
  type: 'ADD_PLAYER',
  name
})