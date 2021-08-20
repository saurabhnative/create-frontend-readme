import React, { useState } from "react";

export default function LeftSectionMarkDownComponent(props) {
  const [markdownData, updateMarkdownData] = useState(props.markdown);
  function handleUpdateMardownData(mardownData) {
    updateMarkdownData(mardownData);
    props.updateMarkDownContent(mardownData);
  }
  return (
    <div>
      <textarea
        value={markdownData}
        onChange={(e) => handleUpdateMardownData(e.target.value)}
        className="left-section-markdown-textarea"
      />
    </div>
  );
}
