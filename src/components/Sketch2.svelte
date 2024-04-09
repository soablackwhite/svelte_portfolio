<script lang="ts">
    import P5 from 'p5-svelte';
    import { onMount } from 'svelte';
  
    let innerWidth: number;
    let innerHeight: number;
  
    const proximity = 60;
    const repulsionStrength = 10; // Increased strength for a noticeable effect
    const points = [];
    const numPoints = 300;
    const walkers = [];
    const numWalkers = 200;
    const offset = 0.001;
  
    class Walker {
      x;
      y;
      xoff;
      yoff;
  
      constructor(p5) {
        this.xoff = p5.random(5000);
        this.yoff = p5.random(5000);
        this.x = p5.map(p5.noise(this.xoff), 0, 1, 0, p5.width);
        this.y = p5.map(p5.noise(this.yoff), 0, 1, 0, p5.height);
      }
  
      move(p5) {
        this.x = p5.map(p5.noise(this.xoff), 0, 1, 0, p5.width);
        this.y = p5.map(p5.noise(this.yoff), 0, 1, 0, p5.height);
        this.xoff += offset;
        this.yoff += offset;
      }
  
      repel(p5, mouseX, mouseY) {
      let d = p5.dist(mouseX, mouseY, this.x, this.y);
      if (d < proximity) {
        let dx = this.x - mouseX;
        let dy = this.y - mouseY;
        let forceDirection = p5.createVector(dx, dy);
        let forceMagnitude = repulsionStrength * (1 - (d / proximity));
        forceDirection.setMag(forceMagnitude);

        // Apply the repulsion to the walker's position
        this.x += forceDirection.x;
        this.y += forceDirection.y;
      }
    }
    }
  
    const sketch = (p5) => {
      p5.setup = () => {
        p5.createCanvas(innerWidth, innerHeight);
        p5.pixelDensity(p5.displayDensity());
        p5.noStroke();
        for (let i = 0; i < numPoints; i++) {
          points.push({
            x: p5.random(p5.width),
            y: p5.random(p5.height),
          });
        }
        for (let i = 0; i < numWalkers; i++) {
          walkers.push(new Walker(p5));
        }
      };
  
      p5.draw = () => {
        p5.clear();
        // p5.background(0, 0, 0, 60);
        // p5.background(18, 18, 18, 255);  
        walkers.forEach(walker => {
          const dmouse = p5.dist(walker.x, walker.y, p5.mouseX, p5.mouseY);
          if (dmouse < proximity) {
            walker.repel(p5, p5.mouseX, p5.mouseY);
          }
          else {walker.move(p5);}
  
          // points.forEach(point => {
          //   let d = p5.dist(walker.x, walker.y, point.x, point.y);
          //   if (d < proximity) {
          //     p5.stroke(255, 255-p5.map(d, 0, proximity, 0, 255));
          //     p5.line(walker.x, walker.y, point.x, point.y);
          //   }
          // });
          walkers.forEach(walker2 => {
            let d = p5.dist(walker.x, walker.y, walker2.x, walker2.y);
            if (d < proximity) {
              p5.stroke(255, 255-p5.map(d, 0, proximity, 0, 255));
              p5.strokeWeight(0.8-p5.map(d, 0, proximity, 0, 0.8));
              p5.line(walker.x, walker.y, walker2.x, walker2.y);
            }
          });
        });
      };
  
      p5.windowResized = () => {
        p5.resizeCanvas(innerWidth, innerHeight);
      };
    };
  </script>
  
  <svelte:window bind:innerWidth bind:innerHeight/>
  
  <div id="p5">
    <P5 {sketch} />
  </div>
  
  <style>
    #p5 {
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 0;
    }
  </style>
  