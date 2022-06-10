import Head from "next/head";
import styled from "styled-components";
import React, { useState } from "react";
import { useStickyState } from "../hooks/useStickyState";
import useDuration from "../context/DurationContext";
import NumberSelect from "../components/NumberSelect";
import useSound from "use-sound";
import bellSfx from "../public/bell.mp3";
import Start from "../components/StartButton";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spacer from "../components/helpers";

export default function Home() {
  const { duration, setDuration } = useDuration();
  const [playBell] = useSound(bellSfx);
  const [bell, setBell] = useStickyState(true, "meditation-bell-on");

  const changeSelection = (time) => {
    setDuration(time);
  };

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
        <Start handleClick={playBell} />
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
