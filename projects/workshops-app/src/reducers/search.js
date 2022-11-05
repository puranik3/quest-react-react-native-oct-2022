import {
    FETCH_ITEMS,
    FETCHED_ITEMS
} from "../actions/constants";

const initialState = {
    status: '',
    items: []
};

const searchReducer = ( state = initialState, { type, payload: { items } } ) => {
    switch( type ) {
        case FETCH_ITEMS:
            return {
                ...state,
                status: type
            };
        case FETCHED_ITEMS:
            return {
                ...state,
                status: type,
                items: items
            }
        default:
            return state;
    }
};

export const selectItems = state => state.searchInfo.items;

export default searchReducer;