<script>
  import { onMount } from "svelte";
  let pageContainer;
  onMount(()=>{
    pageContainer.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      // Append the ripple element to the container
      this.appendChild(ripple);

      // Calculate the size of the container
      const maxSize = Math.max(this.clientWidth, this.clientHeight);

      // Set the size of the ripple
      const rippleSize = maxSize * 2; // Ensuring it's large enough
      ripple.style.width = ripple.style.height = `${rippleSize}px`;

      // Correct the position
      ripple.style.left = `${e.clientX - rippleSize / 2}px`;
      ripple.style.top = `${e.clientY - rippleSize / 2}px`;

      ripple.style.backgroundColor = 'rgba(0,0,0,0.3)';

      // Clean up the ripple after the animation
      setTimeout(() => {
        ripple.remove();
      }, 6000); // Match the animation duration
    });
  })
</script>
  
  <div class="full-page-container" bind:this={pageContainer}> yo yo </div>

  <style>
    html, body {
      height: 100%;
      margin: 0;
      overflow: hidden;
      background-color: white !important;
    }
    .full-page-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  </style>