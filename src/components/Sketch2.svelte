<script lang="ts">
    // import { text } from '@sveltejs/kit';
    import P5, { type p5 } from 'p5-svelte';
    import { coordinates } from '../stores';
    import { throttle, debounce} from 'lodash-es';
    import { onMount } from 'svelte';
    export let index: number;
    let innerWidth: number;
    let innerHeight: number;
    // prox 60 walk 220; prox 80 walk 120
    const proximity = 40; 
    const forceradius = 80; 
    const spread = 0.2;
    const walkers = [];
    const numWalkers = 100;
    const point = .6;
    const weight = .5;
    const offset = 0.001;
    const repulsionStrength = 10; //strength of mouse push
    // wobbling
    const wobblers = [];
    const range = 100;
    //arms
    let arm0, arm1, arm2;
    const thrupdate2 = throttle((p5: p5) => {
      wobblers.forEach((wobbler, i) => {
        coordinates.update(items => {
          const updatedItems = [...items];
          updatedItems[i] = { ...updatedItems[i], x: wobbler.x, y: wobbler.y };
          return updatedItems;
        });
      });
    }, 100);

    class Arm {
      p1; 
      // p2; //points of arm
      ox; oy; radius; angle; incr; //3rd point properties, it rotates
      constructor(p5:p5, p1:Wobbler) {
        this.p1 = p1; //end point
        this.ox = p5.width/2; //center coord
        this.oy = p5.height/2; //center coord
        this.radius = 50;
        this.angle = 0;
        this.incr = 0.03 ;
        // this.p2 = new Wobbler(p5, (p1.x + this.ox)/2, (p1.y + this.oy)/2); //middle joint
        // wobblers.push(this.p2); //add to wobblers
      }
      move(p5:p5){
        this.ox = p5.width/2; //center coord
        this.oy = p5.height/2; //center coord
        this.angle += this.incr;
        // this.p2.move(p5);
        // this.p2.display(p5);
      }
      display(p5:p5){
        let x = this.ox + p5.cos(this.angle)*this.radius;
        let y = this.oy + p5.sin(this.angle)*this.radius;
        p5.stroke(255);
        p5.strokeWeight(1); //can customize this 
        // p5.line(this.p2.x, this.p2.y, x, y); //line to joint
        p5.strokeWeight(.8); //can customize this 
        p5.stroke(255, 200);
        // p5.line(this.p2.x, this.p2.y, this.p1.x, this.p1.y); //line to endpoint
      }
    }

    class Wobbler { //this is the endpoint that controls the floating boxes
      ox; oy; //origin
      xoff; yoff; //offset
      xnoise; ynoise; //noise value
      x; y; //position

      constructor(p5:p5, ox:number, oy: number) {
        this.xoff = p5.random(1000);
        this.yoff = p5.random(1000);
        this.ox = ox;
        this.oy = oy;
        this.x = ox;
        this.y = oy;
        this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -range*1.5, range*1.5);
        this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -range, range);
      }
      move(p5: p5) {
        //this used to be offset
        this.xoff += 0.002;
        this.yoff += 0.002;
        this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -range, range);
        this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -range, range);
      }
      display(p5:p5) {
        p5.fill(255);
        this.x = this.ox + this.xnoise;
        this.y = this.oy + this.ynoise;
        p5.ellipse(this.x - 50, this.y - 100, 15);
      }
    }
  
    class Walker {
      x; y; //position
      xoff; yoff; //offset

      constructor(p5:p5) {
        this.xoff = p5.random(5000);
        this.yoff = p5.random(5000);
        this.x = p5.map(p5.noise(this.xoff), 0, 1, -p5.width*spread, p5.width*(1 + spread));
        this.y = p5.map(p5.noise(this.yoff), 0, 1, -p5.height*spread, p5.height*(1 + spread));
      }
  
      move(p5: p5) {
        this.x = p5.map(p5.noise(this.xoff), 0, 1, -p5.width*spread, p5.width*(1 + spread));
        this.y = p5.map(p5.noise(this.yoff), 0, 1, -p5.height*spread, p5.height*(1 + spread));
        this.xoff += offset;
        this.yoff += offset;
      }
      repel(p5: p5, mouseX:number, mouseY:number) {
        let d = p5.dist(mouseX, mouseY, this.x, this.y);
        if (d < forceradius) {
          let dx = this.x - mouseX;
          let dy = this.y - mouseY;
          let forceDirection = p5.createVector(dx, dy);
          let forceMagnitude = repulsionStrength * (1 - (d / forceradius));
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
        wobblers.push(new Wobbler(p5, p5.width/4, p5.height/3));
        wobblers.push(new Wobbler(p5, p5.width/5, 6*p5.height/7));
        wobblers.push(new Wobbler(p5, 3*p5.width/4, 1*p5.height/3));

        arm0 = new Arm(p5, wobblers[0]);
        arm1 = new Arm(p5, wobblers[1]);
        arm2 = new Arm(p5, wobblers[2]);
      };
  
      p5.draw = () => {
        console.log(p5.frameRate());
        p5.clear();
        if(index===1){
          arm0.move(p5);
          arm1.move(p5);
          arm2.move(p5);
        }
        
        // p5.background(0, 0, 0, 60);
        // p5.background(18, 18, 18, 255);  
        walkers.forEach(walker => {
          const dmouse = p5.dist(walker.x, walker.y, p5.mouseX, p5.mouseY);
          if (dmouse < forceradius) {
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
          wobblers.forEach( wobbler=> {
            let d = p5.dist(walker.x, walker.y, wobbler.x, wobbler.y);
            if (d < proximity) {
              p5.stroke(255, 255-p5.map(d, 0, proximity, 0, 255));
              p5.strokeWeight((d===0)?point:weight-p5.map(d, 0, proximity, 0, weight));
              p5.line(walker.x, walker.y, wobbler.x, wobbler.y);
            }
          });
        });
        wobblers.forEach((wobbler, i) => {
          wobbler.move(p5);
          wobbler.display(p5);
          // thrupdate(wobbler.x, wobbler.y, i);
          // coordinates.update(items => {
          //   const updatedItems = [...items];
          //   updatedItems[i] = { ...updatedItems[i], x: wobbler.x, y: wobbler.y };
          //   return updatedItems;
          // });
        });
        thrupdate2(p5);
        if(index === 1){
          p5.stroke(250, 245, 245);
          p5.strokeWeight(2);
          //this is with the center pic
          // p5.line(0, .5*p5.height + 126, p5.width, .5*p5.height + 126);
          // p5.line(.5*p5.width - 266, 0, .5*p5.width, p5.height);
          // this is whout the center pic
          p5.line(.5*p5.width + 98, 0, .5*p5.width + 98, p5.height);
          p5.line(0, .5*p5.height + 56, p5.width, .5*p5.height + 56);

        }
      };
      p5.windowResized = () => {
        p5.resizeCanvas(innerWidth, innerHeight);
        //responsively reposition wobblers
        wobblers[0].ox= 1*p5.width/4
        wobblers[0].oy= 1*p5.height/3;
        wobblers[1].ox = 1*p5.width/5, 
        wobblers[1].oy = 5*p5.height/6;
        wobblers[2].ox = 3*p5.width/4;
        wobblers[2].oy = 1*p5.height/3;
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