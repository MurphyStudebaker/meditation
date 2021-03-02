import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Modal from '../components/modal'
import NumberSelect from '../components/numberSelect'
import useSound from 'use-sound'
import bellSfx from '../public/bell.mp3'

export default function Home() {
  const [duration, setDuration] = useState(1)
  const [ minutesLeft, setMinutes ] = useState(0);
  const [ secondsLeft, setSeconds ] =  useState(0);
  const [ meditating, setMeditating ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const [play] = useSound(bellSfx);

  useEffect(()=>{
  let myInterval = setInterval(() => {
          if (secondsLeft > 0) {
              setSeconds(secondsLeft - 1);
          }
          if (secondsLeft === 0) {
              if (minutesLeft === 0) {
                  clearInterval(myInterval)
                  setMeditating(false)
              } else {
                  setMinutes(minutesLeft - 1);
                  setSeconds(59);
              }
          } 
      }, 1000)
      return ()=> {
          clearInterval(myInterval);
        };
  });

  useEffect(() => {
    const p5 = require("p5")
    let windowWidth = window.innerWidth || 300
    let windowHeight = window.innerHeight  || 300

    // figure out how to stop the animation once it is done

    if (meditating) {
      let sketch = new p5( p => {
        let W = windowWidth
        let H = windowHeight
        let kMax = 5; // maximal value for the parameter "k" of the blobs
        let step = 0.01; // difference in time between two consecutive blobs
        let n = 100; // total number of blobs
        let radius = 0; // radius of the base circle
        let inter = 0.0005; // difference of base radii of two consecutive blobs
        let maxNoise = 400; // maximal value for the parameter "noisiness" for the blobs
        
        //let noiseProg = (x) => (x);
        p.setup = () => {
          p.createCanvas(W, H)
          p.colorMode(p.HSB, 1)
          p.angleMode(p.DEGREES)
          p.noFill();
          //noLoop();
          kMax = p.random(0.6, 1.0)
          p.noStroke()
        }

        function blob(size, xCenter, yCenter, k, t, noisiness) {
          p.beginShape();
          let angleStep = 360 / 10;
          for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
            let r1, r2;
            r1 = p.cos(theta)+1;
            r2 = p.sin(theta)+1; // +1 because it has to be positive for the function noise
            let r = size + p.noise(k * r1,  k * r2, t) * noisiness;
            let x = xCenter + r * p.cos(theta);
            let y = yCenter + r * p.sin(theta);
            p.curveVertex(x, y);
          }
          p.endShape();
        }

        p.draw = () => {
          p.background(0.6, 0.75, 0.25);
          let t = p.frameCount/160;
          for (let i = n; i > 0; i--) {
            let alpha = 1 - (i / n);
            p.fill((alpha/5 + 0.75)%1, 1, 1, alpha);
            let size = radius + i * inter;
            let k = kMax * p.sqrt(i/n);
            let noisiness = maxNoise * (i / n);
            blob(size, W/2, H/2, k, t - i * step, noisiness);
          }
        } 
      }, 'animation')
    }
    }, [meditating])

  const startTimer = () => {
    setMinutes(duration)
    setSeconds(0)
    setMeditating(true)
    play()
  }

  const changeSelection = (time) => {
    setDuration(time)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark-blue">
      <Head>
        <title>Meditate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        { !meditating && 
          <div className="flex flex-col justify-center animated">
            <h1 className="text-white mt-12 text-6xl">I want to meditate for 
            <NumberSelect selected={duration} onChange={changeSelection}/>
            <span className='font-black text-white' onClick={e => setShowOptions(true)}>{duration}</span> 
            minutes.</h1>

            <button onClick={e => startTimer()}className='px-3 py-2 mt-2 border rounded text-white'>Breathe</button>
          	<div onClick={e => setShowModal(false)} class={`main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden ${showModal ? '' : 'hidden'}`} />
          </div>
        }
        {
          showModal && 
          <Modal />
        }
        { meditating && 
          <div>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                <div style={{ width: `${((duration*60) - ((minutesLeft*60) + secondsLeft)) / (duration*60)*100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
            </div>
            <div id="animation" className={`${meditating ? '' : 'hidden'} animated fadeIn`} />
          </div>
          
        }
        </main>
        <footer className={`w-full py-4 px-4 ${meditating ? 'hidden' : ''}`}>
          <svg className='w-8' onClick={e => setShowModal(!showModal)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='white'><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1.5-6.5c-.2.9-.5 1.5-1.5 1.5s-1.5-.5-1.5-1.5 1.1-2.1 1.5-2.5c1-1 2-.9 2-2s-.9-2-2-2-2 1-2 2-1.3 1-1.3 1c-1 0-1.7-.9-1.4-1.9C7.8 6.5 9.1 5 12 5c4 0 5 3 5 5 0 2.1-3.2 2.2-3.5 3.5z"></path></g></svg>
        </footer>
    </div>
  )
}
