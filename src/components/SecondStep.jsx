import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import "../styles/style.scss";
import MultiStepContext from "../context/MultiStepContext";

const SecondStep = () => {
  const { workDetails, setWorkDetails, next } = useContext(MultiStepContext);

  const onSubmit = (values) => {
    setWorkDetails(values);
    next();
  };

  return (
    <div className="step-main-container">
      <h1 className="title-text">Let's set up a home for all your work</h1>
      <h4 className="subtitle-text">You can always change them later</h4>

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

export default SecondStep;
