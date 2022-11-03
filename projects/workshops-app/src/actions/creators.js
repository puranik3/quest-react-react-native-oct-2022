import { TOGGLE_THEME } from "./constants";

// const toggleTheme = () => {
//     return {
//         type: TOGGLE_THEME
//     };
// };

// Because we are using thunk middleware, "actions can be functions" (instead of objects with type property)
const toggleTheme = () => {
    return ( dispatch, getState ) => {
        // dispatch the real action...
        dispatch({
            type: TOGGLE_THEME
        });

        // ...followed by executing the side-effect
        localStorage.setItem( 'theme', getState().themeInfo.theme );
    };
};

export {
    toggleTheme
};