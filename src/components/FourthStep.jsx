import React, { useContext } from "react";
import MultiStepContext from "../context/MultiStepContext";
import { Form, Button } from "antd";
import { FOURTH_PAGE_SUB_TITLE, LAUNCH_EDEN } from "../utils/constants";

const FourthStep = () => {
  const { nameDetails, next } = useContext(MultiStepContext);

  const onSubmit = (values) => {
    next();
  };

  return (
    <div className="step-main-container">
      <span className="purple-circle">&#x1F5F8;</span>

      <h1 className="title-text">Congratulations, {nameDetails.fullName}</h1>
      <h4 className="subtitle-text">{FOURTH_PAGE_SUB_TITLE}</h4>
      <Form
        layout="vertical"
        className="custom-center-form"
        onFinish={onSubmit}
      >
        <Button
          type="primary"
          className="custom-purple-button"
          htmlType="submit"
        >
          {LAUNCH_EDEN}
        </Button>
      </Form>
    </div>
  );
};

export default FourthStep;
