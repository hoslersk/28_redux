import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
// import CatsIndex from './components/cats_index'
// import App from './components/app';
import routes from './routes';
import {createStore} from 'redux';
import rootReducer from './reducers/index'; // Don't need to specify 'index' (looked for automatically)
import {fetchCats, fetchDogs} from './actions/index';
import {Provider} from 'react-redux';

// function MainRouter () {
//   return(
//     <Router history={browserHistory}>
//     </Router>
//   )
// }

// removed from above between 'Router' tags
/* <Route path="/" component={App}>
  <Route path="/cats" component={CatsIndex} />
</Route> */

// const store = createStore(catsReducer);
const store = createStore(rootReducer);

store.dispatch(fetchCats());
store.dispatch(fetchDogs());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('container')
)

// <App />, document.getElementById('container')
// <MainRouter />, document.getElementById('container') // change to MainRouter
// ... changed to what is above
