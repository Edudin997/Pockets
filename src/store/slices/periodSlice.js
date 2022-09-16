import { createSlice } from '@reduxjs/toolkit';

const period = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU', { month: 'numeric', year: 'numeric' });
  const todayMonth = Number(currentDate.split('.')[0].replace(/^0+/, ''));
  const todayYear = Number(currentDate.split('.')[1]);
  return { month: todayMonth, year: todayYear };
};

const initialPeriod = {
  month: period().month,
  year: period().year,
};

const periodSlice = createSlice({
  name: 'period',
  initialState: initialPeriod,
  reducers: {
    setMonth(state, action) {
      state.month = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
  },
});

export const { setMonth, setYear } = periodSlice.actions;

export default periodSlice.reducer;
