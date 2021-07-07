<svelte:options tag="my-header" />
<style>
  :host {
    box-sizing: border-box;
    display: block;
  }

  header {
    background: #087f5b;
    color:#e6fcf5;
    padding: 1em;
    font-size: xx-large;
    display: grid;
    grid-template-columns: 90% 10%;
  }
</style>
<header>
  <div>My Svelte web component header</div>
</header>