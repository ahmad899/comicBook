export const FETCH_DATA = 'FETCH_DATA';
export const START_FETCH = 'START_FETCH';
export const END_FETCH = 'END_FETCH';
export const SEARCH_STRING = 'SEARCH_STRING';
export const DATA_TO_SAGA = 'DATA_TO_SAGA';





export const startFetch = () => {
    return {
        type: START_FETCH,
        loading: true,

    };
};


export const fetchData = (data) => {
    return {
        type: FETCH_DATA,
        bookData: data
    };

};

export const endFetch = (error) => {
    return {
        type: END_FETCH,
        loading: false,
        payload: error
    };
};

export const searchString = (string) => {
    return {
        type: SEARCH_STRING,
        error: '',
        url: '',
        search: string
    }

};


