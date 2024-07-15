<script lang="ts">
    import { onMount, afterUpdate } from "svelte";
    import { currentItem } from "../stores";
    import { slide, fade, scale } from "svelte/transition";
    
    export let texts: string[];
    export let custom = "";
    let justOpened = true;
    let currentText = '';
    let index = 0; // current txtarray index
    let speed = 20; // typing/erasing speed, unit: ms, good: 20
    let delay = 1200; //delay before next text, unit: ms, good: 1000
    let contentDiv: HTMLElement; //for adaptive height of border
    let borderHeight = '0px';
    //stretch border
    function updateBorderHeight() {
        borderHeight = `${contentDiv.offsetHeight}px`;
    }
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
        currentText = oldText; // start with old text
        // erase chars not in common
        while (currentText.length > commonStart.length) {
            currentText = currentText.substring(0, currentText.length - 1);
            await new Promise(r => setTimeout(r, speed));
        }
        // type new chars
        for (let i = commonStart.length; i < newText.length; i++) {
            currentText += newText[i];
            await new Promise(r => setTimeout(r, speed));
        }
    }
    onMount(() => {
        async function typeNext() {
            // if just clicked
            if (!justOpened){
                await typeWriter(texts[index], index === 0 ? texts[texts.length - 1] : texts[index - 1]);
            }
            else {
                await typeWriter(texts[index], texts[index - 1] || '');
            }
            await new Promise(r => setTimeout(r, delay)); // delay before next text
            index = (index + 1) % texts.length; // loop back to beginning
            justOpened = false;
            typeNext(); // recursive call to type the next text
        }
        typeNext();
    });
</script>


<div class="container {custom}" transition:fade|global={{duration:120}}>
    <div bind:this={contentDiv}>
        <div class="typewriter">{currentText}</div>
    </div>
</div>

<style>
    .about{
        border-bottom: solid 4px var(--white);
        border-left: solid 3px var(--white);
        background-color: var(--black);
        transition: border 0.3s, min-height 0.2s !important;
    }
    .about:hover{
        border-bottom: solid 11px var(--white) !important;
        transition: border 0.2s, min-height 0.3s !important;
    }
    .container{
        font-family: "Montserrat", sans-serif !important;
        font-weight: 400;
        font-size: xx-large;
        position: absolute;
        top: 50%;
        left: calc(50% - var(--media_size)/2 + 10px);
        transform: translate(-100%, -50%);
        width: 30vw;
        line-height: 1.5em;
        min-height: 1.5em;
        transition: left 0.23s ease-in-out;
    }
    .typewriter{
        z-index: 10;
        height: auto;
        transition: max-height 0.5s ease-out;   
        color: var(--white);
        hyphens: auto;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        transition: all 0.3s ease !important;
    }
    .border {
        position: absolute;
        border-color: var(--gray) !important;
        border-width: 2px !important;
        left: 0;
        top: 0;
        bottom: 0;
        transition: height 0.3s ease-in-out;
    }
    @media (max-width: 950px) {
        .container {
            top: 80%;
            left: calc(50%);
            width: 80vw;
            transform: translate(-50%, -50%);
            background-color: transparent;
        }
        .about {
            border: none;
            text-align: center;
        }
    }
    @media (max-width: 820px) {
    }
    /*____________________________________________MEDIUM MOBILE SCREEN__________________________________________*/
    @media (max-width: 576px) {
        .container {
            /* left: calc(50% - var(--txt_pad)/2 + 1rem); */
            /* top: calc(65%); */
            font-size: x-large;
            font-weight: 500;
        }
    }
    /*______________________________________________SMALL PHONE__________________________________________*/
    @media (max-width: 400px) {
        .container {
            top: 50%;
            left: calc(50% - var(--media_size)/2 + 5px);
            width: 40vw;
            background-color: black;
            text-align: left;
            font-size: large;
            font-weight: 500;
        }
        .about {
            border-left: solid var(--white) 3px;
            border-bottom: solid var(--white) 3px;
            text-align: left;
        }
        
    }   
    /*__________________________________________VERY SMALL PHONE__________________________________________*/
    @media (max-width: 341px) {
        .container {
            font-size: large;
            font-weight: 100;
        }
    }
</style>