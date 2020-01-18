import * as actionTypes from '../actions/counter.actions';

const initialState = {
    counter: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case actionTypes.DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case actionTypes.ADD_COUNTER :{
            return {
                ...state,
                counter : state.counter + action.payload
            }
        }
        case actionTypes.SUBSTRACT_COUNTER:{
            return {
                ...state,
                counter : state.counter - action.payload
            }
        }
        default: return state;
    }
}