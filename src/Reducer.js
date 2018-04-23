import React from 'react';
import moment from 'moment';
import sort from 'lodash/sortBy';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

export let ADD_SUP = 'ADD_SUP';

export const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_SUP:
            console.log(action.body);
            return state.concat([action.text])
        
        default:
            return state
    }
}