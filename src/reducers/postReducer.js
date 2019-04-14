import { CREATE_POST, DELETE_POST, EDIT_POST,UPDATE_POST } from '../actions/types';

export default (state=[],action) => {
    switch(action.type) {
        case CREATE_POST:
            return [...state, action.payload];
        case DELETE_POST:
            return state.filter( post => post.id !== action.payload );
        case EDIT_POST:
            return state.map(post => post.id === action.payload ? {...post, editing:!post.editing} : post);
        case UPDATE_POST:
            return state.map(post => {
                console.log(post.id, action.id);
                if (post.id === action.id) {
                    return {
                        ...post,
                        title:action.data.newTitle,
                        text:action.data.newMessage,
                        editing: !post.editing
                    }
                } else {
                    return post;
                }
            });
        default:
            return state;
    }
};