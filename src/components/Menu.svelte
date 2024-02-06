<script lang="ts">
    export let index = 0;
    let selected = 0;
    let menu = ["home", "about", "skills", "contact me"]
    function changeIndex(n: number){
        index = n;
        console.log(index)
    }
</script>


<div class="menu ui">
    {#each menu as item, i}
        <button class="menu-item" class:selected={index == i} on:click={ ()=> changeIndex(i)}> {menu[i]} </button>
    {/each}
</div>

<style>
</style>