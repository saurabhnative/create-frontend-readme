import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FaFileCode } from "react-icons/fa";
export default function RightSectionComponent({ markdown }) {
  console.log("markdown", markdown);
  const [shouldShowMarkdown, setShouldShowMarkdown] = useState(false);
  function toggleMarkdownCode() {
    setShouldShowMarkdown(!shouldShowMarkdown);
  }
  function renderPreview() {
    if (!shouldShowMarkdown) {
      return (
        <div className="w-full px-2 py-2 text-left text-black">
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
  return (
    <div className="w-1/2 border-l text-indigo-800">
      <nav className="w-full flex justify-start border-b items-center">
        <div className="border border-indigo-200 px-5 py-2 w-56">Preview</div>
        <div className="ml-auto mr-2 text-2xl cursor-pointer">
          <FaFileCode onClick={() => toggleMarkdownCode()} />
        </div>
      </nav>
      <div className="flex">{renderPreview()}</div>
    </div>
  );
}
