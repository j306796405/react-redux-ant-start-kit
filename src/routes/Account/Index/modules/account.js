/**
 * Created by linjie.jiang on 16/12/15.
 */
import reqwest from 'reqwest';

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_LIST = 'REQUEST_LIST';
export const FETCH_LIST = 'FETCH_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';

// ------------------------------------
// Actions
// ------------------------------------
export function requestList () {
    return {
        type: REQUEST_LIST
    }
}

export function fetchList (param = {page: 1, pageSize: 10}) {
    return {
        type: FETCH_LIST,
        payload: {
            page: param.page,
            pageSize: param.pageSize
        }
    }
}

export function receiveList (data) {
    return {
        type: RECEIVE_LIST,
        payload: {
            data
        }
    }
}

export const actions = {
    requestList,
    fetchList,
    receiveList
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [REQUEST_LIST]: (state, action) => {
        return ({...state, isFetching: true})
    },
    [FETCH_LIST]: (state, action) => {
        var payload = action.payload;
        return (dispatch, getState) => {
            if (getState().account.isFetching) return

            dispatch(requestList());

            return reqwest({
                url: 'http://localhost:3003/account',
                method: 'get',
                data: {
                    pageSize: payload.pageSize,
                    page: payload.page,
                    ...params,
                },
                type: 'json'
            }).then((data) => {
                console.log('**********');
                console.log(data);
                console.log('**********');
                dispatch(receiveList(data));
            });
            // return fetch('https://api.github.com/zen')
            //     .then(data => data.text())
            //     .then(text => dispatch(receiveZen(text)))
        }
    },
    [RECEIVE_LIST]: (state, action) => {
        return {...state, fetching: false, list: action.payload.list}
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    list: [],
    isFetching: false,
    pagination: {
        current: 1,
        pageSize: 10,
        total: 0
    }
};
export default function accountReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
