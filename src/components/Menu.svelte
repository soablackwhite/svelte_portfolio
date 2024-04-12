<script lang="ts">
    export let index = 0;
    export let type = "menu2";
    export let outline = "nooutline";
    let type2 = `${type}-item`;
    $: indented = (index === 3) ? true : false;
    import { currentItem, transitioned } from "../stores";
    import { updateTag } from "../scripts/functions";
    import { slide, fade, scale} from "svelte/transition";
    let items = ["home", "about", "skills", "projects"];
    let links = [
        {src: `/media/icons/github.svg`, alt: `github icon`, link: `https://github.com/soablackwhite`},
        {src: `/media/icons/linkedin.svg`, alt: `linkedin icon`, link: `https://www.linkedin.com/in/omarouldali/`}, 
        {src: `/media/icons/twitter.svg`, alt: `twitter icon`, link: `https://twitter.com/noiseOmie`},
        {src: `/media/icons/mail.svg`, alt: `mail icon`, link: `mailto:omar.ould.ali@nyu.edu`}
    ];
    let rt = document.querySelector(":root") as HTMLElement;
    let t:boolean;
    transitioned.subscribe((value) => {
        t = value;
    });
    let cur: number;
    currentItem.subscribe((value) => {
        cur = value;
    });
    //change index and update any angles/tags based on scroll position
    function changeIndex(n: number){
        if(index === 3 && n!=index){
            transitioned.set(false);
        }
        index = n;
        currentItem.set(0);
        updateTag(index, cur, 0, rt, 0);
        const active = document.activeElement as HTMLElement;
        if (active)
        {
            active.blur();
        }
    }
</script>
<!-- MENU TRANSITION -->
<!-- used to have ui as class of menu -->
<div class="gui">
    {#if type === "menu"}
        <div class="menu" transition:slide>
            {#each items as item, i}
                <button class="menu-item {outline}" class:selected={index === i} on:click={ ()=> changeIndex(i)}> {item} </button>
            {/each}
        </div>
    {:else}
        <div class="menu2" transition:slide>
            {#each items as item, i}
                <button class="menu2-item {outline}" class:selected={index === i} on:click={ ()=> changeIndex(i)}> {item} </button>
            {/each}
        </div>
    {/if}
    <!-- LINKS & SOCIALS -->
    <div class="links {(index===3) ? "" : "" }">
        {#each links as link, i}
                <a href={link.link} tabindex={i} target="_blank" rel="noreferrer nofollow"><img alt={link.alt} src={link.src}></a>
        {/each}
    </div>
</div>


<style>
    /* gui modifiable */
    .outline{
        border: solid 1px var(--white) !important;
    }
    .nooutline{
        border: none !important;
    }
    /*___________________________________________LINKS/ICONS__________________________________________*/
    @keyframes exit {
        0% {
            transform: translateY(0);
            filter: blur(0px);
        }
        25% {
            filter: blur(3px);
        }
        75% {
            filter: blur(5px);
        }
        100% {
            transform: translateY(-20rem); 
            filter: blur(0px);
        }
    }
    @keyframes enter {
        0% {
            transform: translateY(-20rem);
            opacity: 0;
        }
        25% {
            filter: blur(2.5px);
            opacity: 0.3;
        }
        75% {
            filter: blur(1.5px);
            opacity: 0.5;
        }
        100% {
            transform: translateY(0);
            filter: blur(0px);
            opacity: 1;
        }
    }
    .up{
        animation: exit 0.4s forwards !important;
    }
    a {
        all: unset;
        cursor: pointer;
        transition: font 0.17s !important;
    }
    .links{
        z-index: 3;
        position: absolute;
        top: 1%;
        right: 0%;
        transition: all 0.3s;
        animation: enter 0.4s forwards;
    }
    .links img:hover{
        background-color: var(--black);
    }
    .links img:focus {
        background-color: var(--black);
    }
    .links img{
        filter: invert(1);
        margin: 0.5rem;
        width: 3rem;
        border-radius: 50%;
        transition: width 0.17s ease-in, background-color 0.11s linear;
    }
    
    /*___________________________________________MENU__________________________________________*/
    .indented{
        left: 85% !important;
    }
    .menu2 {
        bottom: calc(10%); 
        top: auto;
        position: absolute !important;
        width: 100%;
        text-align: center;
        opacity : 1;
        transition: all 0.36s ease-in-out;
        list-style-type: none;
        z-index: 2 !important;
    }
    .menu2-item{
        height: auto;
        all: unset;
        cursor: pointer;
        display: inline;
        width: 8rem;
        position: relative ;
        /* position: static; */
        opacity: 1;
        color: var(--white);;
        text-shadow: 1px 1px #ffffff28;
        transition: transform  0.13s ease-in-out, background-color 0.11s;
        margin-bottom: 0.5rem;
        text-decoration: none;
        font-size: 1.1rem;
        border: solid 1px var(--white);;
        margin-right: 1.5rem;
    }
    .menu2-item:hover{
        text-shadow: none;
        transform: scale(1.09);
        border: solid 1px var(--white);;
        background-color: var(--white);;
        color: var(--white);
    }
    .menu {
        left: calc(50% + 6.2rem);
        top: calc(50% - 4rem);
        position: absolute !important;
        width: 8rem;
        width: auto;
        text-align: center;
        opacity : 1;
        transition: all 0.36s ease-in-out;
        list-style-type: none;
        z-index: 2;
        overflow: hidden;
    }
    .menu-item{
        height: auto;
        all: unset;
        cursor: pointer;
        display: block;
        width: 8rem;
        /* use this for "playground" */
        /* padding-right: 1rem;  */
        position: relative ;
        opacity: 1;
        color: var(--white);
        text-shadow: 1px 1px #ffffff28;
        transition: transform  0.13s ease-in-out;
        margin-bottom: 0.25rem; /* was 0.5 rem */
        text-decoration: none;
        font-size: 1.1rem;
    }
    .menu-item:hover{
        transform: scale(1.15);
        background-color: var(--white);
        text-shadow: 1px 1px #18181839;
        color: var(--black);
    }
    .selected{
        transform: scale(1.15);
        background-color: var(--white);
        text-shadow: 1px 1px #18181839;
        color: var(--black);
    }
    @media(max-width: 576px){
        .menu{
            left: calc(50% + 3rem); 
            top: calc(50% - 4rem);
            width: auto;
            overflow: visible;
        }
        .links img{
            width: 3rem;
            margin: 0.3rem;
        }
        .links{
            width: 15rem;
            right: -2%;
        }
        .indented{
            left: 105% !important;
        }
    }
    @media (max-width: 400px){
        .menu{
            bottom: 0%;
            top: auto;
            left: 0%;
        }
        .indented{
            left:0 !important;
            bottom: -25% !important;
        }
        .menu-item{
            font-size: 2vh;
            width: 7rem;
        }
        .links img{
            width: 2.5rem;
            margin: 0.2rem;
        }
        .links{
            width: auto;
            right: 1%;
        }
    }
    @media (max-width: 341px) {
        .menu{
            bottom: 0% !important;
            right: 0% !important;
            left: auto !important;
        }
        .menu-item{
            font-size: 0.8rem;
            width: 7rem;
        }
        .links img{
            width: 2rem;
        }
        .links{
            width: 3rem;
            top: 0%;
            right: -3%;
        }
    }   
</style>