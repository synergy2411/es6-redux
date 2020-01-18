"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onStoreItem = exports.asyncSubstractCounter = exports.onSubstractCounter = exports.onAddCounter = exports.STORE_ITEM = exports.SUBSTRACT_COUNTER = exports.ADD_COUNTER = exports.DECREMENT = exports.INCREMENT = void 0;
var INCREMENT = "INCREMENT";
exports.INCREMENT = INCREMENT;
var DECREMENT = "DECREMENT";
exports.DECREMENT = DECREMENT;
var ADD_COUNTER = "ADD_COUNTER";
exports.ADD_COUNTER = ADD_COUNTER;
var SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER";
exports.SUBSTRACT_COUNTER = SUBSTRACT_COUNTER;
var STORE_ITEM = "STORE_ITEM"; // Action Creators - ADD COUNTER

exports.STORE_ITEM = STORE_ITEM;

var onAddCounter = function onAddCounter(payload) {
  return {
    type: ADD_COUNTER,
    payload: payload
  };
}; // Action Creators - SUBSTRACT COUNTER


exports.onAddCounter = onAddCounter;

var onSubstractCounter = function onSubstractCounter(payload) {
  return {
    type: SUBSTRACT_COUNTER,
    payload: payload
  };
}; // Async Action Creator - SUBSTRACT COUNTER


exports.onSubstractCounter = onSubstractCounter;

var asyncSubstractCounter = function asyncSubstractCounter(ms) {
  return function (dispatch, getState) {
    setTimeout(function () {
      dispatch(onSubstractCounter(7));
    }, ms);
  };
};

exports.asyncSubstractCounter = asyncSubstractCounter;

var onStoreItem = function onStoreItem(value) {
  return {
    type: STORE_ITEM,
    value: value
  };
};

exports.onStoreItem = onStoreItem;