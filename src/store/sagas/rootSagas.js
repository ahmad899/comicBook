

import { all, put, fork, call, takeEvery, select, } from 'redux-saga/effects'
import { fetchData, endFetch, START_FETCH, searchString, SEARCH_STRING } from '../actions/actionTypes';


function* handleRequest(action) {
    try {
        let state = yield select(state => state);
        const dataJson = yield fetch(`${state.url}`, {
            headers: {
                'Authorization': 'Bearer ComicClanVettIO2019'
            }
        }).then(response => response.json())
        yield put(fetchData(dataJson));

    } catch (e) {
        yield put(endFetch(e.message));
    }
}

function* handleInput(action) {
    yield call(searchString);
    try {
        let state = yield select(state => state);
        const dataJson = yield fetch(`${state.url}${state.query}`, {
            headers: {
                'Authorization': 'Bearer ComicClanVettIO2019'
            }
        }).then(response => response.json())
        yield put(fetchData(dataJson));

    } catch (e) {
        yield put(endFetch(e.message));
    }
}



function* watchRequest() {
    yield takeEvery(START_FETCH, handleRequest);
    yield takeEvery(SEARCH_STRING, handleInput);

}


export default function* rootSaga() {
    yield all([
        fork(watchRequest),


    ])
}
