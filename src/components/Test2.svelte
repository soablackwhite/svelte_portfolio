<script lang="ts">
  import { onMount, tick, afterUpdate } from "svelte";
  let contentDiv;
  let borderHeight = '0px';
  let currentText = '';
  let end = 0;
  let start = 0;
  let index = 0; // current txtarray index
  let speed = 75; // typing/erasing speed, unit: ms
  let delay = 500; //delay before next text, unit: ms
  export let texts: string[] =[
        "hi i'm omar!",
        "i'm a developer",
        "i'm a designer",
        "i like to play with data",
        "i like to read",
        "i like to cook",
        "i like to run",
        "i hate coding"
    ];

  function updateBorderHeight() {
    borderHeight = `${contentDiv.offsetHeight}px`;
  }

  // Run updateBorderHeight after every DOM update
  afterUpdate(updateBorderHeight);
   // compare strings & return common starting substring
   function getCommonStart(str1:string, str2:string) {
        let i = 0;
        while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
            i++;
        }
        return str1.substring(0, i);
    }

    // typewriter effect function with incremental erasure
    async function typeWriter(newText:string, oldText:string = '') {
        let commonStart = getCommonStart(newText, oldText);
        currentText = oldText // start w/ old text
        
        // erase characters not in common
        while (currentText.length > commonStart.length) {
            currentText = currentText.substring(0, currentText.length - 1);
            await tick(); // wait for next DOM update
            await new Promise(r => setTimeout(r, speed));
        }

        // type new characters
        for (let i = commonStart.length; i < newText.length; i++) {
            currentText += newText[i];
            await tick(); // wait for next DOM update
            await new Promise(r => setTimeout(r, speed));
        }
    }

    onMount(() => {
        (async function typeNext() {
            await typeWriter(texts[index], texts[index - 1] || '');
            await new Promise(r => setTimeout(r, delay)); // delay before next text
            index = (index + 1) % texts.length; // loop back to 1st text
            typeNext();
        })();
    });
</script>

<style>
  .container {
    position: absolute;
    /* display: inline-block; */
    width: 6rem;  
  }

  .border {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    transition: height 1s ease-in-out;
  }
  .content {
    padding-left: 20px; /* Ensure content doesn't overlap the border */
  }
</style>

<div class="container">
  <div bind:this={contentDiv} class="content">
    <div class="typewriter">{currentText}</div>
  </div>
  <div class="border" style="height: {borderHeight};"></div>
</div>
