/**
 * Component to take input for Sheilds io badges URL
 */
import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import PopUpComponent from "../popupComponent";
import { INFO_POPUP_CONTSTANTS } from "../../constants/utils";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
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
  function updateFeaturesData(features) {
    updateFeaturesList(features);
    props.formHandlerFunction(props.handlerParam, features);
  }
  return (
    <div className="flex flex-col items-start mt-2">
      <div className="flex items-center">
        <div className="flex items-center">
          <label htmlFor="project-description">Features</label>
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
            placeholder: "Add a feature and press Enter",
          }}
        />
      </div>
    </div>
  );
}
