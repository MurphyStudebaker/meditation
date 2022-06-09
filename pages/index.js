import Head from "next/head";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useStickyState } from "../hooks/useStickyState";

import NumberSelect from "../components/NumberSelect";
import useSound from "use-sound";
import bellSfx from "../public/bell.mp3";
import Start from "../components/StartButton";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spacer from "../components/helpers";

export default function Home() {
  const [duration, setDuration] = useStickyState(3, "meditation-duration");
  const [secondsLeft, setSeconds] = useState(0);
  const [meditating, setMeditating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVisualizer, setShowVisualizer] = useState(false);
  const [playBell] = useSound(bellSfx);
  const [bell, setBell] = useStickyState(true, "meditation-bell-on");

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
      <Header bell={bell} setBell={setBell} />

      <PageContent>
        <h1>
          I want to meditate for
          <NumberSelect selected={duration} onChange={changeSelection} />
          minutes.
        </h1>
        <Spacer height={20} />
        <Start start={startTimer} />
      </PageContent>

      <Footer />
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
  font-size: 1.5rem;
  align-self: center;
`;
