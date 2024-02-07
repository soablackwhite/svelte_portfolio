<script lang="ts">
    export let index = 0;
    import { currentCircle } from "../stores";
    import { updateTag } from "../scripts/functions";
    let selected = 0;
    let menu = ["home", "about", "skills", "contact me", "gallery"]
    let rt = document.querySelector(":root") as HTMLElement;
    let cur: number;
    currentCircle.subscribe((value) => {
        cur = value;
    });
    //change index and update any angles/tags based on scroll position
    function changeIndex(n: number){
        index = n;
        console.log(index)
        currentCircle.set(0);
        updateTag(index, cur, rt);
        document.activeElement.blur();
    }
</script>

<div class="menu ui">
    {#each menu as item, i}
        <button class="menu-item" class:selected={index == i} on:click={ ()=> changeIndex(i)}> {menu[i]} </button>
    {/each}
</div>

<style>
    /*___________________________________________MENU__________________________________________*/
    .menu {
        left: calc(50% + 6.5rem);
        top: calc(50% - 4rem + var(--indent_ui)); 
        width: 8rem; /*8rem*/
        text-align: center;
        opacity : 1;
        transition: left 0.66s ease, top 0.66s ease;
        list-style-type: none;
    }
    .menu-item{
        all: unset;
        cursor: pointer;
        display: block;
        width: 8rem;
        position: relative;
        opacity: 1;
        color: #f2f2f2;
        text-shadow: 1px 1px #ffffff28;
        transition: transform  0.13s ease-in-out;
        margin-bottom: 0.5rem;
        text-decoration: none;
        font-size: 1.1rem;
    }
    .menu-item:focus {
        outline: solid rgb(255, 255, 255) 3px;
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
    }
    @media (max-width: 400px){
        .menu{
            top: calc(84.2%);
            bottom: 100% !important;;
            left: 0%;
        }
        .menu-item{
            font-size: 2vh;
            width: 7rem;
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
    }
</style>