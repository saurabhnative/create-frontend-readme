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
const turndownService = new TurndownService();
turndownService.keep("p");
turndownService.addRule("img", {
  filter: ["p"],
  replacement: (content, node) => node.outerHTML + "\n\n",
});
export default function Home() {
  const [readmeContent, updateReadmeContent] = useState([]);
  const [markdown, updateMarkDownContent] = useState("");

  useEffect(() => {
    const updatedMarkdown = turndownService.turndown(
      readmeContent.toString().replaceAll(",", "")
    );
    updateMarkDownContent(updatedMarkdown);
  }, [readmeContent]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Frontend README App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 text-center">
        <Header markdown={markdown} />
        <div className="w-full flex">
          <LeftSectionAdvancedComponent
            readmeContent={readmeContent}
            updateReadmeContent={updateReadmeContent}
          />
          <RightSectionComponent markdown={markdown} />
        </div>
      </main>
    </div>
  );
}
