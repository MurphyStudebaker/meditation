import React, { useEffect } from "react";

export default function Visualizer({ meditating }) {
  useEffect(() => {
    const p5 = require("p5");
    let windowWidth = window.innerWidth || 300;
    let windowHeight = window.innerHeight - 18 || 300;

    if (meditating) {
      let sketch = new p5((p) => {
        let W = windowWidth;
        let H = windowHeight - 100;
        let kMax = 5; // maximal value for the parameter "k" of the blobs
        let step = 0.01; // difference in time between two consecutive blobs
        let n = 100; // total number of blobs
        let radius = 0; // radius of the base circle
        let inter = 0.0005; // difference of base radii of two consecutive blobs
        let maxNoise = 400; // maximal value for the parameter "noisiness" for the blobs

        //let noiseProg = (x) => (x);
        p.setup = () => {
          p.createCanvas(W, H);
          p.colorMode(p.HSB, 1);
          p.angleMode(p.DEGREES);
          p.noFill();
          //noLoop();
          kMax = p.random(0.6, 1.0);
          p.noStroke();
        };

        function blob(size, xCenter, yCenter, k, t, noisiness) {
          p.beginShape();
          let angleStep = 360 / 10;
          for (
            let theta = 0;
            theta <= 360 + 2 * angleStep;
            theta += angleStep
          ) {
            let r1, r2;
            r1 = p.cos(theta) + 1;
            r2 = p.sin(theta) + 1; // +1 because it has to be positive for the function noise
            let r = size + p.noise(k * r1, k * r2, t) * noisiness;
            let x = xCenter + r * p.cos(theta);
            let y = yCenter + r * p.sin(theta);
            p.curveVertex(x, y);
          }
          p.endShape();
        }

        p.draw = () => {
          p.background(0.6, 0.75, 0.25);
          let t = p.frameCount / 160;
          for (let i = n; i > 0; i--) {
            let opacity = 1 - (i / n + 0.2);
            let hue = 4 - i / n;
            p.fill((hue / 5 + 0.75) % 1, 1, 1, opacity);
            let size = radius + i * inter;
            let k = kMax * p.sqrt(i / n);
            let noisiness = maxNoise * (i / n);
            blob(size, W / 2, H / 2, k, t - i * step, noisiness);
          }
        };
      }, "animation");
    }
  }, [meditating]);

  return <div id="animation" className="h-1/6" />;
}
