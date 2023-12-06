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

import { authReducer } from "./auth/auth.reducer";
import { contactsReducer } from "./contacts/contacts.reducer";







const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };
  
  export const store = configureStore({
      reducer: {
        authStore: persistReducer(authConfig, authReducer),
        contactsStore: contactsReducer,
        
          
          
      },
      middleware: getDefaultMiddleware =>
          getDefaultMiddleware({
              serializableCheck: {
                  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
          }),
  });



