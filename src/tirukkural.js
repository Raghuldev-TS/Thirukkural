import React from "react";
import { Form, Input, Button, Descriptions, Badge, Spin } from 'antd';

const Thirukkural = ({ kural, fetchThirukkural, loader }) => {
    const onFinish = (values) => {
        console.log('Success:', values);
        fetchThirukkural(values.kural);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    console.log(kural);
    return (
        <div className="thirukuralContainer">
            <h1 style={{ textAlign: "center" }}>Thirukural</h1>
            <Form
                name="basic"
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Enter Thirukural Number"
                    name="kural"
                    rules={[{ required: true, message: 'Please input the kural number!' }]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item style={{ justifyContent: "center", textAlign: "center" }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <br />
            {loader ? <div style={{ display: "flex", height: "50vh", alignItems: "center", justifyContent: "center" }} className="example">
                <Spin />
            </div> :
                <div className="kural_details">
                    {kural // 👈 null and undefined check
                        && Object.keys(kural).length === 0
                        && Object.getPrototypeOf(kural) === Object.prototype ? null :
                        <Descriptions title="Thirukural Details" bordered>
                            <Descriptions.Item label="Tamil Section">{kural.sect_tam}</Descriptions.Item>
                            <Descriptions.Item label="Tamil Chapter Group">{kural.chapgrp_tam}</Descriptions.Item>
                            <Descriptions.Item label="Tamil Chapter">{kural.chap_tam}</Descriptions.Item>
                            <Descriptions.Item label="Tamil Number">{kural.number}</Descriptions.Item>
                            <Descriptions.Item label="Tamil Poem" span={2}>
                                <b>{kural.line1}<br />
                                    {kural.line2}</b>
                            </Descriptions.Item>
                            <Descriptions.Item label="Tamil Explaination" span={3}>
                                <b>{kural.tam_exp}</b>
                            </Descriptions.Item>
                            <Descriptions.Item label="English Section">{kural.sect_eng}</Descriptions.Item>
                            <Descriptions.Item label="English Chapter Group">{kural.chapgrp_eng}</Descriptions.Item>
                            <Descriptions.Item label="English Chapter">{kural.chap_eng}</Descriptions.Item>
                            <Descriptions.Item label="English Number">{kural.number}</Descriptions.Item>
                            <Descriptions.Item label="English Poem" span={2}>
                                <b>{kural.eng}</b>
                            </Descriptions.Item>
                            <Descriptions.Item label="English Explaination" span={3}>
                                <b>{kural.eng_exp}</b>
                            </Descriptions.Item>
                        </Descriptions>}
                </div>}
        </div>
    );
};

export default Thirukkural;