<svelte:options tag="my-tab"/>

<script>
    import {onMount} from 'svelte';
    import {get_current_component} from "svelte/internal";
    import {Channel} from "./../Context/channel";

    export let title = "";
    export let name = "";
    export let tab;
    export let checked = false;
    export let disabled = false;

    const component = get_current_component();
    const channel = new Channel(component, "tabs", true);

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

    onMount(async () => {
        dispatch('tabs-event', {name: name, checked: checked ? true : false})
    });

    channel.connect((sections) => {
        $: ({name, checked} = getRadiobutton(sections));
    });

    function getRadiobutton(sections) {
        return {...sections.filter((section) => section.name === name)[0]}
    }

    function sendStatus() {
        dispatch('tabs-event', {name: name, checked: true});
    }

    $: {checked, handleChecked()}

    function handleChecked() {
        get_current_component().setAttribute("aria-pressed", `${checked ? true : false}`);
        if (checked) {
            if (tab) {
                tab.setAttribute("checked", 'checked');
                tab.checked = true;
            }
            get_current_component().setAttribute("active", 'active');
        } else {
            if (tab) {
                tab.removeAttribute("checked");
                tab.checked = false;
            }
            get_current_component().removeAttribute("active");
        }
    }


</script>

<style>
    :host .tab input{
        display: none;
    }
    :host .tab {
        position: relative;
        display: inline-block;
        padding: 0.75rem;
        background: #1abc9c;
        border-right: 1px solid #16a085;
        color: #fff;
        cursor: pointer;
        transition: all 0.25s;
        border-left: 1px solid transparent;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
    }

    :host .tab:hover {
        background: #16a085;
    }
    :host .tab.active {
        background: #fff;
        color: #2c3e50;
        transition: all 0.35s;
        border: 1px solid #bdc3c7;
        border-bottom: 1px solid transparent;
    }

</style>
<label class="tab" on:click={() => sendStatus()} class:active={checked}>
    <input type="radio" bind:this={tab} name={name}>
    {#if $$slots.default}
        <slot/>
    {/if}
</label>
