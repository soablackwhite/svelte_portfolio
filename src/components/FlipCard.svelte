<!-- FlipCard.svelte -->
<script lang="ts">
  export let flipped: boolean = false;
</script>

<div class="scene">
  <div class="card" class:flipped={flipped}>
    <div class="front">
      <slot name="front" />
    </div>
    <div class="back">
      <slot name="back" />
    </div>
  </div>
</div>

<style>
.scene {
  width: 100vw;
  height: 100vh;
  perspective: 1200px;
  overflow: hidden;
}

.card {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s cubic-bezier(0.6, 0.2, 0.2, 1);
  position: relative;
}

.card.flipped {
  transform: rotateY(180deg);
}

.front, .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  top: 0;
  left: 0;
  overflow: hidden;
}

.front {
  z-index: 2;
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}
</style>
