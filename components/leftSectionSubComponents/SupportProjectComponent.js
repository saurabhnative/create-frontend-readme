import React, { useState, useContext, useEffect } from "react";
import RenderTextInput from "./TextInput";
import { MarkdownContext } from "../LeftSectionAdvancedComponent";
import { getFormValue } from "../../utils/formGeneration";

export default function SupportProjectComponent(props) {
  const [supportObject, updateSupportObject] = useState({
    supportMessage: null,
    supportImage: null,
  });
  const { formContentJSONArray } = useContext(MarkdownContext);
  useEffect(() => {
    if (formContentJSONArray.length > 0) {
      const value = getFormValue(formContentJSONArray, props.handlerParam);
      if (value) {
        let updatedObject = {};
        if (value.supportMessage) {
          updatedObject = {
            ...supportObject,
            supportMessage: value.supportMessage,
          };
        }
        if (value.supportImage) {
          updatedObject = {
            ...updatedObject,
            supportImage: value.supportImage,
          };
        }
        updateSupportObject(updatedObject);
      }
    }
  }, []);
  function handleSupportObjectChanges(key, value) {
    const updatedObject = { ...supportObject, [key]: value };
    updateSupportObject(updatedObject);
    props.formHandlerFunction(props.handlerParam, updatedObject);
  }
  return (
    <div className="mb-2">
      <div className={"flex flex-col items-start mt-4"}>
        <label htmlFor={"project-support-message"}>
          {"Enter support message"}
        </label>
        <textarea
          type="text"
          id={"project-support-message"}
          className={"border rounded mt-2 py-1 px-2 h-32 w-56 lg:w-96"}
          placeholder={"Enter project support message"}
          value={supportObject.supportMessage || ""}
          onChange={(e) =>
            handleSupportObjectChanges("supportMessage", e.target.value)
          }
        />
      </div>
      <div className={"flex flex-col items-start mt-4"}>
        <label htmlFor={"project-support-image"}>
          {"Enter support image code/link"}
        </label>
        <textarea
          type="text"
          id={"project-support-image"}
          className={"border rounded mt-2 py-1 px-2 h-32 w-56 lg:w-96"}
          placeholder={"Enter project support image"}
          value={supportObject.supportImage || ""}
          onChange={(e) =>
            handleSupportObjectChanges("supportImage", e.target.value)
          }
        />
      </div>
    </div>
  );
}
