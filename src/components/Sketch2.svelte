<script lang="ts">
    import { text } from '@sveltejs/kit';
    import P5, { type p5 } from 'p5-svelte';
    export let index: number;
    let innerWidth: number;
    let innerHeight: number;
    // prox 60 walk 220
    // prox 80 walk 120
    const proximity = 60; 
    const walkers = [];
    const numWalkers = 100;
    const point = 1.5;
    const weight = 1;
    const offset = 0.0005;
    const repulsionStrength = 7; //strength of mouse push
    // wobbling
    const wobblers = [];
    let arm1;
    const range = 100;

    class Arm {
      p1; p2; //points of arm
      x; y; radius; angle; incr; //3rd point properties, it rotates
      constructor(p5:p5, p1:Wobbler) {
        this.p1 = p1; //end point
        this.p2 = [0, 2]; //middle joint
        this.x = 150; //center coord
        this.y = 150; //center coord
        this.radius = 20;
        this.angle = 0;
        this.incr = 0.01;
      }
      move(p5:p5){
        this.angle += this.incr;
      }
      display(p5:p5){
        let x = this.x + p5.cos(this.angle)*this.radius;
        let y = this.y + p5.sin(this.angle)*this.radius;
        p5.fill(50,0,0);
        p5.ellipse(x, y, 10);
      }
    }

    class Wobbler {
      ox; oy; //origin
      xoff; yoff; //offset
      xnoise; ynoise; //noise value

      constructor(p5:p5, ox:number, oy: number) {
        this.xoff = p5.random(1000);
        this.yoff = p5.random(1000);
        this.ox = ox;
        this.oy = oy;
        this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -range, range);
        this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -range, range);
      }
      move(p5: p5) {
        this.xoff += offset;
        this.yoff += offset;
        this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -range, range);
        this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -range, range);
      }
      display(p5:p5) {
        p5.fill(255);
        let x = this.ox + this.xnoise;
        let y = this.oy + this.ynoise;
        p5.ellipse(x, y, 20);
      }
    }
  
    class Walker {
      x; y; //position
      xoff; yoff; //offset

      constructor(p5:p5) {
        this.xoff = p5.random(5000);
        this.yoff = p5.random(5000);
        this.x = p5.map(p5.noise(this.xoff), 0, 1, 0, p5.width);
        this.y = p5.map(p5.noise(this.yoff), 0, 1, 0, p5.height);
      }
  
      move(p5: p5) {
        this.x = p5.map(p5.noise(this.xoff), 0, 1, 0, p5.width);
        this.y = p5.map(p5.noise(this.yoff), 0, 1, 0, p5.height);
        this.xoff += offset;
        this.yoff += offset;
      }
      repel(p5: p5, mouseX:number, mouseY:number) {
        let d = p5.dist(mouseX, mouseY, this.x, this.y);
        if (d < proximity) {
          let dx = this.x - mouseX;
          let dy = this.y - mouseY;
          let forceDirection = p5.createVector(dx, dy);
          let forceMagnitude = repulsionStrength * (1 - (d / proximity));
          forceDirection.setMag(forceMagnitude);
          // apply force
          this.x += forceDirection.x;
          this.y += forceDirection.y;
        }
      }
    }
  
    const sketch = (p5:p5) => {
      p5.setup = () => {
        p5.createCanvas(innerWidth, innerHeight);
        p5.pixelDensity(p5.displayDensity());
        p5.noStroke();
        for (let i = 0; i < numWalkers; i++) {
          walkers.push(new Walker(p5));
        }
        wobblers.push(new Wobbler(p5, innerWidth/8, innerHeight/4));
        wobblers.push(new Wobbler(p5, innerWidth/9, 3*innerHeight/4));
        wobblers.push(new Wobbler(p5, 3*innerWidth/4, 3*innerHeight/4));

        arm1 = new Arm(wobblers[0], wobblers[1], )
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
          walkers.forEach(walker2 => {
            let d = p5.dist(walker.x, walker.y, walker2.x, walker2.y);
            if (d < proximity) {
              p5.stroke(255, 255-p5.map(d, 0, proximity, 0, 255));
              p5.strokeWeight((d===0)?point:weight-p5.map(d, 0, proximity, 0, weight));
              p5.line(walker.x, walker.y, walker2.x, walker2.y);
            }
          });
        });
        wobblers.forEach(wobbler => {
          wobbler.move(p5);
          wobbler.display(p5);
        })
        if(index === 1){
          p5.stroke(250, 245, 245);
          p5.strokeWeight(1);
          // p5.line(0, p5.mouseY, p5.width, p5.mouseY);
          // p5.line(p5.mouseX, 0, p5.mouseX, p5.height);
          p5.line(0, .5*p5.height + 126, p5.width, .5*p5.height + 126);
          p5.line(.5*p5.width - 266, 0, .5*p5.width, p5.height);
          // p5.text(`${100*p5.round(p5.mouseX/p5.width, 4)} and ${100*p5.round(p5.mouseY/p5.height, 4)}`, p5.mouseX, p5.mouseY);
        }
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
  