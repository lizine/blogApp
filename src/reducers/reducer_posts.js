import { FETCH_POSTS } from '../actions/index';

/*state consist of array of blogposts, and object of active post
blog api doesn't give content to all posts list, just
when fetching a post with id.. */
const INITIAL_STATE = { all: [], post: null };
export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all:action.payload.data };
    default:
    return state;
  }
}
