import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Layout, Spin } from 'antd';
const { Content } = Layout;

const SingleBlog = ({ post, loader, fetchBlog }) => {
    const { slug } = useParams();
    useEffect(() => {
        fetchBlog(slug);
    }, []);
    return (
        <>
            {loader ? <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }} className="example">
                <Spin size="large" />
            </div> :
                <Layout>
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <p>{post.body}</p>
                            <p>{post.body}</p>
                            <p>{post.body}</p>
                            <p>{post.body}</p>
                            <p>{post.body}</p>
                            <p>{post.body}</p>

                        </div>
                    </Content>
                </Layout>}
        </>
    );
};

export default SingleBlog;