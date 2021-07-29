import React, { useState } from "react";
import { README_ELEMENTS_ORDER } from "../constants/utils";
import sortBy from "lodash/sortBy";
import find from "lodash/find";
import findIndex from "lodash/findIndex";
import ReactTooltip from "react-tooltip";
import { IoMdInformationCircleOutline } from "react-icons/io";
export default function LeftSectionComponent({ updateReadmeContent }) {
  const [formContentJSONArray, updateFormContentObject] = useState([]);
  function genUpdatedMarkDownData(sourceObject) {
    const markdownData = [];
    console.log("sourceObject", sourceObject);
    const sortedSourceObject = sortBy(sourceObject, [
      function (o) {
        return o.index;
      },
    ]);
    console.log("sortedSource", sortedSourceObject);
    sortedSourceObject.forEach(function (sourceObject) {
      console.log("sourceObject", sourceObject);
      const value = sourceObject.value;
      const key = sourceObject.element;
      if (key === "title") {
        markdownData.push(`<h1>${value}</h1>`);
      } else if (key === "description") {
        markdownData.push(`<p>${value}</p>`);
      } else if (key === "socialifyImage") {
        markdownData.push(
          `<p align="center"><img src="${value}" alt="project"/></p>`
        );
      } else if (key === "shieldsData") {
        const shieldsArray = value.split(",");
        let imgString = "";
        shieldsArray.map((shieldImageUrl) => {
          if (shieldImageUrl.length > 1) {
            imgString = imgString.concat(
              `<img src="${shieldImageUrl}" alt="shields"/>`
            );
          }
        });
        markdownData.push(`<p align="center">
        ${imgString}
        </p>`);
      } else if (key === "projectDemo") {
        markdownData.push(`
        <div>
          <h2>Project Demo</h2>
          <a href="${value}" alt="vale">${value}</a>
        </div>`);
      } else if (key === "projectScreenshots") {
        markdownData.push(
          `<div>
              <h2>Project screenshot</h2>
              <p align="center"><img src="${value}" alt="shields"/></p>
           </div>`
        );
      }
    });
    updateReadmeContent(markdownData);
  }
  function updateFormData(key, value) {
    const tempArray = formContentJSONArray;
    if (!find(tempArray, { element: key })) {
      const tempObject = {};
      tempObject.value = value;
      tempObject.index = README_ELEMENTS_ORDER[key];
      tempObject.element = key;
      tempArray.push(tempObject);
    } else {
      const index = findIndex(tempArray, { element: key });
      tempArray[index].value = value;
    }
    updateFormContentObject(tempArray);
    genUpdatedMarkDownData(tempArray);
  }
  function openSocialifyWebsite() {
    window.open(`https://socialify.git.ci/`, "_blank", "noopener noreferrer");
  }
  function openShieldsIOWebsite() {
    window.open(`https://shields.io/`, "_blank", "noopener noreferrer");
  }
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
    <div className="w-1/2">
      <nav className="w-full flex justify-start border-b">
        <div className="border border-indigo-200 px-5 py-2 w-56">Form</div>
      </nav>
      <div className="flex">
        <div className="w-1/2 h-5/6 pl-6 py-2">
          <div className="flex flex-col items-start">
            <label htmlFor="project-title">Title</label>
            <input
              type="text"
              id="project-title"
              className="border rounded mt-2 py-1 px-2 w-56"
              placeholder="Enter project title"
              onChange={(e) => updateFormData("title", e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <label htmlFor="project-description">Description</label>
            <textarea
              type="text"
              id="project-description"
              className="border rounded mt-2 py-1 px-2 h-32 w-56"
              placeholder="Enter project description"
              onChange={(e) => updateFormData("description", e.target.value)}
            />
          </div>
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
              onChange={(e) => updateFormData("shieldsData", e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <label htmlFor="project-demo-url">Project Demo URL</label>
            <input
              type="text"
              id="project-demo-url"
              className="border rounded mt-2 py-1 px-2 w-56"
              placeholder="Enter project demo URL"
              onChange={(e) => updateFormData("projectDemo", e.target.value)}
            />
          </div>
        </div>
        <div className="w-1/2 h-5/6 px-2 py-2 justify-start">
          <div className="flex items-center">
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
            <div className="ml-5">
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
              onChange={(e) => updateFormData("socialifyImage", e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <label htmlFor="project-screenshot">Enter project screenshot</label>
            <div className="flex items-center mt-2">
              <div>
                <input
                  type="text"
                  id="project-screenshot"
                  className="border rounded py-1 px-2 w-56"
                  placeholder="Enter image URL"
                  onChange={(e) =>
                    updateFormData("projectScreenshots", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
