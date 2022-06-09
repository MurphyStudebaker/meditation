import Head from "next/head";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useStickyState } from "../hooks/useStickyState";

import NumberSelect from "../components/numberSelect";
import useSound from "use-sound";
import bellSfx from "../public/bell.mp3";
import Start from "../components/startButton";
import Visualizer from "../components/visualizer";
import ProgressBar from "../components/progress";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  const [duration, setDuration] = useStickyState(3, "meditation-duration");
  const [secondsLeft, setSeconds] = useState(0);
  const [meditating, setMeditating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVisualizer, setShowVisualizer] = useState(false);
  const [playBell] = useSound(bellSfx);
  const [bell, setBell] = useStickyState(true, "meditation-bell-on");
  const [ambience, setAmbience] = useStickyState(
    true,
    "meditation-ambience-on"
  );

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (secondsLeft === 30) {
        // wind down bell at 30 seconds remaining
        if (bell) {
          playBell();
        }
      }
      if (secondsLeft > 0) {
        setSeconds(secondsLeft - 1);
      } else {
        clearInterval(myInterval);
        setShowVisualizer(false);
        stop();
        setTimeout(setMeditating(false), 4800);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const startTimer = () => {
    setSeconds(duration * 60);
    setMeditating(true);
    setTimeout(setShowVisualizer(true), 4800);
    if (bell) {
      playBell();
    }
  };

  const changeSelection = (time) => {
    setDuration(time);
  };

  useEffect(() => {
    console.log(window.localStorage);
  }, []);

  return (
    <PageWrapper>
      <Head>
        <title>Inhale</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        bell={bell}
        setBell={setBell}
        ambience={ambience}
        setAmbience={setAmbience}
      />

      <PageContent>
        {/* Displays when not meditating */}
        <Transition show={!meditating}>
          <Transition.Child
            appear="true"
            enter="transition-opacity ease-linear duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div id="spacer" className="h-24 md:h-40"></div>
            <h1 className="text-gray-300 text-source-sans w-96 text-left text-6xl">
              I want to meditate for
              <NumberSelect selected={duration} onChange={changeSelection} />
              minutes.
            </h1>
            <Start start={startTimer} />
          </Transition.Child>
        </Transition>
      </PageContent>
      {/* 
      <Transition
          show={showVisualizer}
          appear="false"
          enter="delay-1000 transition-opacity ease-linear duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100">
        <Visualizer meditating={showVisualizer}/>
      </Transition>

      <div className="w-screen">
        <Transition
          show={meditating}
          appear="false"
          enter="delay-1000 transition-opacity ease-linear duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100">
        <ProgressBar duration={duration} secondsLeft={secondsLeft} />
        </Transition>
      </div> */}

      {!meditating && (
        <div>
          <Footer />
        </div>
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 100%;
  padding: var(--spacing) calc(2 * var(--spacing));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PageContent = styled.main`
  flex: 1;
  display: grid;
  place-items: center;
`;
