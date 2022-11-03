import { TOGGLE_THEME } from "../actions/constants";

const initialState = {
    theme: 'light'
};

const themeReducer = ( state = initialState, { type } ) => {
    switch( type ) {
        case TOGGLE_THEME:
            return {
                ...state.theme,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
};

export default themeReducer;