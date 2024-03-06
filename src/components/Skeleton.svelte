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
    border-radius: 8px;
  }
  @keyframes loading {
      0% {
          background-position: -100% 0%;
      }
      100% {
          background-position: 100% 0%;
      }
  }
  @keyframes pulse {
      0% {
          opacity: 0.85;
      }
      50% {
        opacity: 1;
      }
      100% {
          opacity: 0.85;
      }
  }
  .skeleton {
    background-color: #f0f0f0;
    display: block;
    position:relative;
    margin: 0rem 0rem 1rem 0rem;
    color: rgba(0,0,0,0);
    animation: pulse 2.3s infinite reverse;
  }

  .skeleton-text {
      font-size: large;
      text-align: left ;
      border-radius: 8px;
      height: 300px;
  }
  .skeleton-subtitle {
      font-size: x-large;
      text-align: left ;
      border-radius: 8px;
  }
  .skeleton-title {
      display: block;
      font-size: xx-large;
      position:relative;
      text-align: center ;
      width: 60%;
      border-radius: 8px;
      margin:  auto !important;
  }
  .skeleton-media { 
    height: var(--media_height); 
    width: var(--media_width);
    border-radius: 8px; 
  }
</style>