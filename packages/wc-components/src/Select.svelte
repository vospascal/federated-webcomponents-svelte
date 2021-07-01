<svelte:options tag="my-select"/>
<style>
    :host {
        display: inline-block;
    }

    select {
        padding: 5px;
    }

    select[theme="primary"] {
        background: tomato;
        color: black;
    }

    select[theme="secondary"] {
        background: blue;
        color: white;
    }
</style>

<script>
    import {createEventDispatcher} from "svelte";
    import {get_current_component} from "svelte/internal";

    export let theme = 'primary';
    export let value = '';
    export let options = [];
    export let placeholder = '';

    const component = get_current_component();
    const svelteDispatch = createEventDispatcher();
    const dispatch = (name, detail) => {
        svelteDispatch(name, detail);
        component.dispatchEvent && component.dispatchEvent(
            new CustomEvent(name, {
                detail,
                cancelable: true,
                bubbles: true,
                composed: true,
            })
        );
    };

    function onChange() {
        dispatch('change', {value: value});
    }

</script>

<select bind:value on:change={onChange} theme={theme}>
    {#if placeholder}
        <option value=null selected disabled>{placeholder}</option>
    {/if}
    {#each JSON.parse(options) as option}
        <option value={option.value}>{option.name}</option>
    {/each}
</select>
