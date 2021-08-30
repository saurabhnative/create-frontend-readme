/**
 * Entry file for entire project structure
 */
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import LeftSectionBasicComponent from "../components/LeftSectionBasicComponent";
import LeftSectionAdvancedComponent from "../components/LeftSectionAdvancedComponent";
import RightSectionComponent from "../components/RightSectionComponent";
import TurndownService from "turndown";
const turndownService = new TurndownService({ codeBlockStyle: "fenced" });
turndownService.keep("p");
turndownService.addRule("img", {
  filter: ["p"],
  replacement: (content, node) => node.outerHTML + "\n\n",
});
turndownService.addRule("h1", {
  filter: ["h1"],
  replacement: (content, node) => node.outerHTML + "\n\n",
});
turndownService.addRule("h2", {
  filter: ["h2"],
  replacement: (content, node) => node.outerHTML + "\n\n",
});
turndownService.addRule("img", {
  filter: ["img"],
  replacement: (content, node) => node.outerHTML + "\n\n",
});
export default function Home() {
  const [readmeContent, updateReadmeContent] = useState([]);
  const [markdown, updateMarkDownContent] = useState("");

  useEffect(() => {
    if (readmeContent && readmeContent.length && readmeContent.toString()) {
      const updatedMarkdown = turndownService.turndown(
        readmeContent.toString().replaceAll(",", "")
      );
      updateMarkDownContent(updatedMarkdown);
    }
  }, [readmeContent]);
  return (
    <div>
      <Head>
        <title>README GEN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header markdown={markdown} />
        <div className="w-full md:flex">
          <LeftSectionAdvancedComponent
            readmeContent={readmeContent}
            updateReadmeContent={updateReadmeContent}
            markdown={markdown}
            updateMarkDownContent={updateMarkDownContent}
          />
          <RightSectionComponent markdown={markdown} />
        </div>
      </main>
    </div>
  );
}
