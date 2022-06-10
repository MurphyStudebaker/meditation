import styled from "styled-components";
import Visualizer from "../components/Visualizer";
import Progress from "../components/progress";
import { useEffect, useState } from "react";
import useDuration from "../context/DurationContext";

export default function Meditating({}) {
  const { duration } = useDuration();
  const [secondsLeft, setSeconds] = useState(duration * 60);
  useEffect(() => {
    let myInterval = setInterval(() => {
      //   if (secondsLeft === 30) {
      //     // wind down bell at 30 seconds remaining
      //     if (bell) {
      //       playBell();
      //     }
      //   }
      if (secondsLeft > 0) {
        setSeconds(secondsLeft - 1);
      } else {
        clearInterval(myInterval);
        // setShowVisualizer(false);
        // stop();
        // setTimeout(setMeditating(false), 4800);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <PageWrapper>
      <VizWrapper>
        <Visualizer meditating={true} />
      </VizWrapper>
      <Progress duration={duration} secondsLeft={secondsLeft} />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const VizWrapper = styled.div`
  flex: 1;
`;
