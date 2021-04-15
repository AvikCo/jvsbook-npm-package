import { ActionType } from '../action-types';
import {
  Direction,
  InsertCellAfterAction,
  UpdateCellAction,
  DeleteCellAction,
  MoveCellAction,
} from '../actions';
import { CellType } from '../cell';


export const updateCell = (id:string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content
    }
  }
}

export const deleteCell = (id: string): DeleteCellAction => {
  return { type: ActionType.DELETE_CELL, payload: id };

}

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
	return {
		type: ActionType.MOVE_CELL,
		payload: {
			id,
			direction,
		},
	};
};

export const insertCellAfter = (
	id: string | null,
	cellType: CellType
): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER, payload: {
      id,
      type: cellType
  }}
};
