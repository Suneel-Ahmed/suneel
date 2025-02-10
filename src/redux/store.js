import { configureStore } from '@reduxjs/toolkit';
import LanguageReducer from './Slices/langSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';

// redux-persist configuration
const persistConfig = {
  key: 'root',
  storage, // Persist to localStorage
};

// Combine reducers (if you have more reducers in the future)
const rootReducer = combineReducers({
  lang: LanguageReducer,
});

// Apply persistReducer to root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore non-serializable actions from redux-persist
      },
    }),
});

export const persistor = persistStore(store); // Create persistor
