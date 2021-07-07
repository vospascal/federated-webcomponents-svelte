<svelte:options tag="my-button" />
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
<script>
    export let name = '';
    export let theme = 'primary';

    //reactive to name
    // $: { name, handleChange() }
    // function handleChange() {
    //     console.log(name)
    // }
</script>


<button name={name} theme={theme} >
    <!--{name} reactive to name-->
    {#if $$slots.start}
        <slot name="start"/>
    {/if}

    <slot />

    {#if $$slots.end}
        <slot name="end"/>
    {/if}
</button>