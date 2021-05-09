import {combineReducers} from 'redux';

export default combineReducers({
    someReducer: (state = {someText: 'Hola'}, action) => (state)
})