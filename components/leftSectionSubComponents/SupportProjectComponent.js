import React, { useState } from "react";
import RenderTextInput from "./TextInput";
export default function SupportProjectComponent(props) {
  const [supportObject, updateSupportObject] = useState({
    supportMessage: null,
    supportImage: null,
  });
  function handleSupportObjectChanges(key, value) {
    const updatedObject = { ...supportObject, [key]: value };
    updateSupportObject(updatedObject);
    props.formHandlerFunction(props.handlerParam, updatedObject);
  }
  return (
    <div className="mb-2">
      <RenderTextInput
        labelName="Enter support message"
        id="project-support-message"
        placeholder="Enter project support message"
        formHandlerFunction={handleSupportObjectChanges}
        handlerParam="supportMessage"
        inputType="textarea"
        optionalParentClass="mt-4"
        optionalInputClassName="lg:w-96"
      />
      <RenderTextInput
        labelName="Enter support image code/link"
        id="project-support-image"
        placeholder="Enter project support image"
        formHandlerFunction={handleSupportObjectChanges}
        handlerParam="supportImage"
        inputType="textarea"
        optionalParentClass="mt-4"
        optionalInputClassName="lg:w-96"
      />
    </div>
  );
}
