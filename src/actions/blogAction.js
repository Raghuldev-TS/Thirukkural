import {
  FETCH_ALL_BLOG, FETCH_BLOG_ID, FETCH_BLOG_START, DELETE_BLOG,
  FETCH_BLOG_BY_USER_ID, CREATE_NEW_BLOG, FETCH_THIRUKKURAL_BY_NUMBER, FETCH_THIRUKKURAL_START
} from "./actionTypes";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com";

export const fetchAllBlog = () => async (dispatch) => {
  dispatch({
    type: FETCH_BLOG_START,
  });
  await axios.get(`${apiUrl}/posts`)
    .then((res) => {
      dispatch({
        type: FETCH_ALL_BLOG,
        payload: {
          allBlogs: res.data,
          loader: false,
          userIds: [...new Set(res.data.map(blog => blog.userId))]
        }
      });
    }).catch((e) => console.log("error", e));
};

export const fetchBlogById = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_BLOG_START,
  });
  await axios.get(`${apiUrl}/posts/${id}`)
    .then((res) => {
      dispatch({
        type: FETCH_BLOG_ID,
        payload: {
          post: res.data,
          loader: false
        }
      });
    }).catch((e) => console.log(e));
};

export const deleteBlog = (id) => async (dispatch) => {
  await axios.get(`${apiUrl}/posts/${id}`, {
    method: 'DELETE'
  }).then((res) => {
    dispatch({
      type: DELETE_BLOG,
      payload: res.data
    });
  });
};

export const fetchBlogByUserId = (id) => async (dispatch) => {
  await axios.get(`${apiUrl}/posts?userId=${id}`)
    .then((res) => {
      dispatch({
        type: FETCH_BLOG_BY_USER_ID,
        payload: res.data
      });
    });
};

export const createNewBlog = (values) => async (dispatch) => {
  await axios.post(`${apiUrl}/posts`, values,
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then((res) => {
      console.log(res);
      dispatch({
        type: CREATE_NEW_BLOG,
        payload: res
      });
    });
};

export const fetchThirukkural = (number) => async (dispatch) => {
  dispatch({
    type: FETCH_THIRUKKURAL_START
  });
  await axios.get(`https://api-thirukkural.vercel.app/api?num=${number}`)
    .then((res) => {
      console.log(res, number);
      dispatch({
        type: FETCH_THIRUKKURAL_BY_NUMBER,
        payload: {
          kural: res.data,
          loader: false
        }
      });
    });
};