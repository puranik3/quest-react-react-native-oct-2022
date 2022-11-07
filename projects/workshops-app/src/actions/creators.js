import {
    TOGGLE_THEME,
    FETCH_ITEMS,
    FETCHED_ITEMS
} from "./constants";
import { search } from '../services/items';

// const toggleTheme = () => {
//     return {
//         type: TOGGLE_THEME
//     };
// };

const fetchItems = ( key ) => {
    return {
        type: FETCH_ITEMS,
        payload: {
            key
        }
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

const fetchItemsThunk = ( key ) => {
    return async ( dispatch, getState ) => {
        // dispatch the real action...
        dispatch( fetchItems( key ) );

        // ...followed by executing the side-effect (fetch the search suggestions (items) from the backend, and storing the search suggestions in the store)
        const items = await search( key );
        dispatch( fetchedItems( items ) );
    }
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
    fetchedItems,
    fetchItemsThunk
};