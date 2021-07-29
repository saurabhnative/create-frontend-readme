import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
export default function RightSectionComponent({ markdown }) {
  console.log("markdown", markdown);
  return (
    <div className="w-1/2 border-l text-indigo-800">
      <nav className="w-full flex justify-start border-b">
        <div className="border border-indigo-200 px-5 py-2 w-56">Preview</div>
      </nav>
      <div className="flex">
        <div className="w-full px-2 py-2 text-left text-black">
          <ReactMarkdown
            children={markdown}
            rehypePlugins={[rehypeRaw]}
            plugins={[gfm]}
          />
        </div>
      </div>
    </div>
  );
}
