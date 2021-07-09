<svelte:options tag="my-radio-button-group"/>

<script context="module">
    let sections = [];
</script>

<script>
    import {onMount, tick} from 'svelte';
    import {get_current_component} from "svelte/internal";
    import {Channel} from "./../Context/channel";

    export let single = true;
    const component = get_current_component();
    const channel = new Channel(component, "radio-button-group", true);
    channel.connect();

    function addOrReplace(sections, detail) {
        return [...sections.filter((obj) => obj.name !== detail.name), {...detail}];
    }

    function handleMessage(event) {
        if (single) {
            if (sections.filter(item => item.checked) && event.detail.checked) {
                sections = [...sections.map((item) => {
                    item.checked = false;
                    return item
                })]
            }
        }
        sections = addOrReplace(sections, event.detail)
        channel.cast(sections);
    }

    function uncheckAll() {
        channel.cast([...sections.map((item) => {
            item.checked = false;
            return item
        })])
    }
</script>

<ul class="radio-button-group" on:radio-button-event={handleMessage}>
    <button on:click={() => uncheckAll()}>uncheck all</button>
    <slot/>
</ul>