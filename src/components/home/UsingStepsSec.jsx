import React from "react";
import folder from "../assets/icons/folder-icon.svg";
import category from "../assets/icons/category-icon.svg";
import card from "../assets/icons/card-icon.svg";
import StepCard from "./StepCard";

const UsingStepsSec = () => (
  <div className="sec-alignment wrapper-contnet using-steps">
    <div className="container">
      <h3 className="h1 text-center">How to use Linko</h3>
      <div className="steps">
        <div className="row">
          <StepCard icon={folder} name="create Folder" step="1" />
          <StepCard icon={category} name="Add category" step="2" />
          <StepCard icon={card} name="Add vocabulary" step="3" />
        </div>
      </div>
    </div>
  </div>
);

export default UsingStepsSec;
