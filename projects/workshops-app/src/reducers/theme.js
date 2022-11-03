import { TOGGLE_THEME } from "../actions/constants";

const initialState = {
    theme: localStorage.getItem( 'theme' ) || 'light'
};

const themeReducer = ( state = initialState, { type } ) => {
    switch( type ) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
};

export const selectTheme = state => state.themeInfo.theme;

export default themeReducer;

// export {
//     selectTheme
// }