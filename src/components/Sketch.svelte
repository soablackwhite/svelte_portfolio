<script lang="ts">
  import P5, { type p5 } from 'p5-svelte';

  //RESPONSIVE
  $: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0
  
  //Parameters
  let xoff:number, yoff:number;
  let mode: any;
  mode = false;
  let frq = 199; //frequency of big shapes, every frq frames
  const size = 50;
  const inc = 0.05;
  const density = 10;

  const sketch = (p5: p5) => {
    p5.setup = () => {
      p5.createCanvas(innerWidth, innerHeight);
      p5.pixelDensity(p5.displayDensity());
      p5.background(p5.color("#121212"));
      p5.rectMode(p5.CENTER);
      xoff = p5.random(1);
      yoff = p5.random(1);
    };

    function draw_tissue(auto: any) {
      // p5.background(0,0,0, 2);
      p5.noFill();
      p5.strokeWeight(1);
      xoff += (inc - .02) * auto;
      for (let i = 0; i < density; i++)
      {
        p5.push();
        let _x = p5.noise(xoff)*p5.width;
        let _y = p5.noise(yoff)*p5.height;
        if(!auto)
        {
            _x = p5.mouseX;
            _y = p5.mouseY;
        }
        let isBig:any;
        isBig = (p5.frameCount%frq === 0);
        let _r = p5.random(7-4*isBig); //if big shape time, make it fair chances to get any shape 
        let _hyp = p5.sqrt(p5.pow(p5.width/2, 2) + p5.pow(p5.height/2, 2));
        let _d = p5.map(p5.dist(_x, _y, p5.width/2, p5.height/2), 1, _hyp, 0, 1);
        //only first shape gets bold on drums
        let _s;
        if(i === 0 && p5.frameCount%frq==0)
        {
          _s = size + p5.random(75,250);
          p5.stroke(255 - mode*237, mode*10 + p5.random(25));
        }
        else
        { 
          _s = size + p5.random(-20,20);
          p5.stroke(255 - mode*237, (5+15*mode)*_d);
        }
        //circle
        if (_r < 1)
        p5.rect(_x, _y, _s, _s); 
        //square
        else if(_r < 2)
        p5.circle(_x, _y, _s); 
        //triangle
        else
        {
          //use triangle inside a circle
          let _angle = p5.random(0, 2*p5.PI);
          let _angle2 = p5.random(0, 2*p5.PI);
          let _angle3 = p5.random(0, 2*p5.PI);
          p5.triangle(_x+_s*p5.cos(_angle), _y+_s*p5.sin(_angle), _x+_s*p5.cos(_angle2), _y+_s*p5.sin(_angle2), _x+_s*p5.cos(_angle3), _y+_s*p5.sin(_angle3))
        }
        p5.pop();
      }
      yoff += inc*auto;
    }
    // main
    p5.draw = () => {
      if(p5.pmouseX!=p5.mouseX || p5.pmouseY!=p5.mouseY)
      {
        draw_tissue(false);
      }
      draw_tissue(true);
    };
    // window size update
    p5.windowResized = () => {
      p5.resizeCanvas(innerWidth, innerHeight);
    };
  };
</script>
<div id="p5" style="width:100vw; height:100vh"></div>
<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight/>


<style>
  #p5 {
    width:100vw; 
    height:100vh;
    position: fixed !important;
    left: 0%;
    top: 0%;
    z-index: 0;
  }
</style>

<P5 {sketch} />