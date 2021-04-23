import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';
import {persistMiddleware } from './middlewares/persist-middleware';

export const store = createStore(reducers, {}, applyMiddleware(persistMiddleware,thunk));


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
