<script lang="ts">
    import P5, { type p5 } from 'p5-svelte';
    import { coordinates, constellated, constellation_index, delta, spinDelta, currentItem} from '../stores';
    import { throttle} from 'lodash-es';
    import { get_css_var, rescale} from '../scripts/functions';
    import { moroccoData, englandData, italyData, uaeData, usaData} from "../scripts/coordinateData";
    import { moroccoMobile, englandMobile, italyMobile, uaeMobile, usaMobile } from '../scripts/coordinateMobile';
    import { onMount } from 'svelte';
    import type { Color } from 'p5';
    export let index: number;
    let innerWidth: number;
    let innerHeight: number;
    let isMobile: boolean;
    //quadtree stuff
    let quadtree;
    const capacity = 6;
    //float 32 for performance boost
    let map: Float32Array;
    let scaledMoroccoData = moroccoData.map(coord => ({...coord}));
    let scaledItalyData = italyData.map(coord => ({...coord}));
    let scaledUaeData = uaeData.map(coord => ({...coord}));
    let scaledUsaData = usaData.map(coord => ({...coord}));
    let scaledEnglandData = englandData.map(coord => ({...coord}));
    let pointData = [scaledMoroccoData, scaledItalyData, scaledUaeData, scaledUsaData, scaledEnglandData];
    //styling
    const spread = 0;
    let point = 0; //values 0, 1
    let weight = .9;
    //scaling map
    let originalWidth: number;
    let originalHeight: number;
    let aspectRatio: number;
    let scale;

    //forces
    let parameters = 0;
    const offset = 0.00035; //speed of particles moving
    let forceradius = 140; //values 70, 140, 210, 1040 for fabric
    let proximity = 12;
    let repulsionStrength = 11  ;//values 7, 17, 51 with long range fabric, -20 for black hole
    let prox = [12, 11]; //1st is for regular stars 2nd is for constellation stars
    let snapStrength = 100; //under 200 values cause jitter, 1200 for rubber effect (experimental)
    //loading bar
    let cx:number, cy:number, s:number;
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
      spinSpeed = 0;
    } else{
      if (index!=2) { angle = 0; spinSpeed = 0;}
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
    let accent1_s:string, accent2_s:string, accent3_s:string, white_s:string, black_s: string;
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
      s =  parseFloat(get_css_var("--media_size").trim()) + 50 - 20;
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
            let forceMagnitude = p5.map(d, 0, p5.width/2, 0, snapStrength);
            forceDirection.setMag(forceMagnitude);
            // evaluating whether it's gonna overshoot
            if(p5.dist(this.x + forceDirection.x, this.y + forceDirection.y, xtarget, ytarget) > d)
            {
              forceDirection.x = 0;
              forceDirection.y = 0;
            }
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
    function scaleConstellation(w: number, h: number){      
      // if (w / h > aspectRatio) {
      //   scale = h / originalHeight;
      // } else {
      //   scale = w / originalWidth;
      // }
      scale = h / originalHeight;
      cy = h / 2;
      if (w < 400){
        cx = 7 * w / 10;
      } else {
        cx = w / 2;
      }
      if ( w > 700){ //side const
        scaledMoroccoData = scaleCoordinates(moroccoData, scale, scale);
        scaledItalyData = scaleCoordinates(italyData, scale, scale);
        scaledUaeData = scaleCoordinates(uaeData, scale, scale);
        scaledUsaData = scaleCoordinates(usaData, scale, scale);
        scaledEnglandData = scaleCoordinates(englandData, scale, scale);
      } else { //center const
        scaledMoroccoData = scaleCoordinates(moroccoMobile, scale, scale);
        scaledItalyData = scaleCoordinates(italyMobile, scale, scale);
        scaledUaeData = scaleCoordinates(uaeMobile, scale, scale);
        scaledUsaData = scaleCoordinates(usaMobile, scale, scale);
        scaledEnglandData = scaleCoordinates(englandMobile, scale, scale);
      }
      pointData = [scaledMoroccoData, scaledItalyData, scaledUaeData, scaledUsaData, scaledEnglandData];
      map = new Float32Array(pointData[$constellation_index].flatMap(coord => [coord.x, coord.y]));
    }
    //scaling function
    function scaleCoordinates(data, scaleX: number, scaleY:number) {
      return data.map(coord => ({
        x: coord.x * scaleX,
        y: coord.y * scaleY
      }));
    }
  
    const sketch = (p5:p5) => {
      p5.mouseClicked = () =>{
        console.log(innerHeight);
        parameters += 1;
        parameters %= 4;
        switch (parameters){
          case 0: //regular
            forceradius = 140; //values 70, 140, 210, 1040 for fabric
            repulsionStrength = 11  ;//values 7, 17, 51 with long range fabric, -20 for black hole
            snapStrength = 100;
            break
          case 1: //fabric
            forceradius = 500; //values 70, 140, 210, 1040 for fabric
            repulsionStrength = 42  ;//values 7, 17, 51 with long range fabric, -20 for black hole
            snapStrength = 100;
            break
          case 2: //black hole
            forceradius = 300; //values 70, 140, 210, 1040 for fabric
            repulsionStrength = -20;//values 7, 17, 51 with long range fabric, -20 for black hole
            snapStrength = 100;
            break
          case 3:
            forceradius = 3000; //values 70, 140, 210, 1040 for fabric
            repulsionStrength = 7; //values 7, 17, 51 with long range fabric, -20 for black hole
            snapStrength = -10;
            break
        }
      }
      p5.setup = () => {
        p5.createCanvas(innerWidth, innerHeight);
        isMobile = (innerWidth > 765);
        originalWidth = (isMobile) ? 1440 : 365;
        originalHeight = (isMobile) ? 780 : 667;
        aspectRatio = originalWidth / originalHeight;
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
        englandMobile.forEach((point)=>{ //recenter
          point.x -= 120;
          point.y -= 120;
        })
        moroccoMobile.forEach((point)=>{ //recenter
          point.y += 140;
        })
        uaeMobile.forEach((point)=>{ //recenter
          point.y += 180;
          point.x -= 40;
        })
        usaMobile.forEach((point)=>{ //recenter
          point.y += 240;
          point.x -= 20;
        })
        italyMobile.forEach((point)=>{ //recenter
          point.y += 120;
          point.x -= 30;
        })
        scaleConstellation(innerWidth, innerHeight);
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
        //reset
        p5.clear();
        quadtree.clear();
        // black.setAlpha(60);
        p5.background(black);
        // black.setAlpha(255);
        
        //loading bar
        if(index === 2 && s > 220){
          // previously 235 for --ang = 18deg
          let progress = p5.map($delta, 0, max, 3 * p5.PI / 2, p5.PI / 2);
          p5.noFill();
          p5.stroke(white);
          p5.strokeWeight(1);
          p5.arc(cx, cy, s, s, 0, 2*p5.PI);
          //white arc outline
          let s2 = s - 20;
          // smol white arc
          p5.stroke(white);
          p5.strokeWeight(6);
          p5.fill(white);
          p5.arc(cx, cy, s2, s2, progress, p5.PI / 2, p5.PIE);
          // mask
          p5.fill(black);
          p5.noStroke();
          p5.rect(p5.width / 2 - 10, 0, s2, p5.height);
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
          if(walker.mapmode && index===1 && !walker.traveling && i < walkers.length - 1){ //if map mode and point not traveling
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
          for (let i = 0; i < pointsInRange.length; i++) {
            const other = pointsInRange[i];
            if (other.userData !== walker) { // no self-connection
                let d = other.sqDistanceFrom(walker);
                let alpha = p5.map(d, 0, proximity * proximity, 255, 0);
                white.setAlpha(alpha);
                p5.stroke(white);
                p5.strokeWeight((d === 0) ? weight : p5.map(d, 0, proximity * proximity, weight, 0));
                p5.line(walker.x, walker.y, other.x, other.y);
            }
          }
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
        p5.noFill();
        p5.rectMode(p5.CENTER);
        drawQuadtree(p5, quadtree);
        p5.pop()
        angle += spinSpeed;
        if (Math.abs(spinSpeed) > 0) {
          spinSpeed*=spinDecay;
        }
        white.setAlpha(255);
      };

      p5.windowResized = () => {
        p5.resizeCanvas(innerWidth, innerHeight);
        isMobile = (innerWidth > 765);
        quadtree = new QuadTree(new Rectangle(p5.width / 2, p5.height / 2, p5.width, p5.height), capacity);
        //responsively reposition wobblers
        wobblers.forEach((wobbler, i)=>{
          wobbler.ox = p5.width * positions[i].x;
          wobbler.oy = p5.height * positions[i].y;
        })
        scaleConstellation(innerWidth, innerHeight);
        changeMode();
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
      constellated.set( (index  === 1) ? true : false );
      walkers.forEach( (walker, i) => {
        if(!$constellated){
          if(index === 3){ //ruban banner for project
            walker.mapmode = true;
            proximity = 6;
            // point = 1;
            let upperborder = (!isMobile) ? innerWidth/2 - 100 : cy - 100 ;
            let lowerborder = (!isMobile) ? innerWidth/2 + 100 : cy + 100 ;
            if (isMobile){
              walker.oy = (Math.random() < 0.5) ? upperborder : lowerborder;
              walker.ox = Math.random()*innerWidth;
            } else{
              walker.ox = (Math.random() < 0.5) ? upperborder : lowerborder;
              walker.oy = Math.random()*innerHeight;
            }
            
          } 
          else if (index === 2){ //circle for skills
            // point = 0;
            let rad = 160;
            let rad2 = 160;
            proximity = 0;
            let radius = (Math.random()<0.2) ? rad - Math.random() * 10 :  rad2 - Math.random() * 10;
            let angle = Math.random() * 2*Math.PI;
            walker.mapmode = true;
            walker.oy = cy + Math.sin(angle)*radius;
            walker.ox =  cx + Math.cos(angle)*radius;
          } 
          else {
            // point = 0;
            walker.mapmode = false;
            proximity = prox[0];
            walker.ox = walker.xnoise;
            walker.oy = walker.ynoise;
          }
        }
        else if(i < pointData[$constellation_index].length){ //if map make pos map
          walker.mapmode = true;
          walker.ox = map[2*i];
          walker.oy = map[2*i + 1];
        } else {
          walker.mapmode = false;
          proximity = (innerWidth > 765 ) ? prox[1] : 15;
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