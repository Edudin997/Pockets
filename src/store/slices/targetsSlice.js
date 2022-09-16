import { createSlice } from '@reduxjs/toolkit';

import { getNewTargetsList } from 'src/utils/store';

import { addNewTarget, closedTarget, deleteTarget, getTargets, getTargetsAnalytics } from './targetsActions';

const initialState = {
  didWeGetAllTransactions: false,
  list: [],
  analytics: [],
  offset: 0,
};

export const targetsSlice = createSlice({
  name: 'targets',
  initialState,
  reducers: {
    clearTargets: (state) => {
      state = initialState;
    },
  },
  extraReducers: {
    [addNewTarget.fulfilled]: (state, action) => {
      const newList = getNewTargetsList([...state.list], action.payload, state.didWeGetAllTransactions);
      state.offset = state.offset + newList.length - state.list.length;
      state.list = newList;
    },
    [closedTarget.fulfilled]: (state, action) => {
      state.didWeGetAllTransactions = action.payload.allFetched;
    },
    [getTargets.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.didWeGetAllTransactions = action.payload.allFetched;
    },
    [getTargetsAnalytics.fulfilled]: (state, action) => {
      state.analytics = action.payload;
    },
    [deleteTarget.fulfilled]: (state, action) => {
      const newList = [...state.list];
      const index = newList.findIndex((item) => item.id === action.payload);
      newList.splice(index, 1);
      state.offset -= 1;
      state.list = newList;
    },
  },
});

const { clearTargets } = targetsSlice.actions;

export { addNewTarget, clearTargets, getTargets };

export default targetsSlice.reducer;
