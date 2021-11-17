import React, { useEffect, useState } from "react";
import { Card, Button, Spin } from "antd";
import { Link } from "react-router-dom";

const Blog = ({ blogs, loader, deleteBlog, userIds, fetchBlogByUserId, fetchAllBlog }) => {
    return <div className="App">
        {loader ? <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }} className="example">
            <Spin size="large" />
        </div> :
            <>
                <div className="cardButton">
                    <Button onClick={() => fetchAllBlog()} type="primary">All</Button>
                    {userIds?.map(userId => <Button type="primary" onClick={() => fetchBlogByUserId(userId)}>{userId}</Button>)}
                </div>
                <div className="cardGrid">
                    {blogs?.map((blog) => {
                        return <div className="site-card-border-less-wrapper">
                            <Card title={<h4>{blog.title}</h4>}>
                                <p>{blog.body}</p>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Link to={"/post/" + blog.id}>
                                        <Button type="primary">View</Button>
                                    </Link>
                                    <Button type="primary" onClick={() => deleteBlog(blog.id)}>Delete</Button>
                                </div>
                            </Card>
                        </div>;
                    })}
                </div>
            </>}
    </div>;
};

export default Blog;