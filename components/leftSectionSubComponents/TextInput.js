/**
 * Component to take input in form of text either using
 * input or textarea HTML tags
 */
import { useEffect, useContext, useState } from "react";
import classNames from "classnames";
import { MarkdownContext } from "../LeftSectionAdvancedComponent";
import { getFormValue } from "../../utils/formGeneration";
export default function RenderTextInput(props) {
  const { formContentJSONArray } = useContext(MarkdownContext);
  const [inputValue, updateInputValue] = useState("");
  useEffect(() => {
    if (formContentJSONArray.length > 0) {
      const value = getFormValue(formContentJSONArray, props.handlerParam);
      if (value) {
        updateInputValue(value);
      }
    }
  }, []);
  function handleInputUpdate(value) {
    updateInputValue(value);
    props.formHandlerFunction(props.handlerParam, value);
  }
  function renderInputSection() {
    if (props.inputType === "input") {
      return (
        <input
          type="text"
          id={props.id}
          className="border rounded mt-2 py-1 px-2 w-56"
          placeholder={props.placeholder}
          value={inputValue}
          onChange={(e) => handleInputUpdate(e.target.value)}
        />
      );
    } else if (props.inputType === "textarea") {
      return (
        <textarea
          type="text"
          id={props.id}
          className={classNames("border rounded mt-2 py-1 px-2 h-32 w-56", {
            [props.optionalInputClassName]: props.optionalInputClassName,
          })}
          placeholder={props.placeholder}
          value={inputValue}
          onChange={(e) => handleInputUpdate(e.target.value)}
        />
      );
    }
  }
  return (
    <div
      className={classNames("flex flex-col items-start", {
        [props.optionalParentClass]: props.optionalParentClass,
      })}
    >
      <label htmlFor={props.id}>{props.labelName}</label>
      {renderInputSection()}
    </div>
  );
}
