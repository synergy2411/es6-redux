"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _redux = require("redux");

var _counter = require("./store/reducers/counter.reducer");

var _result = require("./store/reducers/result.reducer");

var actionTypes = _interopRequireWildcard(require("./store/actions/counter.actions"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// ES6 imports
// import { MAGIC_NUMBER } from './utils';
// Logger Middleware
// const logger = store => next => action => {
// }
var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.log("[Previous State]", store.getState());
      console.log("[Action]", action);
      return next(action);
    };
  };
};

$(document).ready(function () {
  // Creating Enhancers
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose; // Multiple Reducers

  var rootReducer = (0, _redux.combineReducers)({
    ctr: _counter.counterReducer,
    res: _result.resultReducer
  });
  var store = (0, _redux.createStore)(rootReducer, composeEnhancers((0, _redux.applyMiddleware)(logger, _reduxThunk["default"]))); // Counter UI

  var updateUI = function updateUI(state) {
    $("#counter").text(state.ctr.counter);

    if (state.res.result.length > 0) {
      $("#stored-value").append("\n                <li class=\"list-group-item\">\n                    ".concat(state.res.result[state.res.result.length - 1], "\n                </li>\n            ")); // $("#stored-value").empty();
      // state.result.forEach(res => {
      //     $("#stored-value").append(`
      //     <li class="list-group-item">${res}</li>
      // `)
      // })
    }
  };

  updateUI(store.getState()); // Counter App

  store.subscribe(function () {
    var state = store.getState();
    updateUI(state);
  });
  $("#btnIncrement").on("click", function () {
    store.dispatch({
      type: actionTypes.INCREMENT
    });
  });
  $("#btnDecrement").on("click", function () {
    store.dispatch({
      type: actionTypes.DECREMENT
    });
  });
  $("#btnAddCounter").on("click", function () {
    store.dispatch(actionTypes.onAddCounter(10));
  });
  $("#btnSubCounter").on("click", function () {
    store.dispatch(actionTypes.onSubstractCounter(5));
  });
  $("#btnDelaySubCounter").on("click", function () {
    store.dispatch(actionTypes.asyncSubstractCounter(3000));
  });
  $("#btnStoreValue").on("click", function () {
    // store.dispatch({ type: actionTypes.STORE_ITEM })
    store.dispatch(actionTypes.onStoreItem(store.getState().ctr.counter));
  });
}); // ES5 imports
// const redux = require("redux");
// const utils = require("./utils");
// console.log("Script loaded", MAGIC_NUMBER);