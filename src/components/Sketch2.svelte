<script lang="ts">
    import P5, { type p5 } from 'p5-svelte';
    import { coordinates, constellated, constellation_index} from '../stores';
    import { throttle} from 'lodash-es';
    import { get_css_var } from '../scripts/functions';
    import { moroccoData, lionData, runnerData, bioData, englandData, italyData, uaeData, usaData} from "../scripts/coordinateData";
    import { onDestroy, onMount } from 'svelte';
    import { rescale } from '../scripts/functions';
    export let index: number;
    let innerWidth: number;
    let innerHeight: number;
    //quadtree stuff
    let quadtree;
    const capacity = 4;
    //float 32 for performance boost
    const pointData = [moroccoData, italyData, uaeData, usaData, englandData];
    let morocco;
    //styling
    const spread = .5;
    const point = 2;
    const weight = 1;
    //forces
    const offset = 0.0005; //speed of particles moving
    const forceradius = 70; 
    let proximity = 10;
    let repulsionStrength = 7; //strength of mouse push
    const prox = [10, 10];
    const repuls = [0, 7];
    const snapStrength = 80;
    //data
    $: coordinate_index = constellation_index;
    $: if(index === 1){
      constellated.set(true);
    } else{
      constellated.set(false);
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
    let accent1, accent2, accent3;
    onMount( () =>{
      accent1 = get_css_var("--black").trim();
      accent2 = get_css_var("--accent2").trim();
      accent3 = get_css_var("--accent1").trim();
    })

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
        accent2.setAlpha(255);
        p5.fill(accent2);
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
        let stopThreshold = 0.1;
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
        morocco = new Float32Array(moroccoData.flatMap(coord => [coord.x, coord.y])); 
        p5.pixelDensity(p5.displayDensity());
        quadtree = new QuadTree(new Rectangle(p5.width / 2, p5.height / 2, p5.width, p5.height), capacity);
        accent1 = p5.color(accent1);
        accent2 = p5.color(accent2);
        accent3 = p5.color(accent3);
        //instantiating walkers and wobblers
        for (let i = 0; i < numWalkers; i++) {
          walkers.push(new Walker(p5));
        }
        for (let i = 0; i < 3; i++) {
          wobblers.push(new Wobbler(p5, p5.width*positions[i].x, p5.height*positions[i].y));
        }
      };

      // p5.keyPressed = () => { //testing map transition
      //   if (p5.keyCode === p5.ENTER) {
      //     changeMode();
      //   } 
      // }
  
      p5.draw = () => {
        //reset
        p5.clear();
        quadtree.clear();
        p5.background(accent1);
        //update positions and quadtree data
        walkers.forEach((walker, i) => {
          walker.repel(p5, p5.mouseX, p5.mouseY);
          if (walker.traveling && p5.dist(p5.mouseX, p5.mouseY, walker.x, walker.y) > proximity){ //it not within range, and if it's still not back in place, snap back
            walker.goBack(p5);
          }
          else if (!walker.mapmode && !walker.traveling) {walker.move(p5);}
          quadtree.insert(new Point(walker.x, walker.y, walker));
          p5.stroke(255);
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
            (isFar) ? accent2.setAlpha(0.1) : accent2.setAlpha(alpha);
            (isFar) ? p5.stroke(255) : p5.stroke(accent2);
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
                accent2.setAlpha(alpha);
                p5.stroke(255,255,255,alpha);
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
        //diagonal line decoration
        if(index === 1){
          accent2.setAlpha(255);
          p5.stroke(accent3);
          p5.strokeWeight(3);
          p5.stroke(accent2);
          p5.line(.5*p5.width - 261, 0, .5*p5.width, p5.height);
        }
        // visualizations for debugging, end of draw
        // drawMap(p5, morocco); 
        // p5.strokeWeight(1);
        // p5.stroke(255, 255, 0, 30); // Ensure this function call is valid
        // p5.noFill();
        // p5.rectMode(p5.CENTER);
        // drawQuadtree(p5, quadtree);
        // console.log(p5.frameRate());
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
    function changeMode(){
      morocco = new Float32Array(pointData[$constellation_index].flatMap(coord => [coord.x, coord.y])); 
      walkers.forEach( (walker, i) => {
        if(i < pointData[$constellation_index].length){ //if map make pos map
          walker.mapmode = true;
          proximity = prox[0];
          repulsionStrength = repuls[0];
          walker.ox = morocco[2*i];
          walker.oy = morocco[2*i + 1];
        } else {
          walker.mapmode = false;
          proximity = prox[1];
          repulsionStrength = repuls[1];
          walker.ox = walker.xnoise;
          walker.oy = walker.ynoise;
        }
        walker.traveling = true;
      })
    }


    function drawMap(p5, map){
      p5.noFill();
      p5.stroke(255)
      p5.strokeWeight(0.2);
      p5.beginShape();
      map.forEach(coord => {
        // let x = map(coord.lon, -20, 50, 0, width);
        let x = coord.x;
        // let y = map(coord.lat, minLat, maxLat, height, 0);
        let y = coord.y;
        p5.vertex(x, y);
      });
      p5.endShape(p5.CLOSE);
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
      /* filter: invert(); */
    }
  </style>