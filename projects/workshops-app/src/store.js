import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
// import storeTheme from './middleware/storeTheme';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import themeReducer from './reducers/theme';
import searchReducer from './reducers/search';

const sagaMiddleware = createSagaMiddleware();

/*
    state -> {
        themeInfo: {
            theme: 'light'
        },
        searchInfo: {
            status: '', // 'FETCH_ITEMS' | 'FETCHED_ITEMS'
            items: []
        }
    }
*/
const rootReducer = combineReducers({
    themeInfo: themeReducer,
    searchInfo: searchReducer
});

const store = createStore( rootReducer, composeWithDevTools( applyMiddleware( logger, /*storeTheme*/ thunk, sagaMiddleware ) ) );

export default store;