<script>
  import MarkdownIt from 'markdown-it';
  import { onMount } from 'svelte';

  let markdown = '';
  let html = '';

  const md = new MarkdownIt({ html: true });

  onMount(async () => {
    const res = await fetch('/data/projects.md');
    markdown = await res.text();
    html = md.render(markdown);
  });
</script>

<div class="markdown-body">{@html html}</div>

<style>
  .markdown-body {
    max-width: none;
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding: 1rem;
    box-sizing: border-box;
    color: #333;
    line-height: 1.6;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .markdown-body p {
    margin-bottom: 1rem;
  }

  .markdown-body ul,
  .markdown-body ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }

  .markdown-body pre {
    background: #f6f8fa;
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
  }

  .markdown-body code {
    background: #f6f8fa;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 0.9em;
  }

  .markdown-body blockquote {
    border-left: 4px solid #d0d7de;
    padding-left: 1rem;
    margin-left: 0;
    color: #656d76;
  }
</style>
