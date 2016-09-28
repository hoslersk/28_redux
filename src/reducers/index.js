import {combineReducers} from 'redux';
import catsReducer from './cats_reducer';
import dogsReducer from './dogs_reducer';

const rootReducer = combineReducers({ // must 'const' in this case before exporting
  cats: catsReducer,
  dogs: dogsReducer
})

export default rootReducer; // must 'const' in this case before exporting
