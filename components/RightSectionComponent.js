/**
 * Component to show preview of final README based on form inputs
 */
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FaFileCode } from "react-icons/fa";
import classNames from "classnames";
export default function RightSectionComponent({
  markdown,
  hideTopNav,
  source,
}) {
  const [shouldShowMarkdown, setShouldShowMarkdown] = useState(false);
  function toggleMarkdownCode() {
    setShouldShowMarkdown(!shouldShowMarkdown);
  }
  function renderPreview() {
    if (!shouldShowMarkdown) {
      return (
        <div className="w-full p-4 text-left text-black">
          <ReactMarkdown
            children={markdown}
            rehypePlugins={[rehypeRaw]}
            plugins={[gfm]}
          />
        </div>
      );
    } else {
      return (
        <div className="w-full px-2 py-2 text-left text-black">
          <pre className="whitespace-pre-wrap">{markdown}</pre>
        </div>
      );
    }
  }
  function renderNavBar() {
    if (!hideTopNav) {
      return (
        <nav className="w-full flex justify-start border-b items-center">
          <div className="border border-indigo-200 px-5 py-2 w-56 border-b-0 border-l-0 rounded-tl rounded-tr">
            Preview
          </div>
          <div className="ml-auto mr-2 text-2xl cursor-pointer">
            <FaFileCode onClick={() => toggleMarkdownCode()} />
          </div>
        </nav>
      );
    }
  }
  return (
    <div
      className={classNames(
        "md:w-1/2 md:block border-l text-indigo-800 right-section-container",
        { block: source === "leftSection" },
        { hidden: source !== "leftSection" }
      )}
    >
      {renderNavBar()}
      <div className="flex overflow-scroll readme-output-section">
        {renderPreview()}
      </div>
    </div>
  );
}
