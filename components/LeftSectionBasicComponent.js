/**
 * Parent level component for taking inputs for basic version
 * of README generation
 */
import React, { useState } from "react";
import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.
// components
import RenderTextInput from "./leftSectionSubComponents/TextInput";
import ShieldsIoComponent from "./leftSectionSubComponents/ShieldsIoComponent";
import SocialifyInputComponent from "./leftSectionSubComponents/SocialifyInputComponent";

// utility functions
import generateBasicMarkDownData from "../utils/basicMarkdownGeneration";
import { updateFormObject } from "../utils/formGeneration";

export default function LeftSectionComponent({ updateReadmeContent }) {
  const [formContentJSONArray, updateFormContentObject] = useState([]);
  function genUpdatedMarkDownData(sourceObject) {
    const markDownData = generateBasicMarkDownData(sourceObject);
    updateReadmeContent(markDownData);
  }
  function updateFormData(key, value) {
    const tempArray = updateFormObject(formContentJSONArray, key, value);
    updateFormContentObject(tempArray);
    genUpdatedMarkDownData(tempArray);
  }
  function renderTitleInput() {
    return (
      <RenderTextInput
        labelName="Project Title"
        id="project-title"
        placeholder="Enter project title"
        formHandlerFunction={updateFormData}
        handlerParam="title"
        inputType="input"
      />
    );
  }
  function renderDescriptionInput() {
    return (
      <RenderTextInput
        labelName="Description"
        id="project-description"
        placeholder="Enter project description"
        formHandlerFunction={updateFormData}
        handlerParam="description"
        inputType="textarea"
        optionalParentClass="mt-4"
      />
    );
  }
  function renderProjectDemoURLInput() {
    return (
      <RenderTextInput
        labelName="Project Demo URL"
        id="project-demo-url"
        placeholder="Enter project demo URL"
        formHandlerFunction={updateFormData}
        handlerParam="projectDemo"
        inputType="input"
        optionalParentClass="mt-4"
      />
    );
  }
  function renderSheildsIOInput() {
    return (
      <ShieldsIoComponent
        formHandlerFunction={updateFormData}
        handlerParam="shieldsData"
      />
    );
  }
  function renderSocialifyInput() {
    return (
      <SocialifyInputComponent
        formHandlerFunction={updateFormData}
        handlerParam="socialifyImage"
      />
    );
  }
  function renderProjectScreenShotInput() {
    return (
      <RenderTextInput
        labelName="Enter project screenshot"
        id="project-screenshot"
        placeholder="Enter image URL"
        formHandlerFunction={updateFormData}
        handlerParam="projectScreenshots"
        inputType="input"
        optionalParentClass="mt-4"
      />
    );
  }
  return (
    <div className="w-1/2">
      <nav className="w-full flex justify-start border-b">
        <div className="border border-indigo-200 px-5 py-2 w-56">Form</div>
      </nav>
      <div className="flex">
        <div className="w-1/2 h-5/6 pl-6 py-2">
          {renderTitleInput()}
          {renderDescriptionInput()}
          {renderSheildsIOInput()}
          {renderProjectDemoURLInput()}
        </div>
        <div className="w-1/2 h-5/6 px-2 py-2 justify-start">
          {renderSocialifyInput()}
          {renderProjectScreenShotInput()}
        </div>
      </div>
    </div>
  );
}
