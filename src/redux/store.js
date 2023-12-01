import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { contactsReducer } from "./contacts/contacts.reducer";
import { authReducer } from "./auth/auth.reducer";







const authConfig = {
    key: 'auth',
    version: 1,
    storage,
    whitelist: ['token'],
  };
  
  export const store = configureStore({
      reducer: {
          contactsStore: contactsReducer,
          authStore: persistReducer(authConfig, authReducer)
          
      },
      middleware: getDefaultMiddleware =>
          getDefaultMiddleware({
              serializableCheck: {
                  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
          }),
  });



