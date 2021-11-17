import "./styles.css";
import React, { useEffect } from "react";
import {
  fetchAllBlog, fetchBlogById, deleteBlog, fetchBlogByUserId,
  createNewBlog, fetchThirukkural
} from "./actions/blogAction";
import { connect } from "react-redux";
import Blog from "./Blog";
import SingleBlog from "./SingleBlog";
import CreateBlog from "./CreateBlog";
import Thirukkural from "./tirukkural";
import 'antd/dist/antd.css';
import { Route, Routes } from "react-router";

const App = ({ blogs,
  fetchAllBlog, specificBlog,
  fetchBlogById, loader, deleteBlog,
  userIds, fetchBlogByUserId, createNewBlog, status, kural, fetchThirukkural }) => {
  useEffect(() => {
    fetchAllBlog();
  }, []);
  return (
    <Routes>
      <Route path="/" exact element={
        <CreateBlog
          createNewBlog={createNewBlog}
          status={status}
        />
      } />
      <Route path="/post" exact element={
        <Blog
          loader={loader}
          userIds={userIds}
          deleteBlog={deleteBlog}
          fetchAllBlog={fetchAllBlog}
          fetchBlogById={fetchBlogById}
          blogs={blogs}
          fetchBlogByUserId={fetchBlogByUserId}
          fetchAllBlog={fetchAllBlog}
        />
      }
      />
      <Route path="/post/:slug" element={
        <SingleBlog
          loader={loader}
          fetchBlog={fetchBlogById}
          post={specificBlog}
        />}
      />
      <Route path="/thirukural" element={
        <Thirukkural
          fetchThirukkural={fetchThirukkural}
          kural={kural}
          loader={loader}
        />
      } />
    </Routes>
  );
};
const mapStateToProps = (state) => {
  return {
    blogs: state.blogs.allBlogs,
    specificBlog: state.blogs.specificBlog,
    loader: state.blogs.loader,
    userIds: state.blogs.userIds,
    status: state.blogs.status,
    kural: state.blogs.kural
  };
};

const mapDispatchToProps = {
  fetchAllBlog,
  fetchBlogById,
  deleteBlog,
  fetchBlogByUserId,
  createNewBlog,
  fetchThirukkural
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
