/**
 * Component to take input for Socialify project image URL
 */
import React, { useState } from "react";
import { IoMdInformationCircleOutline, IoMdOpen } from "react-icons/io";
import PopUpComponent from "../popupComponent";

import { INFO_POPUP_CONTSTANTS } from "../../constants/utils";
export default function SocialifyInputComponent(props) {
  const [isInfoPopUpOpen, updateInfoPopUpVisibility] = useState(false);
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
          onChange={(e) =>
            props.formHandlerFunction(props.handlerParam, e.target.value)
          }
        />
      </div>
    </>
  );
}
