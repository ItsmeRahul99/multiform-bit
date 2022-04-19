import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import "../styles/style.scss";
import MultiStepContext from "../context/MultiStepContext";
import {
  CREATE_WORKSPACE,
  SECOND_PAGE_SUB_TITLE,
  SECOND_PAGE_TITLE,
} from "../utils/constants";

const SecondStep = () => {
  const { workDetails, setWorkDetails, next } = useContext(MultiStepContext);

  const onSubmit = (values) => {
    setWorkDetails(values);
    next();
  };

  return (
    <div className="step-main-container">
      <h1 className="title-text">{SECOND_PAGE_TITLE}</h1>
      <h4 className="subtitle-text">{SECOND_PAGE_SUB_TITLE}</h4>

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
          <Input addonBefore="www.ede.com/" placeholder="Example" />
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

export default SecondStep;
