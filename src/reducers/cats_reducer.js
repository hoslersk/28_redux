// Creat a reducer, catsReducer

// by default it returns an empty array

// When the action type is 'FETCH_CATS' it returns the acton's payload

export default function catsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_CATS':
      return action.payload;
    case 'ADD_CAT':
      return [...state, action.payload[0]]
    default:
      return state;
  }
};
