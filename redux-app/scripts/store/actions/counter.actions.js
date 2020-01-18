export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER";
export const STORE_ITEM = "STORE_ITEM";

// Action Creators - ADD COUNTER
export const onAddCounter = (payload) => {
    return {
        type : ADD_COUNTER,
        payload
    }
}

// Action Creators - SUBSTRACT COUNTER
export const onSubstractCounter = payload => {
    return {
        type : SUBSTRACT_COUNTER,
        payload
    }
}

// Async Action Creator - SUBSTRACT COUNTER
export const asyncSubstractCounter = (ms) => {
    return function(dispatch, getState){
        setTimeout(() => {
            dispatch(onSubstractCounter(7))
        }, ms)
    }
}

export const onStoreItem = (value) => {
    return {
        type : STORE_ITEM,
        value
    }
}