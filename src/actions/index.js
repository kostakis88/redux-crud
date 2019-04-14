import { CREATE_POST, DELETE_POST, EDIT_POST, UPDATE_POST } from './types';

export const createPost = (data) => {
    return {
        type: CREATE_POST,
        payload: data
    };
}

export const deletePost = (post) => {
    return {
        type: DELETE_POST,
        payload: post
    };
}

export const editPost = (post) => {
    return {
        type: EDIT_POST,
        payload: post
    };
}

export const updatePost = (post, data) => {
    return {
        type: UPDATE_POST,
        id: post,
        data: data
    };
} 