import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import storeTheme from './middleware/storeTheme';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import themeReducer from './reducers/theme';
import searchReducer from './reducers/search';

import searchSaga from './sagas/search';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
};

/*
    state -> {
        themeInfo: {
            theme: 'light'
        },
        searchInfo: {
            status: '', // 'FETCH_ITEMS' | 'FETCHED_ITEMS'
            key: '',
            items: []
        }
    }
*/
const rootReducer = combineReducers({
    themeInfo: themeReducer,
    searchInfo: searchReducer
});

const persistedReducer = persistReducer( persistConfig, rootReducer );

const store = createStore( persistedReducer, composeWithDevTools( applyMiddleware( logger, storeTheme, thunk, sagaMiddleware ) ) );

let persistor = persistStore(store);

sagaMiddleware.run( searchSaga )

export {
    store as default,
    persistor
};