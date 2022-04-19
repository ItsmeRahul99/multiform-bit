import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import "../styles/style.scss";
import MultiStepContext from "../context/MultiStepContext";
import {
  CREATE_WORKSPACE,
  FIRST_PAGE_SUB_TITLE,
  FIRST_PAGE_TITLE,
} from "../utils/constants";

const FirstStep = () => {
  const { nameDetails, setNameDetails, next } = useContext(MultiStepContext);

  const onSubmit = (values) => {
    setNameDetails(values);
    next();
  };

  return (
    <div className="step-main-container">
      <h1 className="title-text">{FIRST_PAGE_TITLE}</h1>
      <h4 className="subtitle-text">{FIRST_PAGE_SUB_TITLE}</h4>

      <Form
        layout="vertical"
        className="custom-center-form"
        onFinish={onSubmit}
        initialValues={nameDetails}
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true }]}
        >
          <Input placeholder="Steve jobs" />
        </Form.Item>

        <Form.Item
          label="Display Name"
          name="displayName"
          rules={[{ required: true }]}
        >
          <Input placeholder="Steve" />
        </Form.Item>

        <Button
          type="primary"
          className="custom-purple-button"
          htmlType="submit"
        >
          {CREATE_WORKSPACE}
        </Button>
      </Form>
    </div>
  );
};

export default FirstStep;
