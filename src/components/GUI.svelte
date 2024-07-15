<script lang="ts">
    import { gui_angle, gui_carousel, gui_menu, gui_motion, gui_outline } from "../stores";
    import { slide } from "svelte/transition";
    import { set_css_var} from "../scripts/functions";
    let opened = false;
    let symbol = "☰";
    let rt: HTMLHtmlElement;
    $: rt = rt;
    if (typeof window !== 'undefined'){
        rt = document.querySelector(':root') as HTMLHtmlElement;
    }
    function openUI(){
        document.querySelector(".clickable").style.left = "calc(-3.0% + var(--indent_ui))";
        console.log("clicked")
        opened = true;
        symbol = "×";
        set_css_var("--indent_ui", "200px", rt);
    }
    function closeUI(){
        document.querySelector(".clickable").style.left = "calc(0% + var(--indent_ui))";
        opened = false;
        symbol = "☰";
        set_css_var("--indent_ui", "0px", rt);
        console.log("clicked2")
    }
</script>

<!-- UI DESIGNER -->
<span class="clickable" on:click={(opened)?closeUI:openUI}> {symbol}</span>
<!-- <button class="clickable" style="font-size:30px;cursor:pointer" on:click={openUI}>&#9776; settings</button> -->

<div class="gui"> 
    <fieldset id="gallery-type" class="ui-element">
        <legend>card style:</legend>
        <div>
            <input type="radio" bind:group={$gui_carousel} id="label" name="drone" value="label" />
            <label for="label">label</label>
        </div>
        <div>
            <input type="radio" bind:group={$gui_carousel} id="minimal" name="drone" value="minimal" />
            <label for="minimal">minimal</label>
        </div>
        <div>
            <input type="radio" bind:group={$gui_carousel} id="stack" name="drone" value="stack" checked/>
            <label for="stack">stack (independent)</label>
        </div>
    </fieldset>

    <fieldset id="menu-type" class="ui-element">
        <legend>menu type:</legend>
        <div>
            <input type="radio" bind:group={$gui_menu} id="menu2" name="menu-drone" value="menu" checked />
            <label for="menu">vertical</label>
        </div>
        
        <div>
            <input type="radio" bind:group={$gui_menu} id="menu" name="menu-drone" value="menu2" />
            <label for="menu2">horizontal</label>
        </div>
    </fieldset>

    <fieldset id="menu-outline" class="ui-element">
        <legend>menu outline:</legend>
        <div>
            <input type="radio" bind:group={$gui_outline} id="outline" name="outline-drone" value="outline" />
            <label for="outline"> solid </label>
        </div>
        
        <div>
            <input type="radio" bind:group={$gui_outline} id="nooutline" name="outline-drone" value="nooutline" checked/>
            <label for="nooutline"> none </label>
        </div>
    </fieldset>

    <!-- remove when stack -->
    {#if $gui_carousel === "stack"}
        <fieldset id="motion" class="ui-element" transition:slide|global>
            <legend>motion:</legend>
            <div>
                <input type="radio" bind:group={$gui_motion} id="slide" name="motion-drone" value="slide" checked/>
                <label for="slide"> slide </label>
            </div>
            
            <div>
                <input type="radio" bind:group={$gui_motion} id="mount" name="motion-drone" value="mount"/>
                <label for="mount"> mount </label>
            </div>
        </fieldset>
    {:else}
        <fieldset id="angle" class="ui-element" transition:slide|global>
            <legend>direction:</legend>
            <div>
                <input type="radio" bind:group={$gui_angle} id="vertical" name="angle-drone" value="vertical" checked/>
                <label for="vertical"> vertical </label>
            </div>
            
            <div>
                <input type="radio" bind:group={$gui_angle} id="horizontal" name="angle-drone" value="horizontal"/>
                <label for="horizontal"> horizontal </label>
            </div>
        </fieldset>

        <fieldset id="motion" class="ui-element" transition:slide|global>
            <legend>motion:</legend>
            <div>
                <input type="radio" bind:group={$gui_motion} id="flat" name="motion-drone" value="flat" checked />
                <label for="flat"> flat </label>
            </div>
            <div>
                <input type="radio" bind:group={$gui_motion} id="convex" name="motion-drone" value="convex" />
                <label for="convex"> convex </label>
            </div>
            <div>
                <input type="radio" bind:group={$gui_motion} id="concave" name="motion-drone" value="concave" />
                <label for="concave"> concave </label>
            </div>
            <div>
                <input type="radio" bind:group={$gui_motion} id="cubic" name="motion-drone" value="cubic"/>
                <label for="cubic"> cubic </label>
            </div>
            <div>
                <input type="radio" bind:group={$gui_motion} id="flip" name="motion-drone" value="flip"/>
                <label for="flip"> flip </label>
            </div>
            <div>
                <input type="radio" bind:group={$gui_motion} id="ribbon" name="motion-drone" value="ribbon"/>
                <label for="ribbon"> ribbon </label>
            </div>
        </fieldset>
    {/if}
    
</div>

<style>
    .clickable{
        left: calc(1% + var(--indent_ui));
        top: -2%;
        position: absolute;
        z-index: 10;
        cursor: pointer;
        font-size: 60px;
        transition: all 0.23s ease-in-out;
    }
    .clickable:hover{
        opacity: 0.65;
    }
    .gui {
        z-index: 5;
        position: absolute !important;
        left:0%;
        margin-left: -2px;
        top: 0%;
        height: 100vh;
        width: var(--indent_ui);
        /* width: calc(50% - var(--size)/2 + 1px); */
        border-right: solid 2px white;
        background-color: var(--black);
        transition: all 0.23s ease-in-out;
        overflow: hidden;
    }
    .ui-element{
        padding: 1rem;
    }
</style>