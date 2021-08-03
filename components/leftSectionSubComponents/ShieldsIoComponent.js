import React from "react";
import ReactTooltip from "react-tooltip";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function ShieldsIoComponent(props) {
  function renderShieldsIOTooltip() {
    return `
          <span>
              Shields.io is a service for generating SVG badges related to files,
              licensing and other information which can easily be included in GitHub
              README. You can open shields io website by clicking the <b>Generate Sheilds</b> button.
              Copy the URLs generated from the badges and paste them below in comma separated manner.
          </span>
        `;
  }
  function openShieldsIOWebsite() {
    window.open(`https://shields.io/`, "_blank", "noopener noreferrer");
  }
  return (
    <div className="flex flex-col items-start mt-4">
      <div className="flex items-center">
        <div className="flex items-center">
          <label htmlFor="project-description">Shields</label>
          <div data-tip={`${renderShieldsIOTooltip()}`} data-place="top">
            <IoMdInformationCircleOutline className="ml-1" />
          </div>
          <ReactTooltip
            place="top"
            type="light"
            html={true}
            className="info-tooltip"
          />
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
      <textarea
        type="text"
        id="project-description"
        className="border rounded mt-2 py-1 px-2 h-32 w-56"
        placeholder="Enter shield badge URLs for your projects"
        onChange={(e) =>
          props.formHandlerFunction(props.handlerParam, e.target.value)
        }
      />
    </div>
  );
}
