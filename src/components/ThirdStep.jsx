import React, { useContext, useState } from "react";
import "../styles/style.scss";
import MultiStepContext from "../context/MultiStepContext";
import { Form, Button } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import {
  CREATE_WORKSPACE,
  SELF_DETAILS,
  SELF_TITLE,
  TEAM_DETAILS,
  TEAM_TITLE,
  THIRD_PAGE_SUB_TITLE,
  THIRD_PAGE_TITLE,
} from "../utils/constants";

const ThirdStep = () => {
  const { next } = useContext(MultiStepContext);

  const [useEdenType, setuseEdenType] = useState("myself");

  const onSubmit = () => {
    next();
  };

  const changeMyselfDecision = () => {
    setuseEdenType("myself");
  };

  const changeTeamDecison = () => {
    setuseEdenType("team");
  };

  return (
    <div className="step-main-container">
      <h1 className="title-text">{THIRD_PAGE_TITLE}</h1>
      <h4 className="subtitle-text">{THIRD_PAGE_SUB_TITLE}</h4>

      <Form
        layout="vertical"
        className="custom-center-form"
        onFinish={onSubmit}
      >
        <div className="decision-group">
          <div
            className={
              useEdenType === "myself" ? "decision-sec active" : "decision-sec"
            }
            onClick={changeMyselfDecision}
          >
            <UserOutlined
              className={useEdenType === "myself" ? "icon active" : "icon"}
            />
            <label>{SELF_TITLE}</label>
            <p>{SELF_DETAILS}</p>
          </div>
          <div
            className={
              useEdenType === "team" ? "decision-sec active" : "decision-sec"
            }
            onClick={changeTeamDecison}
          >
            <TeamOutlined
              className={useEdenType === "team" ? "icon active" : "icon"}
            />
            <label>{TEAM_TITLE}</label>
            <p>{TEAM_DETAILS}</p>
          </div>
        </div>
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

export default ThirdStep;
