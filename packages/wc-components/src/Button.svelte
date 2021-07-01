<svelte:options tag="my-button" />
<script>
    export let name = '';
    export let theme = 'primary';
</script>
<style>
    :host {
        display: inline-block;
    }

    button {
        padding:5px;
    }
    button[theme="primary"] {
        background: tomato;
        color:black;
    }

    button[theme="secondary"] {
        background: blue;
        color:white;
    }
</style>

<button name={name} theme={theme}>
    {#if $$slots.start}
        <slot name="start"/>
    {/if}

    <slot />

    {#if $$slots.end}
        <slot name="end"/>
    {/if}
</button>