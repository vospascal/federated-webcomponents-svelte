<svelte:options tag="my-accordion"/>

<style>
    .accordion {
        list-style: none;
        padding: 0;
    }
</style>

<script context="module">
    let sections = [];
</script>

<script>
    import {onMount} from 'svelte';
    import {get_current_component} from "svelte/internal";
    import {Channel} from "./../Context/channel";

    export let single = false;

    const component = get_current_component();
    const channel = new Channel(component, "accordion", true);

    onMount(() => { channel.connect(); });

    function addOrReplace(sections, detail){
        return [...sections.filter((obj) => obj.name !== detail.name), {...detail}];
    }

    function handleMessage(event) {
        if(single){
            if(sections.filter(item => item.open) && event.detail.open){
                sections = [...sections.map((item) => {item.open = false; return item})]
            }
        }
        sections = addOrReplace(sections, event.detail)
        channel.cast(sections);
    }

    function closeAll () {
        channel.cast([...sections.map((item) => {item.open = false; return item})])
    }
</script>

<ul class="accordion" on:accordion-event={handleMessage}>
    <button on:click={() => closeAll()}>close all</button>
    <slot/>
</ul>