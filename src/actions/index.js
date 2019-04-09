import { CREATE_POST, DELETE_POST } from './types';

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
    }
}