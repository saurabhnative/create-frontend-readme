/**
 * Component to take input in form of text either using
 * input or textarea HTML tags
 */
import classNames from "classnames";
export default function RenderTextInput(props) {
  function renderInputSection() {
    if (props.inputType === "input") {
      return (
        <input
          type="text"
          id={props.id}
          className="border rounded mt-2 py-1 px-2 w-56"
          placeholder={props.placeholder}
          onChange={(e) =>
            props.formHandlerFunction(props.handlerParam, e.target.value)
          }
        />
      );
    } else if (props.inputType === "textarea") {
      return (
        <textarea
          type="text"
          id={props.id}
          className="border rounded mt-2 py-1 px-2 h-32 w-56"
          placeholder={props.placeholder}
          onChange={(e) =>
            props.formHandlerFunction(props.handlerParam, e.target.value)
          }
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
