import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['myAdress', 'myFavourites', 'userIdReducer', 'myCart'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, 
  }),
});

const persistor = persistStore(store);

export { store, persistor };
