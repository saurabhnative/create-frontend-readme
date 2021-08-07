import React, { useState } from "react";
import Collapsible from "react-collapsible";

// components
import RenderTextInput from "./leftSectionSubComponents/TextInput";
import SocialifyInputComponent from "./leftSectionSubComponents/SocialifyInputComponent";

// utility functions
import generateBasicMarkDownData from "../utils/basicMarkdownGeneration";
import { updateFormObject } from "../utils/formGeneration";

export default function LeftSectionAdvancedComponent({ updateReadmeContent }) {
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
  function renderSocialifyInput() {
    return (
      <SocialifyInputComponent
        formHandlerFunction={updateFormData}
        handlerParam="socialifyImage"
      />
    );
  }
  return (
    <div className="w-1/2">
      <nav className="w-full flex justify-start border-b">
        <div className="border border-indigo-200 px-5 py-2 w-56 text-indigo-800">
          Form
        </div>
      </nav>
      <div className="w-full text-indigo-800">
        <Collapsible
          trigger="Step 1: Add title, description and socialify image(optional)"
          open={true}
        >
          <div className="flex">
            <div className="px-6">
              {renderTitleInput()}
              {renderDescriptionInput()}
            </div>
            <div>{renderSocialifyInput()}</div>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}
