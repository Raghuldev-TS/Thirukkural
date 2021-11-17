import {
  FETCH_ALL_BLOG, FETCH_BLOG_ID, FETCH_BLOG_START, DELETE_BLOG, FETCH_BLOG_BY_USER_ID,
  CREATE_NEW_BLOG, FETCH_THIRUKKURAL_BY_NUMBER, FETCH_THIRUKKURAL_START
} from "../actions/actionTypes";

const initialState = {
  allBlogs: [],
  specificBlog: {},
  loader: true,
  userIds: [],
  status: "",
  kural: {}
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_BLOG:
      return {
        ...state,
        allBlogs: payload.allBlogs,
        loader: payload.loader,
        userIds: payload.userIds
      };
    case FETCH_BLOG_ID:
      return {
        ...state,
        specificBlog: payload.post,
        loader: payload.loader
      };
    case FETCH_BLOG_START:
      return {
        ...state,
        loader: true
      };
    case FETCH_THIRUKKURAL_START:
      return {
        ...state,
        loader: true
      };
    case DELETE_BLOG:
      const updatedList = state.allBlogs.filter((blog) => blog.id !== payload.id);
      return {
        ...state,
        allBlogs: updatedList
      };
    case FETCH_BLOG_BY_USER_ID:
      return {
        ...state,
        allBlogs: payload
      };
    case CREATE_NEW_BLOG:
      return {
        ...state,
        allBlogs: [...state.allBlogs, payload.blog],
        status: payload.status
      };
    case FETCH_THIRUKKURAL_BY_NUMBER:
      return {
        ...state,
        kural: payload.kural,
        loader: false
      };
    default:
      return state;
  }
};

export default blogReducer;
