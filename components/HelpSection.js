import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { BsQuestionCircleFill } from "react-icons/bs";
import IntroVideoPopUp from "./popupComponent/IntroVideoPopUp";
export default function HelpSection() {
  const [isIntroVideoPopUpOpen, updateIntroVideoPopUpOpen] = useState(false);
  return (
    <div className="ml-3 md:block hidden">
      <button
        onClick={() => updateIntroVideoPopUpOpen(true)}
        className="flex items-center border-white border rounded p-2 bg-white text-indigo-800 bg-opacity-90"
      >
        <BsQuestionCircleFill className="mr-1 text-xl" />
        <div className="md:block hidden">Help</div>
      </button>
      <IntroVideoPopUp
        open={isIntroVideoPopUpOpen}
        setOpen={updateIntroVideoPopUpOpen}
        videoUrl={"https://www.youtube.com/embed/An6bmCHy7Q0"}
      />
    </div>
  );
}
