import { Dispatch } from 'redux';
import {Action} from '../actions';
import {ActionType} from '../action-types';
import bundle from '../../bundler';


export const createBundle = (cellId: string, input: string) =>{
  return async(dispatch: Dispatch<Action>) => {
   dispatch({
     type: ActionType.BUNDLE_START,
     payload: {
       cellId,
     }
   })   
  
  const result = await bundle(input);
  dispatch({
  type: ActionType.BUNDLE_COMPLETE,
  payload:{
    cellId,
    bundle: {
      code: result.code,
      err: result.err
  }
  }})

}};