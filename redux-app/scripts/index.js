// ES6 imports
// import { MAGIC_NUMBER } from './utils';

import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { counterReducer } from './store/reducers/counter.reducer';
import { resultReducer } from './store/reducers/result.reducer';
import * as actionTypes from './store/actions/counter.actions';
import thunk from 'redux-thunk';

// Logger Middleware
// const logger = store => next => action => {
// }

const logger = (store) => {
    return function (next) {
        return function (action) {
            console.log("[Previous State]", store.getState());
            console.log("[Action]", action);
            return next(action);
        }
    }
}

$(document).ready(() => {
    // Creating Enhancers
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // Multiple Reducers
    const rootReducer = combineReducers({
        ctr : counterReducer,
        res : resultReducer
    })

    const store = createStore(rootReducer,
        composeEnhancers(applyMiddleware(logger, thunk)));

    // Counter UI
    const updateUI = (state) => {
        $("#counter").text(state.ctr.counter);
        if (state.res.result.length > 0) {
             $("#stored-value").empty();
            state.result.forEach(res => {
                $("#stored-value").append(`
                <li class="list-group-item">${res}</li>
            `)
            })
        }
    }
    updateUI(store.getState());

    // Counter App
    store.subscribe(() => {
        let state = store.getState();
        updateUI(state);
    })

    $("#btnIncrement").on("click", () => {
        store.dispatch({ type: actionTypes.INCREMENT })
    })
    $("#btnDecrement").on("click", () => {
        store.dispatch({ type: actionTypes.DECREMENT })
    })
    $("#btnAddCounter").on("click", () => {
        store.dispatch(actionTypes.onAddCounter(10))
    })
    $("#btnSubCounter").on("click", () => {
        store.dispatch(actionTypes.onSubstractCounter(5))
    })
    $("#btnDelaySubCounter").on("click", () => {
        store.dispatch(actionTypes.asyncSubstractCounter(3000))
    })
    $("#btnStoreValue").on("click", () => {
        // store.dispatch({ type: actionTypes.STORE_ITEM })
        store.dispatch(actionTypes.onStoreItem(store.getState().ctr.counter))
    })

})










// ES5 imports
// const redux = require("redux");
// const utils = require("./utils");

// console.log("Script loaded", MAGIC_NUMBER);