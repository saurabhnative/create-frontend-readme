import React from "react";
import { INFO_POPUP_CONTSTANTS } from "../../constants/utils";
export default function PopUpComponent(props) {
  function renderShieldsIoInformation() {
    return (
      <div>
        <p className="font-bold">Shields IO Website Information</p>
        <p className="text-sm text-gray-700 mt-1">
          Shields.io, a service for creating legible badges in SVG format, which
          can easily be included in GitHub readmes or any other web page.
        </p>
      </div>
    );
  }
  function renderSocialifyInformation() {
    return (
      <div>
        <p className="font-bold">Socialify Information</p>
        <p className="text-sm text-gray-700 mt-1">
          Socialify helps you showcase your project to the world by generating a
          beautiful project image which can be used in Github README
        </p>
      </div>
    );
  }
  function renderTitleAndDescription() {
    switch (props.source) {
      case INFO_POPUP_CONTSTANTS.SHEILDS_IO_COMPONENT:
        return renderShieldsIoInformation();

      case INFO_POPUP_CONTSTANTS.SOCIALIFY_COMPONENT:
        return renderSocialifyInformation();

      default:
        break;
    }
  }
  return (
    <div className="absolute w-screen h-screen top-0 left-0">
      <main className="antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden bg-opacity-50">
        <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
          <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
            <div className="md:flex items-center">
              <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                <img
                  src="https://res.cloudinary.com/dk22rcdch/image/upload/v1628530900/Blogimages/Screenshot_2021-08-09_at_11.11.09_PM_lnyo7p.png"
                  className="h-8 w-12"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                {renderTitleAndDescription()}
              </div>
            </div>
            <div className="text-center md:text-right mt-4 md:flex md:justify-end">
              <button
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                onClick={() => props.updateInfoPopUpVisibility(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
