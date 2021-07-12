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
    export let theme = 'primary';
    export let name = '';
    export let value = '';
    export let options = [];
    export let placeholder = '';

    import {createEventDispatcher} from "svelte";
    import {get_current_component} from "svelte/internal";

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
        dispatch('change', {name:name, value: value});
    }

</script>

<select bind:value on:change={onChange} theme={theme} name={name}>
    {#if placeholder}
        <option value=null selected disabled>{placeholder}</option>
    {/if}
    {#each JSON.parse(options) as option}
        <option value={option.value}>{option.name}</option>
    {/each}
</select>
