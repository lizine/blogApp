import axios from 'axios';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=placehoderApiKey123';

/*lets store action type strings into variables we can
export */
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchBlogPosts (){
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

  return {
    type : FETCH_POSTS,
    payload: request
  };
};

export function createPost(props){
  const request = axios.post(`${BASE_URL}/posts${API_KEY}`, props);
  return {
    type : CREATE_POST,
    payload: request
  };
}
export function fetchSinglePost(id) {
  const request = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_SINGLE_POST,
    payload: request
  };
}
export function deletePost(id){
  const request = axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}
