<script lang="ts">
    import { onMount, tick } from 'svelte';
  
    let currentText = ''; // Displayed text
    let texts = [
        "Hi I'm Omar!",
        "I'm a developer!",
        "I'm a designer!",
        "i like to read",
        "i like to cook",
        "i like to run",
        "i hate coding",
        "but i do it for a living! T.T"
    ];
    let index = 0; // Current index in the texts array
    const speed = 35; // Typing/erasing speed, unit: ms
    const delay = 450; 
  
    // Function to incrementally replace different characters
    async function replaceCharacters(newText: string, oldText: string = '') {
      let resultText = oldText.split('');
      const maxLength = Math.max(newText.length, oldText.length);
  
      for (let i = 0; i < maxLength; i++) {
        if (newText[i] !== oldText[i]) {
          // Replace character if different
          resultText[i] = newText[i] ?? '';
          currentText = resultText.join('');
          await tick(); // Ensure Svelte updates the DOM
          await new Promise(r => setTimeout(r, speed));
        }
        // Remove extra characters from the end if the new text is shorter
        if (i >= newText.length) {
          resultText.length = newText.length;
          currentText = resultText.join('');
          await tick(); // Ensure Svelte updates the DOM
          await new Promise(r => setTimeout(r, speed));
        }
      }
    }
  
    onMount(() => {
      (async function typeNext() {
        await replaceCharacters(texts[index], currentText);
        index = (index + 1) % texts.length; // Loop to the next text
        setTimeout(typeNext, delay); // Delay before starting the next update
      })();
    });
  </script>


<div class="typewriter">{currentText}</div>

<style>
    .typewriter{
        overflow-y: scroll;
        position: absolute;
        z-index: 10;
        left: calc(50% - 20rem);
        top: calc(50%);
        height: auto;
        width: 20rem;
        font-size: x-large;
        padding-left: 15px;
        border-left: 0.1rem solid rgba(240, 240, 210, .9);
        background-color: #00000000;
        hyphens: auto;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        transition: all 3s ease !important;
    }

    .typewriter::-webkit-scrollbar {
        width: 0.5em;
        height: 0.5em;
    }
    .typewriter::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0);
    }
    .typewriter::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0);
    }
    
</style>