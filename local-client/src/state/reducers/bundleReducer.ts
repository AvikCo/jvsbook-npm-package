import produce from 'immer';
import {ActionType} from '../action-types';
import {Action} from '../actions';

interface BundleState {
  [key: string]: {
    loading: boolean;
    code: string;
    err: string;
  } | undefined;
}

const initialState: BundleState = {}

const reducer = produce((state:BundleState= initialState, action:Action): BundleState=>{
  switch(action.type){
    case ActionType.BUNDLE_START:
    state[action.payload.cellId] = {
      loading: true,
      code: '',
      err: ''
    }
    return state;
    case ActionType.BUNDLE_COMPLETE:
    const {code, err} = action.payload.bundle;
    state[action.payload.cellId] = {
      loading: false,
      code,
      err,
    }
    return state;
    default: 
    return state;
  }

},initialState)

export default reducer;

