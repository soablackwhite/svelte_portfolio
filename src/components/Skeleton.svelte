<!-- Skeleton.svelte -->
<script lang="ts">
    export let type:string;
</script>

{#if type === "skeleton-title"}
  <div class="skeleton {type}"> <h1> placeholder </h1></div>
{:else}
  <div class="skeleton {type}"> placeholder <br> placeholder </div>
{/if}
<style>
  .skeleton::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: linear-gradient(90deg, #dbdada, var(--white), #dbdada);
    background-size: 200%;
    animation: loading 0.89s infinite reverse;
    border-radius: 2px;
  }
  @keyframes loading {
      0% {
          background-position: -100% 0%;
      }
      100% {
          background-position: 100% 0%;
      }
  }
  .skeleton {
    background-color: #f0f0f0;
    display: block;
    position:relative;
    margin: 0rem 0rem 1rem 0rem;
    color: rgba(0,0,0,0);
  }

  .skeleton-text {
      font-size: large;
      text-align: left ;
      border-radius: 4px;
      height: 300px;
  }
  .skeleton-subtitle {
      font-size: x-large;
      text-align: left ;
      border-radius: 4px;
  }
  .skeleton-title {
      display: block;
      font-size: xx-large;
      position:relative;
      text-align: center ;
      width: 60%;
      border-radius: 4px;
      margin:  auto !important;
  }
  .skeleton-media { 
    height: 400px; 
    width: 560px; 
    border-radius: 8px; 
  }

</style>
