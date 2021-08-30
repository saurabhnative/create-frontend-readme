import React, { useState, createContext } from "react";
import Collapsible from "react-collapsible";
import classNames from "classnames";
// components
import RenderTextInput from "./leftSectionSubComponents/TextInput";
import ShieldsIoComponent from "./leftSectionSubComponents/ShieldsIoComponent";
import SocialifyInputComponent from "./leftSectionSubComponents/SocialifyInputComponent";
import FeaturesComponent from "./leftSectionSubComponents/FeaturesComponent";
import MultipleStepsComponent from "./leftSectionSubComponents/MultipleStepsComponent";
import SupportProjectComponent from "./leftSectionSubComponents/SupportProjectComponent";
import LeftSectionMarkDownComponent from "./leftSectionSubComponents/LeftSectionMarkDownComponent";
import RightSectionComponent from "./RightSectionComponent";
// utility functions
import generateBasicMarkDownData from "../utils/basicMarkdownGeneration";
import { updateFormObject } from "../utils/formGeneration";
// constants
import { LEFT_SECTION_PARTS } from "../constants/utils";

export const MarkdownContext = createContext(null);
export default function LeftSectionAdvancedComponent({
  updateReadmeContent,
  markdown,
  updateMarkDownContent,
}) {
  const [formContentJSONArray, updateFormContentObject] = useState([]);
  const [activeInputOption, updateActiveInputOption] = useState(
    LEFT_SECTION_PARTS.FORM_INPUT
  );
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
  function renderSheildsIOInput() {
    return (
      <ShieldsIoComponent
        formHandlerFunction={updateFormData}
        handlerParam="shieldsData"
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
  function renderFeaturesComponent() {
    return (
      <FeaturesComponent
        formHandlerFunction={updateFormData}
        handlerParam="featuresList"
        labelName="Features"
        placeHolderValue="feature"
      />
    );
  }
  function renderTechnologiesComponent() {
    return (
      <FeaturesComponent
        formHandlerFunction={updateFormData}
        handlerParam="technologiesList"
        labelName="Techologies"
        placeHolderValue="technology"
      />
    );
  }
  function renderScreenShotsInput() {
    return (
      <div className="my-1">
        <MultipleStepsComponent
          firstInputLabelName="Screenshot Image URL"
          firstInputPlaceholder="Enter URL of project screenshot"
          secondInputLabelName="Enter Width"
          secondInputPlaceholder="Enter width for image"
          thirdInputLabelName="Enter Height"
          thirdInputPlaceholder="Enter height for image"
          buttonTitle="project screenshot"
          formHandlerFunction={updateFormData}
          handlerParam="projectScreenShots"
        />
      </div>
    );
  }
  function renderInstallationStepsComponent() {
    return (
      <MultipleStepsComponent
        firstInputLabelName="Installation Step"
        firstInputPlaceholder="Enter title text for step"
        secondInputLabelName="Code for step"
        secondInputPlaceholder="Enter code for step"
        buttonTitle="step"
        formHandlerFunction={updateFormData}
        handlerParam="installationSteps"
      />
    );
  }
  function renderContributionGuidelinesInput() {
    return (
      <RenderTextInput
        labelName="Enter Contribution Guidelines"
        id="project-contribution-guidelines"
        placeholder="Enter project contribution guidelines"
        formHandlerFunction={updateFormData}
        handlerParam="contributionGuideLines"
        inputType="textarea"
        optionalParentClass="mt-4"
        optionalInputClassName="lg:w-96"
      />
    );
  }
  function renderLicenseName() {
    return (
      <RenderTextInput
        labelName="Enter License Name"
        id="project-license"
        placeholder="Enter project license"
        formHandlerFunction={updateFormData}
        handlerParam="license"
        inputType="input"
      />
    );
  }
  function renderSupportPage() {
    return (
      <SupportProjectComponent
        formHandlerFunction={updateFormData}
        handlerParam="projectSupportInformation"
      />
    );
  }
  function renderFormInputComponent() {
    return (
      <div className="w-full text-indigo-800 overflow-scroll readme-input-section">
        <Collapsible
          trigger="Step 1: Add title, description and socialify image(optional)"
          open={true}
        >
          <div className="md:flex my-2">
            <div className="px-6">
              {renderTitleInput()}
              {renderDescriptionInput()}
            </div>
            <div className="px-6 md:px-0">{renderSocialifyInput()}</div>
          </div>
        </Collapsible>
        <Collapsible trigger="Step 2: Add shields io badges" open={false}>
          <div className="flex mt-2">
            <div className="px-6">{renderSheildsIOInput()}</div>
          </div>
        </Collapsible>
        <Collapsible trigger="Step 3: Project Demo" open={false}>
          <div className="flex my-2">
            <div className="px-6">{renderProjectDemoURLInput()}</div>
          </div>
        </Collapsible>
        <Collapsible trigger="Step 4: Project Screenshots" open={false}>
          <div className="flex mt-2">
            <div className="px-6">{renderScreenShotsInput()}</div>
          </div>
        </Collapsible>
        <Collapsible trigger="Step 5: Features" open={false}>
          <div className="flex mt-2">
            <div className="px-6">{renderFeaturesComponent()}</div>
          </div>
        </Collapsible>
        <Collapsible trigger="Step 6: Installation Steps" open={false}>
          <div className="flex mt-2">
            <div className="px-6">{renderInstallationStepsComponent()}</div>
          </div>
        </Collapsible>
        <Collapsible
          trigger="Step 7: Contribution Guidelines(Optional)"
          open={false}
        >
          <div className="flex mt-2">
            <div className="px-6">{renderContributionGuidelinesInput()}</div>
          </div>
        </Collapsible>
        <Collapsible trigger="Step 8: Technolgies used(Optional)" open={false}>
          <div className="flex mt-2">
            <div className="px-6">{renderTechnologiesComponent()}</div>
          </div>
        </Collapsible>
        <Collapsible
          trigger="Step 9: License Information(Optional)"
          open={false}
        >
          <div className="flex my-2">
            <div className="px-6">{renderLicenseName()}</div>
          </div>
        </Collapsible>
        <Collapsible
          trigger="Step 10: Enter Support Information(Optional)"
          open={false}
        >
          <div className="flex">
            <div className="px-6">{renderSupportPage()}</div>
          </div>
        </Collapsible>
      </div>
    );
  }
  function renderMarkdownInputComponent() {
    return (
      <LeftSectionMarkDownComponent
        markdown={markdown}
        updateMarkDownContent={updateMarkDownContent}
      />
    );
  }
  function renderLeftSection() {
    if (activeInputOption === LEFT_SECTION_PARTS.FORM_INPUT) {
      return renderFormInputComponent();
    } else if (activeInputOption === LEFT_SECTION_PARTS.MARKDOWN_INPUT) {
      return renderMarkdownInputComponent();
    } else if (activeInputOption === LEFT_SECTION_PARTS.PREVIEW) {
      return (
        <RightSectionComponent
          hideTopNav={true}
          source={"leftSection"}
          markdown={markdown}
        />
      );
    }
  }
  return (
    <div className="md:w-1/2 max-h-screen overflow-hidden">
      <nav className="w-full flex justify-start border-b">
        <div
          className={classNames(
            "border border-indigo-200 border-b-0 border-r-0 px-5 py-2 w-56 text-indigo-800 cursor-pointer rounded",
            {
              "bg-indigo-100 bg-opacity-50":
                activeInputOption === LEFT_SECTION_PARTS.FORM_INPUT,
            }
          )}
          onClick={() => updateActiveInputOption(LEFT_SECTION_PARTS.FORM_INPUT)}
        >
          Form
        </div>
        <div
          className={classNames(
            "border border-indigo-200 border-b-0 px-5 py-2 w-56 text-indigo-800 cursor-pointer rounded",
            {
              "bg-indigo-100 bg-opacity-50":
                activeInputOption === LEFT_SECTION_PARTS.MARKDOWN_INPUT,
            }
          )}
          onClick={() =>
            updateActiveInputOption(LEFT_SECTION_PARTS.MARKDOWN_INPUT)
          }
        >
          Markdown
        </div>
        <div
          className={classNames(
            "border border-indigo-200 border-b-0 px-5 py-2 w-56 text-indigo-800 cursor-pointer rounded md:hidden block",
            {
              "bg-indigo-100 bg-opacity-50":
                activeInputOption === LEFT_SECTION_PARTS.PREVIEW,
            }
          )}
          onClick={() => updateActiveInputOption(LEFT_SECTION_PARTS.PREVIEW)}
        >
          Preview
        </div>
      </nav>
      <MarkdownContext.Provider value={{ formContentJSONArray }}>
        {renderLeftSection()}
      </MarkdownContext.Provider>
    </div>
  );
}
