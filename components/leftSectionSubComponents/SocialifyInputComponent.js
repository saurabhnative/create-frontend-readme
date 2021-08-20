/**
 * Component to take input for Socialify project image URL
 */
import React, { useState, useContext, useEffect } from "react";
import { IoMdInformationCircleOutline, IoMdOpen } from "react-icons/io";
import PopUpComponent from "../popupComponent";

import { INFO_POPUP_CONTSTANTS } from "../../constants/utils";
import { MarkdownContext } from "../LeftSectionAdvancedComponent";
import { getFormValue } from "../../utils/formGeneration";

export default function SocialifyInputComponent(props) {
  const [isInfoPopUpOpen, updateInfoPopUpVisibility] = useState(false);
  const { formContentJSONArray } = useContext(MarkdownContext);
  const [inputValue, updateInputValue] = useState("");
  useEffect(() => {
    if (formContentJSONArray.length > 0) {
      const value = getFormValue(formContentJSONArray, props.handlerParam);
      if (value) {
        updateInputValue(value);
      }
    }
  }, []);
  function handleInputUpdate(value) {
    updateInputValue(value);
    props.formHandlerFunction(props.handlerParam, value);
  }
  function openSocialifyWebsite() {
    window.open(`https://socialify.git.ci/`, "_blank", "noopener noreferrer");
  }
  function renderSocialifyInfoPopUp() {
    if (isInfoPopUpOpen) {
      return (
        <PopUpComponent
          source={INFO_POPUP_CONTSTANTS.SOCIALIFY_COMPONENT}
          updateInfoPopUpVisibility={updateInfoPopUpVisibility}
        />
      );
    }
  }
  return (
    <>
      <div className="flex items-center justify-start">
        <label htmlFor="socialify-image-url">Socialify Image URL</label>
        <div onClick={() => updateInfoPopUpVisibility(true)}>
          <IoMdInformationCircleOutline className="ml-1 cursor-pointer" />
        </div>
        <div>{renderSocialifyInfoPopUp()}</div>
        <div className="ml-2">
          <button
            className="bg-indigo-800 text-white px-2 rounded flex items-center link-button"
            onClick={() => openSocialifyWebsite()}
          >
            <span className="text-sm">Open Socialify</span>
            <IoMdOpen />
          </button>
        </div>
      </div>
      <div className="flex justify-start">
        <input
          type="text"
          id="project-image-url"
          className="border rounded mt-2 py-1 px-2 w-56"
          placeholder="Enter URL for project image"
          value={inputValue}
          onChange={(e) => handleInputUpdate(e.target.value)}
        />
      </div>
    </>
  );
}
