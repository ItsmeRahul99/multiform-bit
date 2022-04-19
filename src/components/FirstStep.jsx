import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import "../styles/style.scss";
import MultiStepContext from "../context/MultiStepContext";

const FirstStep = () => {
  const { nameDetails, setNameDetails, next } = useContext(MultiStepContext);

  const onSubmit = (values) => {
    setNameDetails(values);
    next();
  };

  return (
    <div className="step-main-container">
      <h1 className="title-text">Welcome! First things first...</h1>
      <h4 className="subtitle-text">You can always change them later</h4>

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
          Create Workspace
        </Button>
      </Form>
    </div>
  );
};

export default FirstStep;
