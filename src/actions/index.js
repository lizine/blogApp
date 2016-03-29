import axios from 'axios';

const API_KEY = 'placehoderApiKey123';
const baseUrl = `http://reduxblog.herokuapp.com/api/posts?key=${API_KEY}`;

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchBlogPosts (){
  var request = axios.get(baseUrl);

  return {
    type : FETCH_POSTS,
    payload: request
  };
}
