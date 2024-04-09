<script lang="ts">
    export let title: string[];
    export let texts: string[];
    export let offset: number;
    export let label: string;
    import { coordinates } from "../stores";

    let quadrants = ["q1", "q2", "q3"];
    // let quadrants = []
    let quadrant = quadrants[offset];
    console.log(offset, quadrant);

</script>

<div class="card {quadrant}" style="top:{Math.round($coordinates[offset].y)}px !important; left: {Math.round($coordinates[offset].x)}px !important">
    <div class="dropdown">
        <span class="labelclass">
            {label}
            <!-- ({Math.round($coordinates[offset].x)}, {Math.round($coordinates[offset].y)}) -->
        </span>
        <ul class="dropdown-content">
            {#each texts as txt, i}
                <li> {title[i]} {txt} </li>
            {/each}
        </ul>
    </div>
</div>


<style>
    .q1{
        left: 10% !important;
        top: 25% !important;
    }
    .q2{
        left: 10% !important;
        top: 70% !important;
    }
    .q3{
        left: 70% !important;
        top: 75% !important;
    }
    .card{
        color: var(--white);
        background-color: var(--black);
        position: absolute;
        z-index: 10;
        /* display: flex; */
        border: white solid 1px;
        padding: 5px;
        border-radius: 0px;
        /* background-color: rgba(255, 255, 255, 0) !important; */
        transform: translate(-50%, -50%);
        /* transition: top 0.5s, left 0.5s; */
    }
    .labelclass{
        background-color: var(--white);
        color: var(--black);
        display: inline-block;
        z-index: 10;
    }
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdown-content {
        /* display: none; */
        display: block;
        /* position: absolute; */
        /* min-width: 240px; */
        padding: 12px 16px;
        z-index: 1;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    li{
        list-style-position: outside;
    }
</style>