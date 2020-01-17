const redux = require("redux");


const initialState = {
    counter : 0,
    result : []
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === "INCREMENT"){
        return {
            ...state,
            counter : state.counter + 1                         // state.counter++
        }
    }else if(action.type === "ADD_COUNTER"){
        return {
            ...state,
            counter : state.counter + action.payload
        }
    }else if(action.type === "STORE_ITEM"){
        let result = [...state.result];;
        result.push(state.counter);
        return {
            ...state,
            result
        }
    }
    return state;
}

// Store
const store = redux.createStore(rootReducer);

// console.log(store.getState());

// Subscribe the state
store.subscribe( ()=>{
    console.log("[SUBSCRIBE]", store.getState());
})


// Action
store.dispatch({type : "INCREMENT"})                        // counter : 1 , result :[1]
store.dispatch({type : "STORE_ITEM"})
store.dispatch({type : "ADD_COUNTER", payload : 10})        // counter : 11 , result :[1, 11]
store.dispatch({type : "STORE_ITEM"})
// console.log(store.getState());