import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import storage from 'redux-persist/lib/storage';
import { persistStore ,persistReducer} from "redux-persist";



const persistConfig = {
  key: 'root',
  storage:storage,
  whitelist:['auth']
}

let rootReducer = combineReducers({
    auth: authReducer
})

let persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);
