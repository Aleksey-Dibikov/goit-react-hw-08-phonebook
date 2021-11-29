import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from "./contacts/contacts-reducer";
import authReducer from '../redux/auth/auth-slice';

const contactPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
};

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: persistReducer(contactPersistConfig, contactsReducer),
    },
    middleware: [...getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    ],
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { persistor, store };