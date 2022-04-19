import React, { useState } from "react";
import { Steps } from "antd";
import "./Multi-Form.scss";
import { Provider } from "../../context/MultiStepContext";
import FirstStep from "../../components/FirstStep";
import SecondStep from "../../components/SecondStep";
import ThirdStep from "../../components/ThirdStep";
import FourthStep from "../../components/FourthStep";
import AppIcon from "../../assests/icons/app-icon.png";

const { Step } = Steps;

const firstStepState = {
  fullName: "",
  displayName: "",
};
const secondStepState = {
  workSpaceName: "",
  workSpaceURL: "",
};
const thirdStepState = {
  useEdenOptionSelected: "",
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <FirstStep />;
    case 1:
      return <SecondStep />;
    case 2:
      return <ThirdStep />;
    case 3:
      return <FourthStep />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [nameDetails, setNameDetails] = useState(firstStepState);
  const [workDetails, setWorkDetails] = useState(secondStepState);
  const [useEdenDetails, setUseEdenDetails] = useState(thirdStepState);
  const [finalPreview, setfinalPreview] = useState();
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setNameDetails(firstStepState);
      setWorkDetails(secondStepState);
      setUseEdenDetails(thirdStepState);
      setfinalPreview();
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <Provider
      value={{
        nameDetails,
        setNameDetails,
        next,
        prev,
        workDetails,
        setWorkDetails,
        useEdenDetails,
        setUseEdenDetails,
      }}
    >
      <div className="main-container">
        <img src={AppIcon} className="app-icon" alt="logo" />

        <Steps
          direction="horizontal"
          current={currentStep}
          className="step-class"
        >
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
        <main>{renderStep(currentStep)}</main>
      </div>
    </Provider>
  );
};
export default MultiStepForm;
