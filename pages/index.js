import Head from 'next/head'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [duration, setDuration] = useState(1)
  const [ minutesLeft, setMinutes ] = useState(0);
  const [ secondsLeft, setSeconds ] =  useState(0);
  const [ meditating, setMeditating ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const [ showTimeOptions, setShowOptions ] = useState(false)
  
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
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark-blue">
      <Head>
        <title>Meditate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center flex-1 w-full text-center">
        { !meditating && 
          <div className="flex flex-col justify-center">
            <h1 className="text-white mt-12 text-4xl">I want to meditate for <span className='font-black text-white' onClick={e => setShowOptions(true)}>{duration}</span> minutes.</h1>
            <ul className={`text-white ${showTimeOptions ? '' : 'hidden'}`}>
              <li onClick={e => { setShowOptions(false); setDuration(3)} }>3</li>
              <li onClick={e => { setShowOptions(false); setDuration(5)} }>5</li>
              <li onClick={e => { setShowOptions(false); setDuration(10)} }>10</li>
              <li onClick={e => { setShowOptions(false); setDuration(15)} }>15</li>
            </ul>
            <button onClick={e => startTimer()}className='px-3 py-2 mt-2 border rounded text-white'>Breathe</button>
          </div>
        }
        {
          showModal && 
          <div>
            <p>meditation advice pops up</p>
          </div>
        }
        { meditating && 
          <div>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                <div style={{ width: `${((duration*60) - ((minutesLeft*60) + secondsLeft)) / (duration*60)*100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
            </div>
            <div id="animation" className={meditating ? '' : 'hidden'} />
          </div>
          
        }
        </main>
        <footer className={`w-full flex flex-row justify-start py-2 px-2 ${meditating ? 'hidden' : ''}`}>
          <p className="text-white mr-2" onClick={e => setShowModal(!showModal)}>Help Me Meditate</p>
          <a className="text-white" href='http://www.buildwithpride.org'> Built with 🏳️‍🌈 </a>
        </footer>
    </div>
  )
}
