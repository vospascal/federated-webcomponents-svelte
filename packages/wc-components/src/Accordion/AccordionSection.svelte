<svelte:options tag="my-accordion-section"/>
<script>
    import {onMount} from 'svelte';
    import {get_current_component} from "svelte/internal";
    import {Channel} from "./../Context/channel";

    export let title = "";
    export let name = "";
    export let open = false;

    const dispatch = (name, detail) => {
        component.dispatchEvent && component.dispatchEvent(
            new CustomEvent(name, {
                detail,
                cancelable: true,
                bubbles: true,
                composed: true,
            }, true)
        );
    };

    const component = get_current_component();
    const channel = new Channel(component, "accordion", true);

    function getAccordion (sections) {
        return {...sections.filter((section) => section.name === name)[0]}
    }

    onMount(async () => {
        dispatch('accordion-event', {name: name, open: open !== undefined ? JSON.parse(open) : false})
    });

    channel.connect((sections) => {
        $: ({name, open} = getAccordion(sections));
    });

    function send() {
        dispatch('accordion-event', {name: name, open: !open});
    }

</script>

<style>
    .accordion-section{
        border: 1px solid rgba(0, 0, 0, 0.35);
        margin-top:5px;
    }

</style>
<li class="accordion-section">
    <div on:click={() => send()} style="padding: 5px; background: aliceblue;">
        <strong>{title}</strong>
    </div>
    {#if open}
        <div style="padding: 5px">
            <slot/>
        </div>
    {/if}
</li>