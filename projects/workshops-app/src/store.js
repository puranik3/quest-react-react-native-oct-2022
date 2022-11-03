import { createStore, combineReducers, applyMiddleware } from 'redux';
import themeReducer from './reducers/theme';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
// import storeTheme from './middleware/storeTheme';
import thunk from 'redux-thunk';

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

const store = createStore( rootReducer, composeWithDevTools( applyMiddleware( logger, /*storeTheme*/ thunk ) ) );

export default store;