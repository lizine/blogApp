import { combineReducers } from 'redux';
import reducerPosts from './reducer_posts';

const rootReducer = combineReducers({
  posts : reducerPosts
});

export default rootReducer;
