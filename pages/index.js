import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Modal from '../components/modal'
import NumberSelect from '../components/numberSelect'
import useSound from 'use-sound'
import bellSfx from '../public/bell.mp3'
import Start from '../components/startButton'
import Visualizer from '../components/visualizer'
import ProgressBar from '../components/progress'
import Header from '../components/header'

export default function Home() {
  const [ duration, setDuration ] = useState(1)
  const [ minutesLeft, setMinutes ] = useState(0);
  const [ secondsLeft, setSeconds ] =  useState(0);
  const [ meditating, setMeditating ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const [play] = useSound(bellSfx);

  useEffect(()=>{
    let myInterval = setInterval(() => {
      if (secondsLeft > 0) {
          setSeconds(secondsLeft - 1);
      } else {
        clearInterval(myInterval)
        setMeditating(false)
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });

  const startTimer = () => {
    setSeconds(duration * 60)
    setMeditating(true)
    play() // plays sounds
  }

  const changeSelection = (time) => {
    setDuration(time)
  }

  const triggerModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark-blue">
      <Head>
        <title>Inhale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!meditating && <Header triggerModal={triggerModal} />}
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        { !meditating && 
          <div className="flex flex-col justify-center animated">
            <h1 className="text-gray-300 mt-12 text-6xl animated fadeIn">
              I want to meditate for 
              <NumberSelect selected={duration} onChange={changeSelection}/>
              minutes.
            </h1>
            <Start start={startTimer} />
          	<div onClick={e => setShowModal(false)} class={`main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden ${showModal ? '' : 'hidden'}`} />
          </div>
        }
        { showModal && <Modal open={showModal}/> }
        { meditating && 
          <div>
            <Visualizer meditating={meditating} />
            <ProgressBar duration={duration} secondsLeft={secondsLeft} />
          </div>
          
        }
        </main>
    </div>
  )
}
