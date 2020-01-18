import * as actionTypes from '../actions/counter.actions';

const initialState = {
    result: []
}

export const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_ITEM : {
            let arr = [...state.result];
            arr.push(action.value);
            return {
                ...state,
                result : arr
            }
        }
        default: return state;
    }
}