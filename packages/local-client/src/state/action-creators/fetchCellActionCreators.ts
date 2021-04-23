import axios from 'axios';
import {Cell} from '../cell';
import {ActionType} from '../action-types';
import { Action} from '../actions'
import {RootState} from '../reducers';
import { Dispatch } from 'redux';

// we return function fron fetchcells function to use ReduxThunk Middleware 
export const fetchCells = () => async (dispatch: Dispatch<Action>)=>{
        dispatch({type: ActionType.FETCH_CELLS});

        try{
            const {data}: {data: Cell[]} = await axios.get('/cells');
            dispatch({type: ActionType.FETCH_CELLS_COMPLETE, payload: data});

        } catch (err) {
            dispatch({type: ActionType.FETCH_CELLS_ERROR, payload: err.message});
        }
    }
export const saveCells = () =>{
    return async (dispatch: Dispatch<Action>, getState: () => RootState)=>{
        const {cells: {data, order}} = getState();
        const cells = order.map(id => data[id]);

        try{
            await axios.post('/cells', { cells });
        } catch(err){
            dispatch({type: ActionType.SAVE_CELLS_ERROR, payload: err.message});
        }

    }
}