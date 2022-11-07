import { takeEvery, takeLatest, call, put, delay } from 'redux-saga/effects';
import { FETCH_ITEMS } from '../actions/constants';
import { fetchedItems } from '../actions/creators';
import { search } from '../services/items';

function *searchSagaWorker( action ) {
    yield delay( 500 ); // takes care of "debounce"
    const items = yield call( search, action.payload.key );
    yield put( fetchedItems( items ) );
}

// a "generator function"
function *searchSaga() {
    // yield takeEvery( FETCH_ITEMS, searchSagaWorker );
    
    // if there is a worker saga execution under progress, just abandon it, and start a new execution
    yield takeLatest( FETCH_ITEMS, searchSagaWorker );
}

export default searchSaga;