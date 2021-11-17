import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Layout, Alert } from 'antd';
const { Header, Content, Footer } = Layout;

const CreateBlog = ({ createNewBlog, status }) => {

    const onFinish = (values) => {
        createNewBlog(values);
        console.log('Success:', values);

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Body"
                        name="body"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        label="UserId"
                        name="userId"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                {status === 201 && <Alert message="Success Text" type="success" />}
            </Content>
        </Layout>
    );
};

export default CreateBlog;