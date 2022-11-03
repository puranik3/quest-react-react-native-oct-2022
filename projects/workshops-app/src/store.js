import { createStore, combineReducers, applyMiddleware } from 'redux';
import themeReducer from './reducers/theme';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import storeTheme from './middleware/storeTheme';

/*
    state -> {
        themeInfo: {
            theme: 'light'
        }
    }
*/
const rootReducer = combineReducers({
    themeInfo: themeReducer
});

const store = createStore( rootReducer, composeWithDevTools( applyMiddleware( logger, storeTheme ) ) );

export default store;