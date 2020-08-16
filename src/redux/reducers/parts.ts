import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UpdatePartAction {
  index: number,
  value: number|string
}

interface PartsState {
  totalParts: number,
  parts: Array<number|string>
}

export const initialState: PartsState = {
  totalParts: 0,
  parts: [],
};

const partsSlice = createSlice({
  name: 'parts',
  initialState,
  reducers: {
    updateTotalParts(state: PartsState, action: PayloadAction<number>) {
      return {
        ...state,
        totalParts: action.payload,
        parts: new Array<number|string>(action.payload).fill(''),
      };
    },
    updatePart(state: PartsState, action: PayloadAction<UpdatePartAction>) {
      return {
        ...state,
        parts: [
          ...state.parts.slice(0, action.payload.index),
          action.payload.value,
          ...state.parts.slice(action.payload.index + 1),
        ],
      };
    },
    clearParts() {
      return {
        ...initialState,
      };
    },
  },
});

export const { updateTotalParts, updatePart, clearParts } = partsSlice.actions;

export default partsSlice.reducer;
