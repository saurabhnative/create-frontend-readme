/**
 * Component to take input for Sheilds io badges URL
 */
import React, { useState, useContext, useEffect } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import PopUpComponent from "../popupComponent";
import { INFO_POPUP_CONTSTANTS } from "../../constants/utils";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { MarkdownContext } from "../LeftSectionAdvancedComponent";
import { getFormValue } from "../../utils/formGeneration";

export default function ShieldsIoComponent(props) {
  const [isInfoPopUpOpen, updateInfoPopUpVisibility] = useState(false);
  const [badgeURLs, updatebadgeURLS] = useState([]);
  const { formContentJSONArray } = useContext(MarkdownContext);
  useEffect(() => {
    if (formContentJSONArray.length > 0) {
      const value = getFormValue(formContentJSONArray, props.handlerParam);
      if (value) {
        updatebadgeURLS(value);
      }
    }
  }, []);
  function renderShieldsIOInfoPopUp() {
    if (isInfoPopUpOpen) {
      return (
        <PopUpComponent
          source={INFO_POPUP_CONTSTANTS.SHEILDS_IO_COMPONENT}
          updateInfoPopUpVisibility={updateInfoPopUpVisibility}
        />
      );
    }
  }
  function openShieldsIOWebsite() {
    window.open(`https://shields.io/`, "_blank", "noopener noreferrer");
  }
  function updateShieldsURL(tags) {
    updatebadgeURLS(tags);
    props.formHandlerFunction(props.handlerParam, tags);
  }
  return (
    <div className="flex flex-col items-start mt-2">
      <div className="flex items-center">
        <div className="flex items-center">
          <label htmlFor="project-description">Shields</label>
          <div
            className="cursor-pointer"
            onClick={() => updateInfoPopUpVisibility(true)}
          >
            <IoMdInformationCircleOutline className="ml-1" />
          </div>
          <div>{renderShieldsIOInfoPopUp()}</div>
        </div>
        <div className="ml-5">
          <button
            className="bg-indigo-800 text-white px-3 py-1 rounded"
            onClick={() => openShieldsIOWebsite()}
          >
            Generate Sheilds
          </button>
        </div>
      </div>
      <div className="my-2">
        <TagsInput
          value={badgeURLs}
          onChange={updateShieldsURL}
          addKeys={[9, 13, 188]}
          inputProps={{
            placeholder: "Enter a badge URL and press enter",
          }}
        />
      </div>
    </div>
  );
}
