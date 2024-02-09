<script>
    import { onMount } from "svelte";
    let visible = false;    
    const text = "<br> Hi! My name is Omar Ouldali. I recently completed my bachelor at NYU, with a major in <mark>Interactive Media</mark>. I'm passionate about problem-solving in the fields of communication and technology, with interests ranging from <mark>development</mark>, to <mark>data analysis</mark>, to <mark>ui/ux</mark>!<br><br>";
	function scrollToBottom() {
      const container = document.querySelector('.typewriter');
      if (container){
        container.scrollTop = container.scrollHeight;
      }
    }
    function typewriter(node, { speed = 7 }) {
        const originalHtml = node.innerHTML; // include HTML tags
        node.innerHTML = ''; // clear
        let visibleLength = 0;
        const duration = originalHtml.length / (speed * 0.01);
        return {
            duration,
            tick: (t) => {
                const targetLength = Math.floor(originalHtml.length * t);
                // only increase visibleLength if not in the middle of a tag
                while (visibleLength < targetLength) {
                    if (originalHtml[visibleLength] === '<') {
                        // skip to end of the tag
                        while (originalHtml[visibleLength] !== '>' && visibleLength < originalHtml.length) {
                        visibleLength++;
                        }
                    }
                    visibleLength++;
                }
                let blink = (visibleLength%5 === 0) ? "" : "_";
                node.innerHTML = originalHtml.slice(0, visibleLength) + blink;
                scrollToBottom();
            }
        };
    }
    onMount( () => {
        visible = true;
    })
</script>

<div class="typewriter">

    {#if visible}
        <div transition:typewriter>
            {@html text}
        </div>
        <!-- <div transition:typewriter>
            {text}
        </div> -->
    {/if}
</div>

<style>
    .typewriter{
        overflow-y: scroll;
        position: absolute;
        z-index: 10;
        left: calc(50% - 300px - 150px);
        top: calc(35%);
        height: 30%;
        width: 300px;
        font-size: large;
        padding-left: 15px;
        border-left: 0.1rem solid rgba(240, 240, 210, .9);
        background-color: #00000000;
        -webkit-mask-image: linear-gradient(to bottom, transparent, var(--white), var(--white), transparent);
        mask-image: linear-gradient(to bottom, transparent, var(--white), var(--white), transparent);
        hyphens: auto;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        transition: all 0.3s ease;
    }
    .typewriter p{
        color: var(--white);
    }
    .typewriter::-webkit-scrollbar {
        width: 0.5em;
        height: 0.5em;
    }
    .typewriter::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0);
    }
    .typewriter::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0);
    }
    
</style>