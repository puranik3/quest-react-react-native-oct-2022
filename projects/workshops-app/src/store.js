import { createStore, combineReducers } from 'redux';
import themeReducer from './reducers/theme';

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

const store = createStore( rootReducer );

export default store;
