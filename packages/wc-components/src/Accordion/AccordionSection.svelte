<svelte:options tag="my-accordion-section"/>
<script>
    import {onMount} from 'svelte';
    import {get_current_component} from "svelte/internal";
    import {Channel} from "./../Context/channel";

    export let title = "";
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
        return {...sections.filter((section) => section.title === title)[0]}
    }

    onMount(async () => {
        dispatch('accordion-event', {title: title, open: open !== undefined ? JSON.parse(open) : false})
    });

    channel.connect((sections) => {
        $: ({title, open} = getAccordion(sections));
    });

    function send() {
        dispatch('accordion-event', {title: title, open: !open});
    }

</script>

<li className={`accordion-section`}>
    <div on:click={() => send()} style="padding: 5px; background: aliceblue;">
        <strong>{title}</strong>
    </div>
    {#if open}
        <div>
            <slot/>
        </div>
    {/if}
</li>