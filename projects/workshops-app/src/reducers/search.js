import {
    FETCH_ITEMS,
    FETCHED_ITEMS
} from "../actions/constants";

const initialState = {
    status: '',
    key: '',
    items: []
};

// When Redux initializes the store it passes an action called 'redux/@@INIT' whose action will not have payload. So we make sure payload is set to empty object by default ({}), so that destructuring it to get items does not result in an error.
const searchReducer = ( state = initialState, { type, payload: { items, key } = {} } ) => {
    switch( type ) {
        case FETCH_ITEMS:
            return {
                ...state,
                key: key,
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
export const selectKey = state => state.searchInfo.key;

export default searchReducer;