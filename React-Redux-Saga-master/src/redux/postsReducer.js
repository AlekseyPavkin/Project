import { CREATE_POST, FETCH_POSTS } from "./types";

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: state.posts.concat([action.payload]) }  // первый способ через concat
        case FETCH_POSTS:
            return { ...state, fetchedPosts: action.payload }  // второй способ
        default:
            return state;
    }
}