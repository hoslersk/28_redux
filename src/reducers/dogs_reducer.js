export default function dogsReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_DOGS':
      return action.payload // [...state, action.payload] // ...?
    default:
      return state
  }
};
