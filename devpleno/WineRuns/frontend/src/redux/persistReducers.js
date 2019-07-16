import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'wineruns',
      storage,
      whitelist: ['auth', 'runs'],
    },
    reducers
  );

  return persistedReducer;
};
