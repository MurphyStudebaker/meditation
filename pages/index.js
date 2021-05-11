import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

import Modal from '../components/modal'
import NumberSelect from '../components/numberSelect'
// import useSound from 'use-sound'
// import bellSfx from '../public/bell.mp3'
import Start from '../components/startButton'
import Visualizer from '../components/visualizer'
import ProgressBar from '../components/progress'
import Header from '../components/header'

export default function Home() {
  const [ duration, setDuration ] = useState(1)
  const [ secondsLeft, setSeconds ] =  useState(0);
  const [ meditating, setMeditating ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  // const [play] = useSound(bellSfx);

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
    // play() // plays sounds
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
      <Header />

      <div className="flex flex-col items-center justify-center flex-1 w-full">
      {/* Displays when not meditating */}
      <Transition show={!meditating}>
        <Transition.Child
          appear={true}
          enter="transition-opacity ease-linear duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
        <h1 className="text-gray-300 text-left text-6xl">
          I want to meditate for 
          <NumberSelect selected={duration} onChange={changeSelection}/>
          minutes.
        </h1>
        <Start start={startTimer} />
        </Transition.Child>
      </Transition>

      <Transition show={meditating}
          appear={false}
          enter="transition-opacity ease-linear duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
        <Visualizer meditating={meditating} />
        <ProgressBar duration={duration} secondsLeft={secondsLeft} />
      </Transition>
      </div>
{/* 

      {!meditating 
      && <Header triggerModal={triggerModal} />}
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        { showModal && <Modal open={showModal}/> }
        
        { meditating && 
          <div>
            <Visualizer meditating={meditating} />
            <ProgressBar duration={duration} secondsLeft={secondsLeft} />
          </div>
          
        } */}
        {/* </main> */}
    </div>
  )
}
