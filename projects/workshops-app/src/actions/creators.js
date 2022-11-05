import {
    TOGGLE_THEME,
    FETCH_ITEMS,
    FETCHED_ITEMS
} from "./constants";

// const toggleTheme = () => {
//     return {
//         type: TOGGLE_THEME
//     };
// };

const fetchItems = () => {
    return {
        type: FETCH_ITEMS
    };
};

const fetchedItems = ( items ) => {
    return {
        type: FETCHED_ITEMS,
        payload: {
            items
        }
    };
};

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
    toggleTheme,
    fetchItems,
    fetchedItems
};