/**
 * Entry file for entire project structure
 */
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { FaGithub, FaArrowAltCircleRight, FaPlay } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import Image from "next/image";

import IntroVideoPopUp from "../components/popupComponent/IntroVideoPopUp";

export default function Home() {
  const [isIntroVideoPopUpOpen, updateIntroVideoPopUpOpen] = useState(false);
  const router = useRouter();
  function redirectToApp() {
    router.push("/app");
  }
  function redirectToGithub() {
    window.open(
      "https://github.com/saurabhnative/create-frontend-readme",
      "_blank",
      "noopener,noreferrer"
    );
  }
  function renderButton(text, clickHandler, icon) {
    return (
      <button
        className="border rounded border border-b-4 border-indigo-800 md:px-5 px-3 py-2 text-indigo-800 md:text-xl whitespace-nowrap font-bold hover:bg-indigo-700 hover:text-white bg-white flex items-center"
        onClick={clickHandler}
      >
        <span className="mr-2">{icon}</span>
        {text}
      </button>
    );
  }
  function renderLeftSection() {
    return (
      <div className="md:w-1/2 h-full flex flex-col justify-center md:pl-6 pl-1">
        <div className="text-3xl font-bold text-indigo-800">
          Most advanced README generator for your Github projects
        </div>
        <div className="text-gray-600 mt-5 text-xl">
          Build amazing README files for your project faster than ever before
        </div>
        <div className="my-6 flex justify-center md:justify-start">
          {renderButton("Try Now", redirectToApp, <FaArrowAltCircleRight />)}
          <div className="ml-6">
            {renderButton("View on Github", redirectToGithub, <FaGithub />)}
          </div>
        </div>
      </div>
    );
  }
  function renderRightSection() {
    return (
      <div className="md:w-1/2 h-full flex flex-col justify-center items-center">
        <div
          className="video-container relative cursor-pointer px-2"
          onClick={() => updateIntroVideoPopUpOpen(true)}
        >
          <Image
            src="/images/readmegenvidasset.png"
            alt="Picture of the author"
            width={600}
            height={350}
            className="rounded-lg"
          />
          <div className="playButtonContainer absolute">
            <div className="rounded-full w-16 h-16 flex justify-center items-center bg-gradient-to-r from-indigo-500 to-indigo-800">
              <FaPlay className="playButton text-3xl text-white pl-1 hover:text-4xl" />
            </div>
            <IntroVideoPopUp
              open={isIntroVideoPopUpOpen}
              setOpen={updateIntroVideoPopUpOpen}
              videoUrl={"https://www.youtube.com/embed/An6bmCHy7Q0"}
            />
          </div>
        </div>
      </div>
    );
  }
  function redirectToLogin() {
    router.push("/api/auth/login?returnTo=/app");
  }
  return (
    <div>
      <Head>
        <title>README GEN</title>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-36PZ4362YB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-36PZ4362YB');
</script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg_image flex justify-center items-center">
          <div className="body-container bg-white bg-opacity-60 rounded-md border border-indigo-800">
            <div className="intro-header h-20 bg-white bg-opacity-100 rounded-tl-lg rounded-tr-lg border-b border-indigo-800 flex items-center">
              <div className="pl-6 text-3xl font-bold text-indigo-800 bg-gradient-to-r from-indigo-500 to-indigo-800 site-title">
                README Gen
              </div>
              <div className="ml-auto mr-6">
                {renderButton(
                  "Sign In",
                  redirectToLogin,
                  <RiLoginCircleFill />
                )}
              </div>
            </div>
            <div className="content-container bg-opacity-70 rounded-bl-lg rounded-br-lg md:flex md:items-center">
              {renderLeftSection()}
              {renderRightSection()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
