import produce from 'immer';

import { Action } from '../actions';
import { Cell } from '../cell';
import { ActionType } from '../action-types';

interface CellsState {
	loading: boolean;
	error: string | null;
	order: string[];
	data: {
		[key: string]: Cell;
	};
}

const initialState: CellsState = {
	loading: false,
	error: null,
	order: [],
	data: {},
};

const reducer = produce((state: CellsState = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.SAVE_CELLS_ERROR:
			state.error = action.payload;
			return state;
		case ActionType.FETCH_CELLS:
			state.loading = true;
			state.error = null;
			return state;
		case ActionType.FETCH_CELLS_COMPLETE:
			state.order = action.payload.map(cell => cell.id);
			state.data = action.payload.reduce((acc, cell) => {
				acc[cell.id] = cell;
				return acc;
			},{} as CellsState['data'])

			return state;
		case ActionType.FETCH_CELLS_ERROR:
			state.loading = false;
			state.error= action.payload;
			return state;
		case ActionType.DELETE_CELL:
			delete state.data[action.payload];
			state.order = state.order.filter((id) => id !== action.payload);
			return state;
		case ActionType.UPDATE_CELL:
			const { id, content } = action.payload;
			state.data[id].content = content; //we are using immer so we don't have to return anything here
			//we just wrap the reducer funtion with produce(comes from immer) and immer takes care of everthing
			//MEANS: immer will create a new state object  put all the existing data and only update the specific changes we do here
			//and eventually return the new object
			return state;
		case ActionType.INSERT_CELL_AFTER:
			const newCell: Cell = {
				content: '',
				type: action.payload.type,
				id: randomId(),
			};
			state.data[newCell.id] = newCell;
			const foundIndex = state.order.findIndex(
				(id) => id === action.payload.id
			);

			if (foundIndex < 0) {
				state.order.unshift(newCell.id);
			} else {
				state.order.splice(foundIndex + 1, 0, newCell.id);
			}
			return state;
		case ActionType.MOVE_CELL:
			const { direction } = action.payload;
			const index = state.order.findIndex((id) => id === action.payload.id);
			const targetIndex = direction === 'up' ? index - 1 : index + 1;

			if (targetIndex < 0 || targetIndex > state.order.length - 1) {
				return state;
			}

			state.order[index] = state.order[targetIndex];
			state.order[targetIndex] = action.payload.id;
			return state;
		default:
			return state;
	}
},initialState);

const randomId = () => {
	return Math.random().toString(36).substring(2, 5);
};
export default reducer;
