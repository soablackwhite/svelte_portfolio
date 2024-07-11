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
            // currentItem.set(index);
            justOpened = false;
            typeNext(); // recursive call to type the next text
        }
        typeNext();
    });
</script>


<div class="container {custom}" transition:fade|global={{duration:120}}>
    <div bind:this={contentDiv}>
        <div class="typewriter" >{currentText}</div>
    </div>
    <div class="border" style="height: {borderHeight};"></div>
</div>

<style>
    .about{
        position: absolute;
        transform: translate(-50%, -50%) !important;
        top: 52% !important;
        left: 30% !important;
        font-size: xx-large !important;
        border-bottom: solid 4px var(--accent2) !important;
        /* background-color: var(--black); */
        border-left: solid 0px var(--accent2) !important;
        transition: border 0.3s, min-height 0.2s !important;
    }
    .about:hover{
        border-bottom: solid 11px var(--accent2) !important;
        transition: border 0.2s, min-height 0.3s !important;
        min-height: 59px !important;
    }
    .container{
        position: absolute;
        width: var(--txt_pad);
        min-height: 52px;
        left: calc(50% - var(--txt_pad)/2 - 250px - 3rem);
        top: calc(47%);
        font-size: x-large;
        transition: left 0.23s ease-in-out;
    }
    .typewriter{
        font-family: "Proxima Nova", sans-serif;
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
        border-color: var(--gray--) !important;
        border-width: 2px !important;
        left: 0;
        top: 0;
        bottom: 0;
        transition: height 0.3s ease-in-out;
    }
    .about .border {
        border-width: 1px !important;
    }
    @media (max-width: 950px) {
        .container {
            left: calc(50% - var(--txt_pad)/2 - 250px - 3rem);
            top: calc(47%);
        }
    }
    @media (max-width: 820px) {
        .container {
            left: calc(50% - var(--txt_pad)/2 - 250px + 2rem);
            top: calc(47%);
        }
    }
    /*____________________________________________MEDIUM MOBILE SCREEN__________________________________________*/
    @media (max-width: 576px) {
        .container {
            left: calc(50% - var(--txt_pad)/2 + 1rem);
            top: calc(65%);
            font-size: large;
        }
    }
    /*______________________________________________SMALL PHONE__________________________________________*/
    @media (max-width: 400px) {
        .container {
            left: calc(25% - var(--txt_pad)/2);
            top: calc(45%);
            font-size: large;
        }
    }   
    /*__________________________________________VERY SMALL PHONE__________________________________________*/
    @media (max-width: 341px) {
        .container {
            left: calc(2%);
            top: calc(50%);
            font-size: small;
        }
    }
</style>