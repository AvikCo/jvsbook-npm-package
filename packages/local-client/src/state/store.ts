import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {persistMiddleware } from './middlewares/persist-middleware';


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(persistMiddleware,thunk)));


// store.dispatch({
// 	type: ActionType.INSERT_CELL_AFTER,
// 	payload: {
// 		id: null,
// 		type: 'code',
// 	},
// });
// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text'
//   }
// })
//we can always manually dispatch from store
//basically used for testing
// const state = store.getState();
// state.cells.data;

// console.log(store.getState())
// get and print the curent state
