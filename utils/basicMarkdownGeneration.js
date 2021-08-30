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
    const value = sourceObject.value;
    const key = sourceObject.element;
    if (key === "title") {
      markdownData.push(`<h1 align="center">${value}</h1>`);
    } else if (key === "description") {
      markdownData.push(`<p>${value}</p>`);
    } else if (key === "socialifyImage") {
      markdownData.push(
        `<p align="center"><img src="${value}" alt="project"/></p>`
      );
    } else if (key === "shieldsData") {
      const shieldsArray = value;
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
        <h2>🚀 Demo</h2>
        <a href="${value}" alt="vale">${value}</a>
        </div>`);
    } else if (key === "featuresList") {
      const featuresArray = value;
      let featuresString = "";
      featuresArray.map((featuresArrayItem) => {
        if (featuresArrayItem.length > 1) {
          featuresString = featuresString.concat(
            `<li>${featuresArrayItem}</li>`
          );
        }
      });
      markdownData.push(`
      <div>
        <br></br>
        <h2>🧐 Features</h2>
        Here're some of the project's best features:
        <ul align="center">
        ${featuresString}
        </ul>
      </div>
      `);
    } else if (key === "technologiesList") {
      const featuresArray = value;
      let featuresString = "";
      featuresArray.map((featuresArrayItem) => {
        if (featuresArrayItem.length > 1) {
          featuresString = featuresString.concat(
            `<li>${featuresArrayItem}</li>`
          );
        }
      });
      markdownData.push(`
      <div>
        <br></br>
        <h2>💻 Built with</h2>
        Technologies used in the project:
        <ul align="center">
        ${featuresString}
        </ul>
      </div>
      `);
    } else if (key === "projectScreenShots") {
      const screenShotsArrayObject = value;
      let imgString = "";
      screenShotsArrayObject.map((screenshotImageObject) => {
        if (screenshotImageObject.firstInputValue !== null) {
          imgString = imgString.concat(
            `<img src="${
              screenshotImageObject.firstInputValue
            }" alt="shields" width=${
              screenshotImageObject.secondInputValue || 400
            } height=${screenshotImageObject.thirdInputValue || 400}/>`
          );
        }
      });
      markdownData.push(`
        <p align="center">
        <h2>Project Screenshots:</h2>
        ${imgString}
        </p>`);
    } else if (key === "installationSteps") {
      const stepsArray = value;
      let installationStepsString = ``;
      stepsArray.map((stepElement, index) => {
        if (stepElement.firstInputValue) {
          installationStepsString = installationStepsString.concat(
            `<p>${index + 1}. ${stepElement.firstInputValue}</p>`
          );
        }
        if (stepElement.secondInputValue) {
          installationStepsString = installationStepsString.concat(
            `<pre><code>${stepElement.secondInputValue}</code></pre>`
          );
        }
      });
      markdownData.push(`
        <p>
        <h2>🛠️ Installation Steps:</h2>
        ${installationStepsString}
        </p>`);
    } else if (key === "contributionGuideLines") {
      markdownData.push(`<p>
      <h2>🍰 Contribution Guidelines:</h2>
      ${value}
      </p>`);
    } else if (key === "license") {
      markdownData.push(`<p>
      <h2>🛡️ License:</h2>
      This project is licensed under the ${value}
      </p>`);
    } else if (key === "projectSupportInformation") {
      const supportObject = value;
      let supportString = ``;
      if (supportObject.supportMessage) {
        supportString = supportString.concat(
          `<span>${supportObject.supportMessage}</span>`
        );
      }
      if (supportObject.supportImage) {
        supportString = supportString.concat(
          `<p>${supportObject.supportImage}</p>`
        );
      }
      markdownData.push(`
      <h2>💖Like my work?</h2>
      ${supportString}
      `);
    }
  });
  return markdownData;
}
