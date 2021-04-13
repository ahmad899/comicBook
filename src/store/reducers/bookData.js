import * as actions from '../actions/actionTypes';


const initialState = {
    book: [],
    loading: null,
    error: '',
    url: 'https://comicclan.vett.io/comics?q=',
    query: '',
}


const bookData = (state = initialState, action) => {
    switch (action.type) {


        case actions.START_FETCH:
            return {
                ...state,
                loading: true,

            }
        case actions.FETCH_DATA:
            return {
                ...state,
                book: action.bookData,
                loading: false,
            }
        case actions.END_FETCH:
            return {
                ...state,
                loading: false,
                book: [],
                error: action.payload
            }

        case actions.SEARCH_STRING:
            return {
                ...state,
                loading: true,
                query: action.search,

            }

        default: return state;
    }
}


export default bookData;