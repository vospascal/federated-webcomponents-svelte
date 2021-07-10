<svelte:options tag="my-tabs"/>

<script context="module">
    let sections = [];
</script>

<script>
    import {get_current_component} from "svelte/internal";
    import {Channel} from "./../Context/channel";

    const component = get_current_component();
    const channel = new Channel(component, "tabs", true);
    channel.connect();

    function addOrReplace(sections, detail) {
        return [...sections.filter((obj) => obj.name !== detail.name), {...detail}];
    }

    function handleMessage(event) {
        if (sections.filter(item => item.checked) && event.detail.checked) {
            sections = [...sections.map((item) => {
                item.checked = false;
                return item
            })]
        }
        sections = addOrReplace(sections, event.detail);


        if(sections.filter(item => item.checked).length === 0){
            sections[0].checked = true;
        }

        channel.cast(sections);
    }

    function uncheckAll() {
        channel.cast([...sections.map((item) => {
            item.checked = false;
            return item
        })])
    }
</script>

<style>
    :host .tabs {

    }
</style>
<div class="tabs" on:tabs-event={handleMessage}>
    <slot/>
</div>