import React, { useContext } from "react";
import "../styles/style.scss";
import MultiStepContext from "../context/MultiStepContext";
import { Form, Input, Button } from "antd";

const ThirdStep = () => {
  const { workDetails, setWorkDetails, next } = useContext(MultiStepContext);

  const onSubmit = (values) => {
    setWorkDetails(values);
    next();
  };

  return (
    <div className="step-main-container">
      <h1 className="title-text">How are you planning to use Eden?</h1>
      <h4 className="subtitle-text">
        We'll streamline your setup experince accordingly
      </h4>

      <Form
        layout="vertical"
        className="custom-center-form"
        onFinish={onSubmit}
        initialValues={workDetails}
      >
        <Form.Item
          label="Workspace Name"
          name="workSpaceName"
          rules={[{ required: true }]}
        >
          <Input placeholder="Eden" />
        </Form.Item>
        <Form.Item label="Workspace URL (optional)" name="workSpaceURL">
          <Input addonBefore="www.ede.com/" defaultValue="Example" />
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

export default ThirdStep;
