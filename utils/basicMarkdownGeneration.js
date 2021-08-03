import sortBy from "lodash/sortBy";
/**
 * Function to generate markdown data from HTMl form inputs in basic version
 * @param {*} sourceObject
 * @returns markdown data
 */
export default function generateBasicMarkDownData(sourceObject) {
  const markdownData = [];
  const sortedSourceObject = sortBy(sourceObject, [
    function (o) {
      return o.index;
    },
  ]);
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
      markdownData.push(`<div>
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
  return markdownData;
}
