/**
 * Component to take input for Sheilds io badges URL
 */
import React, { useState, useContext, useEffect } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import PopUpComponent from "../popupComponent/InfoPopUp";
import { INFO_POPUP_CONTSTANTS } from "../../constants/utils";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { MarkdownContext } from "../LeftSectionAdvancedComponent";
import { getFormValue } from "../../utils/formGeneration";

export default function FeaturesComponent(props) {
  const [isInfoPopUpOpen, updateInfoPopUpVisibility] = useState(false);
  const [featuresList, updateFeaturesList] = useState([]);
  function renderFeaturesInfoPopUp() {
    if (isInfoPopUpOpen) {
      return (
        <PopUpComponent
          source={INFO_POPUP_CONTSTANTS.FEATURES_COMPONENT}
          updateInfoPopUpVisibility={updateInfoPopUpVisibility}
        />
      );
    }
  }
  const { formContentJSONArray } = useContext(MarkdownContext);
  useEffect(() => {
    if (formContentJSONArray.length > 0) {
      const value = getFormValue(formContentJSONArray, props.handlerParam);
      if (value) {
        updateFeaturesList(value);
      }
    }
  }, []);
  function updateFeaturesData(features) {
    updateFeaturesList(features);
    props.formHandlerFunction(props.handlerParam, features);
  }
  return (
    <div className="flex flex-col items-start mt-2">
      <div className="flex items-center">
        <div className="flex items-center">
          <label htmlFor="project-description">{props.labelName}</label>
          <div
            className="cursor-pointer"
            onClick={() => updateInfoPopUpVisibility(true)}
          >
            <IoMdInformationCircleOutline className="ml-1" />
          </div>
          <div>{renderFeaturesInfoPopUp()}</div>
        </div>
      </div>
      <div className="my-2">
        <TagsInput
          value={featuresList}
          onChange={updateFeaturesData}
          addKeys={[9, 13]}
          inputProps={{
            placeholder: `Add a ${props.placeHolderValue} and press Enter`,
          }}
        />
      </div>
    </div>
  );
}
