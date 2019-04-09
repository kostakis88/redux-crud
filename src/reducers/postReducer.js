import { CREATE_POST, DELETE_POST } from '../actions/types';

export default (state=[],action) => {
    switch(action.type) {
        case CREATE_POST:
            return [...state, action.payload];
        case DELETE_POST:
            return state.filter( post => post.id !== action.payload );
        default:
            return state;
    }
};