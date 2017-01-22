import { combineReducers } from 'redux';

function reducer1 (state, action) {
    return state + 1;
}

function reducer2 (state, action) {
    return state + 2;
}

const todoApp = combineReducers({
    reducer1,
    reducer2
});

export default todoApp;













