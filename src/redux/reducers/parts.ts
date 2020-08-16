import { createAction, PayloadAction } from '@reduxjs/toolkit';

interface UpdatePartAction {
  index: number,
  value: number|string
}

export const updateTotalParts = createAction<number>('UPDATE_TOTAL_PARTS');
export const updatePart = createAction<UpdatePartAction>('UPDATE_PART');
export const clearParts = createAction('CLEAR_PARTS');

interface PartsState {
  totalParts: number,
  parts: Array<number|string>
}

const initialState = {
  totalParts: 0,
  parts: [],
};

export default (
  state: PartsState = initialState,
  action: PayloadAction<UpdatePartAction>,
) => {
  switch (action.type) {
    case updateTotalParts.type:
      return {
        ...state,
        totalParts: action.payload,
        parts: new Array<any>(action.payload).fill(''),
      };
    case updatePart.type:
      return {
        ...state,
        parts: [
          ...state.parts.slice(0, action.payload.index),
          action.payload.value,
          ...state.parts.slice(action.payload.index + 1),
        ],
      };
    case clearParts.type:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
