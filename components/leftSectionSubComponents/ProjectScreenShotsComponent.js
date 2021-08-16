/**
 * Component to take input for Sheilds io badges URL
 */
import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
// import PopUpComponent from "../popupComponent";
// import { INFO_POPUP_CONTSTANTS } from "../../constants/utils";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
export default function ProjectScreenshotComponent(props) {
  //   const [isInfoPopUpOpen, updateInfoPopUpVisibility] = useState(false);
  const [projectScreenShots, updateProjectScreenShots] = useState([]);
  function updateScreenShotURLs(imageURLs) {
    updateProjectScreenShots(imageURLs);
    props.formHandlerFunction(props.handlerParam, imageURLs);
  }
  return (
    <div className="flex flex-col items-start mt-2">
      <div className="flex items-center">
        <div className="flex items-center">
          <label htmlFor="project-description">Project Screenshots</label>
          {/* <div
            className="cursor-pointer"
            onClick={() => updateInfoPopUpVisibility(true)}
          >
            <IoMdInformationCircleOutline className="ml-1" />
          </div>
          <div>{renderShieldsIOInfoPopUp()}</div> */}
        </div>
      </div>
      <div className="my-2">
        <TagsInput
          value={projectScreenShots}
          onChange={updateScreenShotURLs}
          addKeys={[9, 13, 188]}
          inputProps={{
            placeholder: "Enter a project screenshots",
          }}
        />
      </div>
    </div>
  );
}
