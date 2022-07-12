import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
    key: 'persist-key',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middleware = [thunk];

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export const Persistor = persistStore(store);

export default store;
