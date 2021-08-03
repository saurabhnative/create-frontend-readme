import { README_ELEMENTS_ORDER } from "../constants/utils";
import find from "lodash/find";
import findIndex from "lodash/findIndex";

export const updateFormObject = (tempArray, key, value) => {
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
  return tempArray;
};
