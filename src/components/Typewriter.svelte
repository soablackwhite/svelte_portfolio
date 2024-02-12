<script lang="ts">
    import { onMount, tick } from "svelte";
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
    let currentText = '';
    let end = 0;
    let start = 0;
    let index = 0; // current txtarray index
    let speed = 35; // typing/erasing speed, unit: ms
    let delay = 500; //delay before next text, unit: ms

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


<div class="typewriter">{currentText}</div>

<style>
    .typewriter{
        overflow: hidden;
        position: absolute;
        z-index: 10;
        left: calc(50% - var(--txt_pad)/2 - 250px - 3rem);
        top: calc(50%);
        height: auto;
        transition: max-height 0.5s ease-out;
        width: var(--txt_pad);
        font-size: x-large;
        padding-left: 15px;
        border-left: 0.1rem solid rgba(240, 240, 210, 0.9);
        background-color: #00000000;
        hyphens: auto;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        transition: all 0.3s ease !important;
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
    @media (max-width: 950px) {
        .typewriter {
            left: calc(25% - var(--txt_pad)/2);
            top: calc(50%);
        }
    }
    @media (max-width: 820px) {
        .typewriter {
            left: calc(25% - var(--txt_pad)/2);
            top: calc(50%);
        }
    }
    /*____________________________________________MEDIUM MOBILE SCREEN__________________________________________*/
    @media (max-width: 576px) {
        .typewriter {
            left: calc(50% - var(--txt_pad)/2 + 3rem);
            top: calc(70%);
            font-size: large;
            border-left: 0.1rem solid rgba(240, 240, 210, 1);
        }
    }
    /*______________________________________________SMALL PHONE__________________________________________*/
    @media (max-width: 400px) {
        .typewriter {
            left: calc(25% - var(--txt_pad)/2);
            top: calc(50%);
            font-size: large;
        }
    }
    /*__________________________________________VERY SMALL PHONE__________________________________________*/
    @media (max-width: 341px) {
        .typewriter {
            left: calc(50% - var(--txt_pad)/2);
            top: calc(50%);
        }
    }
</style>