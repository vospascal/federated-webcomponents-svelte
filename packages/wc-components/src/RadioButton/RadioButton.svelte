<svelte:options tag="my-radio-button"/>

<script>
    import {onMount} from 'svelte';
    import {get_current_component} from "svelte/internal";
    import {Channel} from "./../Context/channel";

    export let title = "";
    export let name = "";
    export let radio;
    export let checked = false;
    export let disabled = false;

    const component = get_current_component();
    const channel = new Channel(component, "radio-button-group", true);

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
        dispatch('radio-button-event', {name: name, checked: checked ? true : false})
    });

    channel.connect((sections) => {
        $: ({name, checked} = getRadiobutton(sections));
    });

    function getRadiobutton(sections) {
        return {...sections.filter((section) => section.name === name)[0]}
    }

    function sendStatus() {
        dispatch('radio-button-event', {name: name, checked: true});
    }

    $: {checked, handleChecked()}

    function handleChecked() {
        get_current_component().setAttribute("aria-pressed", `${checked ? true : false}`);
        if (checked) {
            if (radio) {
                radio.setAttribute("checked", 'checked');
                radio.checked = true;
            }
            get_current_component().setAttribute("checked", 'checked');
            get_current_component().setAttribute("active", 'active');
        } else {
            if (radio) {
                radio.removeAttribute("checked");
                radio.checked = false;
            }
            get_current_component().removeAttribute("checked");
            get_current_component().removeAttribute("active");
        }
    }


</script>

<style>

</style>
<label class="radio-button" on:click={() => sendStatus()}>
    <input type="radio" bind:this={radio} name={name}>
    {#if $$slots.default}
        <slot/>
    {/if}
</label>
