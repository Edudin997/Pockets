import { configureStore } from '@reduxjs/toolkit';

import { categoriesReducer, periodRedcer, targetsReducer, transactionsReducer, userReducer } from './slices';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    period: periodRedcer,
    targets: targetsReducer,
    transactions: transactionsReducer,
    user: userReducer,
  },
});

export default store;
