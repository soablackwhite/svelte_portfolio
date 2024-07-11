<script lang="ts">
    import P5, { type p5 } from 'p5-svelte';
    import { coordinates, constellated, constellation_index, delta, spinDelta, currentItem} from '../stores';
    import { throttle} from 'lodash-es';
    import { get_css_var } from '../scripts/functions';
    import { moroccoData, lionData, runnerData, bioData, englandData, italyData, uaeData, usaData} from "../scripts/coordinateData";
    import { onDestroy, onMount } from 'svelte';
    import type { Color } from 'p5';
    export let index: number;
    let innerWidth: number;
    let innerHeight: number;
    //quadtree stuff
    let quadtree;
    const capacity = 4;
    //float 32 for performance boost
    const pointData = [moroccoData, italyData, uaeData, usaData, englandData];
    let map;
    //styling
    const spread = 0.3;
    const point = 2; //values 0, 1
    const weight = 1;
    //onclick u can make black hole force radius high, repulsion strength negative
    //forces
    const offset = 0.00075; //speed of particles moving
    const forceradius = 140; //values 70, 140, 210, 1040 for fabric
    let proximity = 7;
    let repulsionStrength = 11  ;//values 7, 17, 51 with long range fabric, -20 for black hole
    const prox = [7, 11]; //1st is for regular stars 2nd is for constellation stars
    const snapStrength = 100; //under 200 values cause jitter, 1200 for rubber effect (experimental)
    //loading bar
    let cx:number, cy:number, s:number;
    let progress2 = 0;
    let max: number;
    //spinning canvas
    let angle = 0;
    let spinSpeed = 0; // initial spin speed
    const maxSpinSpeed = 0.1; // max spin speed
    const spinDecay = .9; // deceleration rate
    spinDelta.subscribe(value => {
      handleScroll(value);
    });

    //data
    $: coordinate_index = constellation_index;
    $: if(index === 1){
      constellated.set(true);
      changeMode();
      angle = 0;
    } else{
      if (index!=2) { angle = 0}
      constellated.set(false);
      changeMode();
      constellation_index.set(0);
    }
    $: if($constellated){
      changeMode();
      constellated.set(false);
    }
    //wobbler & walker stuff
    const range = 100;
    const walkers: Walker[] = [];
    const wobblers: Wobbler[] = [];
    const numWalkers = 1000;
    const positions = [
      { x: 1/7, y: 1/3},
      { x: 1/5, y: 6/7},
      { x: 1/5, y: 3/5},
    ]
    const thrupdate2 = throttle((p5: p5) => {
      wobblers.forEach((wobbler, i) => {
        $coordinates[i] = { ...$coordinates[i], x: wobbler.x, y: wobbler.y };
      });
    }, 100);
    // colors
    let accent1_s: string, accent2_s: string, accent3_s: string, white_s: string, black_s: string;
    let accent1: Color;
    let accent2: Color;
    let accent3: Color;
    let white: Color;
    let black: Color;
    onMount( () =>{
      black_s = get_css_var("--black").trim();
      white_s = get_css_var("--white").trim();
      accent1_s = get_css_var("--accent1").trim();
      accent2_s = get_css_var("--accent2").trim();
      accent3_s = get_css_var("--accent3").trim();
      let ang = parseFloat(get_css_var("--ang"));
      max =  -ang*13 + 1;
    })
    function handleScroll(deltaY: number) {
      spinSpeed =  Math.sign(deltaY) * maxSpinSpeed * Math.min(Math.abs(deltaY) / 100, 1);
    }

    class Wobbler { //this is the endpoint that controls the floating boxes
      ox; oy; //originf
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
        white.setAlpha(255);
        p5.fill(white);
        this.x = this.ox + this.xnoise;
        this.y = this.oy + this.ynoise;
        p5.ellipse(this.x - 50, this.y - 100, 15);
      }
    }
  
    class Walker {
      x; y; //position
      ox; oy; //original position
      xoff; yoff; //offset
      xnoise; ynoise;
      traveling; mapmode;

      constructor(p5:p5) {
        this.xoff = p5.random(5000);
        this.yoff = p5.random(5000);
        this.mapmode = false;
        this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -p5.width*spread, p5.width*(1 + spread));
        this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -p5.height*spread, p5.height*(1 + spread));
        this.x = this.xnoise;
        this.y = this.ynoise;
        this.ox = 0 + this.x;
        this.oy = 0 + this.y;
        this.traveling = false;
      }
  
      move(p5: p5) {
        this.xnoise = p5.map(p5.noise(this.xoff), 0, 1, -p5.width*spread, p5.width*(1 + spread));
        this.ynoise = p5.map(p5.noise(this.yoff), 0, 1, -p5.height*spread, p5.height*(1 + spread));
        this.xoff += offset;
        this.yoff += offset;
        this.x = this.xnoise;
        this.y = this.ynoise;
      }

      repel(p5: p5, mouseX:number, mouseY:number) {
        let d = p5.dist(mouseX, mouseY, this.x, this.y);
        if (d < forceradius) {
          if (!this.traveling && !this.mapmode){ //save last position before force was applied
            this.ox = this.x; 
            this.oy = this.y;
          }
          this.traveling = true;
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
      goBack(p5: p5){
        let xtarget = this.ox;
        let ytarget = this.oy;
        let d = p5.dist(xtarget, ytarget, this.x, this.y);
        let dx = xtarget - this.x;
        let dy = ytarget - this.y;
        let forceDirection = p5.createVector(dx, dy);
        //threshold to stop
        let stopThreshold = 1;
        if (d > stopThreshold) {
            //scale based on distance
            let forceMagnitude = p5.map(d, 0, p5.width / 2, 0, snapStrength); // Adjust the range and max force as needed
            forceDirection.setMag(forceMagnitude);
            // apply force
            this.x += forceDirection.x;
            this.y += forceDirection.y;
        } 
        else { //snap
            this.x = xtarget;
            this.y = ytarget;
        }
        if (d < 1) { 
          this.traveling = false;
        }
      }
    }
  
    const sketch = (p5:p5) => {
      p5.setup = () => {
        p5.createCanvas(innerWidth, innerHeight);
        cy = innerHeight/2;
        cx = innerWidth/2;
        s = 300;
        englandData.forEach((point)=>{ //recenter
            point.x += 700;
            point.y -= 300;
        })
        moroccoData.forEach((point)=>{ //recenter
            point.x += 770;
            point.y += 70;
        })
        uaeData.forEach((point)=>{ //recenter
            point.x += 600;
            point.y += 70;
        })
        usaData.forEach((point)=>{ //recenter
            point.x += 650;
            point.y += 150;
        })
        italyData.forEach((point)=>{ //recenter
            point.x += 700;
            point.y += 50;
        })
        map = new Float32Array(moroccoData.flatMap(coord => [coord.x, coord.y])); 
        p5.pixelDensity(p5.displayDensity());
        quadtree = new QuadTree(new Rectangle(p5.width / 2, p5.height / 2, p5.width, p5.height), capacity);
        white = p5.color(white_s);
        black = p5.color(black_s);
        accent1 = p5.color(accent1_s);
        accent2 = p5.color(accent2_s);
        accent3 = p5.color(accent3_s);
        //instantiating walkers and wobblers
        for (let i = 0; i < numWalkers; i++) {
          walkers.push(new Walker(p5));
        }
        for (let i = 0; i < 3; i++) {
          wobblers.push(new Wobbler(p5, p5.width*positions[i].x, p5.height*positions[i].y));
        }
      };
  
      p5.draw = () => {
        //reset
        p5.clear();
        quadtree.clear();
        p5.background(0, 10);
        //loading bar
        if(index === 2){
          // previously 235 for --ang = 18deg
          let progress = p5.map($delta, 0, max, 3 * p5.PI / 2, p5.PI / 2);
          // progress2 = p5.lerp(progress2, $currentItem/12, 0.15);
          // let progress = p5.map(progress2, 0, 1, 3 * p5.PI / 2, p5.PI / 2);
          s = 280;
          p5.noFill();
          p5.stroke(white);
          p5.strokeWeight(1);
          p5.arc(cx, cy, s, s, 0, 2*p5.PI);
          //white arc outline
          s = 260;
          // smol white arc
          p5.stroke(white);
          p5.strokeWeight(6);
          p5.fill(white);
          p5.arc(cx, cy, s, s, progress, p5.PI / 2, p5.PIE);
          // mask
          p5.fill(black);
          p5.noStroke();
          p5.rect(p5.width / 2 - 10, 0, s, p5.height);
        }
        p5.push();
        p5.translate(p5.width/2, p5.height/2);
        p5.rotate(angle);
        p5.translate(-p5.width/2, -p5.height/2);
        //update positions and quadtree data
        walkers.forEach((walker, i) => {
          if (index === 2){
            let mouseX = p5.mouseX - p5.width / 2;
            let mouseY = p5.mouseY - p5.height / 2;
            let rotatedMouse = p5.createVector(mouseX, mouseY).rotate(-angle); // Rotate mouse coordinates back
            walker.repel(p5, rotatedMouse.x + p5.width / 2, rotatedMouse.y + p5.height / 2);
            if (walker.traveling && p5.dist(rotatedMouse.x + p5.width / 2, rotatedMouse.y + p5.height / 2, walker.x, walker.y) > proximity) {
              walker.goBack(p5);
            } else if (!walker.mapmode && !walker.traveling) {
              walker.move(p5);
            }
          } else{
            walker.repel(p5, p5.mouseX, p5.mouseY);
            if (walker.traveling && p5.dist(p5.mouseX, p5.mouseY, walker.x, walker.y) > proximity){ //it not within range, and if it's still not back in place, snap back
              walker.goBack(p5);
            }
            else if (!walker.mapmode && !walker.traveling) {walker.move(p5);}
          }
          
          quadtree.insert(new Point(walker.x, walker.y, walker));
          p5.stroke(white);
          p5.strokeWeight(point);
          p5.point(walker.x, walker.y);
        });
        //proximity checks
        walkers.forEach( (walker, i) => {
          // search area + points in range
          let searchArea = new Circle(walker.x, walker.y, proximity);
          let pointsInRange = quadtree.query(searchArea);

          //connect neighbors
          if(walker.mapmode && !walker.traveling && i < walkers.length - 1){ //if map mode and point not traveling
            let d = p5.dist(walkers[i + 1].x, walker.x, walkers[i+1].y, walker.y); //dist between point and neighbor
            let alpha = 255 - p5.map(d, 0, proximity, 0, 255);
            let isFar = d > proximity;
            (isFar) ? white.setAlpha(0.1) : white.setAlpha(alpha);
            (isFar) ? p5.stroke(white) : p5.stroke(white);
            p5.strokeWeight((d === 0) ? weight : weight - p5.map(d, 0, proximity, weight, 0));
            (isFar) ? p5.strokeWeight(.2) : true;
            if (d < 3 * proximity){
              p5.line(walker.x, walker.y, walkers[i + 1].x, walkers[i + 1].y);
            }
          }
          // connect nearby points
          pointsInRange.forEach(other => {
            if (other.userData !== walker) { // no self-connection
              let d = other.sqDistanceFrom(walker);
                let alpha = p5.map(d, 0, proximity * proximity, 255, 0);
                white.setAlpha(alpha);
                // p5.stroke(255, 255, 255, alpha);
                p5.stroke(white);
                p5.strokeWeight((d === 0) ? weight :p5.map(d, 0, proximity * proximity, weight, 0));
                p5.line(walker.x, walker.y, other.x, other.y);
            }
          });
        });
        //wobbler movement
        wobblers.forEach((wobbler, i) => {
          wobbler.move(p5);
          wobbler.display(p5);
        });
        //send positions to divs
        thrupdate2(p5);
        // visualizations for debugging, end of draw
        p5.strokeWeight(.4);
        white.setAlpha(10);
        p5.stroke(white);
        // p5.stroke(255, 255, 255, 10);
        p5.noFill();
        p5.rectMode(p5.CENTER);
        drawQuadtree(p5, quadtree);
        p5.pop()
        angle += spinSpeed;
        if (Math.abs(spinSpeed) > 0) {
          // spinSpeed = Math.max(spinSpeed - 10*spinDecay, 0);
          spinSpeed*=spinDecay;
        }
        white.setAlpha(255);
      };

      p5.windowResized = () => {
        p5.resizeCanvas(innerWidth, innerHeight);
        quadtree = new QuadTree(new Rectangle(p5.width / 2, p5.height / 2, p5.width, p5.height), capacity);
        //responsively reposition wobblers
        wobblers.forEach((wobbler, i)=>{
          wobbler.ox = p5.width * positions[i].x;
          wobbler.oy = p5.height * positions[i].y;
        })
      };
    };
    function drawQuadtree(p5, quadtree) {
      if (!quadtree) return;
      p5.rect(quadtree.boundary.x, quadtree.boundary.y, quadtree.boundary.w * 2, quadtree.boundary.h * 2);

      if (quadtree.divided) {
        drawQuadtree(p5, quadtree.northeast);
        drawQuadtree(p5, quadtree.northwest);
        drawQuadtree(p5, quadtree.southeast);
        drawQuadtree(p5, quadtree.southwest);
      }
    }
    function drawMap(p5, map){
      p5.noFill();
      p5.stroke(white)
      p5.strokeWeight(0.2);
      p5.beginShape();
      map.forEach(coord => {
        let x = coord.x;
        let y = coord.y;
        p5.vertex(x, y);
      });
      p5.endShape(p5.CLOSE);
    }
    function changeMode(){
      map = new Float32Array(pointData[$constellation_index].flatMap(coord => [coord.x, coord.y])); 
      walkers.forEach( (walker, i) => {
        if(!$constellated){
          walker.mapmode = false;
          proximity = prox[0];
          walker.ox = walker.xnoise;
          walker.oy = walker.ynoise;
        }
        else if(i < pointData[$constellation_index].length){ //if map make pos map
          walker.mapmode = true;
          proximity = prox[0];
          walker.ox = map[2*i];
          walker.oy = map[2*i + 1];
        } else {
          walker.mapmode = false;
          proximity = prox[1];
          walker.ox = walker.xnoise;
          walker.oy = walker.ynoise;
        }
        walker.traveling = true;
      })
    }
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
      /* filter: invert(var(--dark)); */
      /* filter: invert(1); */
    }
  </style>