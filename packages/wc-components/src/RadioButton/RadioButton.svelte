<svelte:options tag="my-radio-button"/>

<script>
    export let title = "";
    export let value = "";
    export let name = "";
    export let radio;
    export let checked = false;
    export let disabled = false;

    import {onMount} from 'svelte';
    import {get_current_component} from "svelte/internal";
    import {Channel} from "./../Context/channel";

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
        dispatch('radio-button-event-register', {value: value, checked: checked ? true : false})
    });

    channel.connect((sections) => {
        $: ({value, checked, name} = getRadiobutton(sections));
    });

    function getRadiobutton(sections) {
        return {...sections.filter((section) => section.value === value)[0]}
    }

    function sendStatus() {
        dispatch('radio-button-event', {value: value, name:name, checked: true});
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
    .radio {
        cursor: pointer;
        white-space: nowrap;
    }
    .radio.disabled {
        cursor: not-allowed;
    }
    .radio__label {}

    .radio__input input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .radio__input input :focus + .radio__control {
         box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em #2196f3;
     }

    .radio-gradient input:checked + .radio__control {
        background: radial-gradient(currentcolor 50%, rgba(255, 0, 0, 0) 51%);
    }

    .radio-before .radio__control {
        position: relative;
    }

    .radio-before  input + .radio__control::before {
        position: relative;
        content: "";
        width: 10px;
        height: 10px;
        box-shadow: inset 9px 10px #2196f3;
        border-radius: 50%;
        left: 3px;
        top: 0px;
        display: inline-block;
        opacity: 0;
    }

    @media screen and (min-width: 521px) {
        .radio-before  input + .radio__control::before {
            position: relative;
            left: 3px;
            top: -4px;
        }
    }

    .radio-before input:checked + .radio__control::before {
        opacity: 1;
    }

    .radio__control {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #959495;
        background: #fff;
    }

</style>
<label class="radio radio-before" on:click|preventDefault={() => sendStatus()}  class:checked={checked} class:disabled={disabled}>
     <span class="radio__input">
        <input type="radio" bind:this={radio} value={value} name={name}>
         <span class="radio__control"></span>
     </span>
    <span class="radio__label">
        {#if $$slots.default}
            <slot/>
        {/if}
    </span>
</label>
