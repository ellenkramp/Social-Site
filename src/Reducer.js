import React from 'react';
import moment from 'moment';
import sort from 'lodash/sortBy';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

export const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUP': (input, textarea) => {
            input.value = "";
            textarea.value = "";
            return state.concat([action.text])
        }
        default:
            return state
    }
}