import React from "react";
import ReactTooltip from "react-tooltip";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function SocialifyInputComponent(props) {
  function openSocialifyWebsite() {
    window.open(`https://socialify.git.ci/`, "_blank", "noopener noreferrer");
  }
  function renderSocialifyTooltip() {
    return `
          <span>
              Socialify helps you showcase your project to the world by generating a beautiful project image. 
              You can open Socialify website by clicking the <b>Generate Image</b> button.
              Copy the URL generated from the website and paste it below.
          </span>
        `;
  }
  return (
    <>
      <div className="flex items-center justify-start">
        <label htmlFor="socialify-image-url">Socialify Image URL</label>
        <div data-tip={`${renderSocialifyTooltip()}`} data-place="top">
          <IoMdInformationCircleOutline className="ml-1" />
        </div>
        <ReactTooltip
          place="top"
          type="light"
          html={true}
          className="info-tooltip"
        />
        <div className="ml-2">
          <button
            className="bg-indigo-800 text-white px-3 py-1 rounded"
            onClick={() => openSocialifyWebsite()}
          >
            Generate Image
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
