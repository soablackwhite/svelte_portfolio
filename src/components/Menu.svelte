<script lang="ts">
    export let index = 0;
    $: indented = (index === 3) ? true : false;
    import { currentCircle } from "../stores";
    import { updateTag } from "../scripts/functions";
    import { transitioned } from "../stores";
    let items = ["home", "about", "skills", "projects"]
    let links = [
        {src: `/media/icons/github.svg`, alt: `github icon`, link: `https://github.com/soablackwhite`},
        {src: `/media/icons/linkedin.svg`, alt: `linkedin icon`, link: `https://www.linkedin.com/in/omarouldali/`}, 
        {src: `/media/icons/twitter.svg`, alt: `twitter icon`, link: `https://twitter.com/noiseOmie`},
        {src: `/media/icons/mail.svg`, alt: `mail icon`, link: `mailto:omar.ould.ali@nyu.edu`}
    ]
    let rt = document.querySelector(":root") as HTMLElement;
    let t:boolean;
    transitioned.subscribe((value) => {
        t = value;
    });
    let cur: number;
    currentCircle.subscribe((value) => {
        cur = value;
    });
    //change index and update any angles/tags based on scroll position
    function changeIndex(n: number){
        if(index === 3 && n!=index){
            transitioned.set(false);
        }
        index = n;
        const elem = document.querySelector(".menu") as HTMLElement;
        currentCircle.set(0);
        updateTag(index, cur, rt);
        const active = document.activeElement as HTMLElement;
        if (active)
        {
            active.blur();
        }
    }
</script>

<!-- MENU -->
<div class="menu ui" class:indented>
    {#each items as item, i}
        <button class="menu-item" class:selected={index === i} on:click={ ()=> changeIndex(i)}> {item} </button>
    {/each}
</div>
<!-- LINKS & SOCIALS -->

<!-- {#if index !=3} -->
    <div class="links {(index===3) ? "up" : "" }">
        {#each links as link, i}
                <a href={link.link} tabindex={i} target="_blank" rel="noreferrer nofollow"><img alt={link.alt} src={link.src}></a>
        {/each}
    </div>
<!-- {/if} -->

<style>
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
        position: fixed;
        top: 1%;
        right: 1%;
        transition: all 0.3s;
        animation: enter 0.4s forwards;
    }
    .links img:hover{
        background-color: rgb(0,0,0);
        border-radius: 50%;
    }
    .links img:focus {
        background-color: rgb(0,0,0);
        border-radius: 50%;
    }
    .links img{
        filter: invert(1);
        margin: 0.5rem;
        width: 3rem;
        transition: width 0.17s ease-in;
    }
    
    /*___________________________________________MENU__________________________________________*/
    .indented{
        left: 85% !important;
    }
    .menu {
        left: calc(50% + 6.5rem);
        top: calc(50% - 4rem + var(--indent_ui)); 
        position: fixed !important;
        width: 8rem;
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
        position: relative ;
        position: static;
        opacity: 1;
        color: #f2f2f2;
        text-shadow: 1px 1px #ffffff28;
        transition: transform  0.13s ease-in-out;
        margin-bottom: 0.5rem;
        text-decoration: none;
        font-size: 1.1rem;
    }
    .menu-item:hover{
        transform: scale(1.15);
        background-color: var(--white);
        text-shadow: 1px 1px #18181839;
        color: #121212;
    }
    .selected{
        transform: scale(1.15);
        background-color: var(--white);
        text-shadow: 1px 1px #18181839;
        color: #121212;
    }
    @media(max-width: 576px){
        .menu{
            left: calc(50% + 3rem); 
            top: calc(50% + var(--indent_ui) - 4rem);
            width: 7rem;
        }
        .links img{
            width: 3rem;
        }
        .links{
            width: 4rem;
        }
        .indented{
            left: 105% !important;
        }
    }
    @media (max-width: 400px){
        .menu{
            bottom: 0;
            top: auto;
            left: 0;
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
        }
    }
    @media (max-width: 341px) {
        .menu{
            top: calc(80%);
            bottom: 100% !important;;
            left: 0%;
        }
        .menu-item{
            font-size: 1rem;
            width: 7rem;
        }
        .links img{
            width: 2rem;
        }
    }   
</style>