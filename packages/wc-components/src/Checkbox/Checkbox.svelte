<svelte:options tag="my-checkbox"/>


<style>
    .checkbox {
        color: #2196f3;
        cursor: pointer;
    }

    .checkbox__control {
        display: inline-grid;
        width: 1em;
        height: 1em;
        border-radius: 0.25em;
        border: 0.1em solid #2196f3;
    }

    .checkbox__control svg {
        transition: transform 0.1s ease-in 25ms;
        transform: scale(0);
        transform-origin: bottom left;
    }

    .checkbox__input {
        /*display: grid;*/
        /*grid-template-areas: "checkbox";*/
    }

    .checkbox__input > * {
        /*grid-area: checkbox;*/
    }

    .checkbox__input input {
        opacity: 0;
        width: 1em;
        height: 1em;
    }

    .checkbox__input input:focus + .checkbox__control {
        box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em #2196f3;
    }

    .checkbox__input input:checked + .checkbox__control svg {
        transform: scale(1);
    }

    .checkbox__input input:disabled + .checkbox__control {
        border: 0.1em solid #959495;
        color: #959495;
        cursor: not-allowed;
    }
</style>

<script>
    export let checked = false;
    export let disabled = false;
    import {get_current_component} from "svelte/internal";

    $: {checked, handleOpen()}

    function handleOpen() {
        get_current_component().setAttribute("aria-pressed", `${checked ? true : false}`);
        if (checked) {
            get_current_component().setAttribute("checked", 'checked');
            get_current_component().setAttribute("active", 'active');
        } else {
            get_current_component().removeAttribute("checked");
            get_current_component().removeAttribute("active");
        }

    }
</script>

<label class="checkbox">
  <span class="checkbox__input">
    <input type="checkbox" name="checkbox" bind:checked disabled={disabled}>
    <span class="checkbox__control">
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
        <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59'/>
      </svg>
    </span>
  </span>
    {#if $$slots.default}
        <span class="radio__label"><slot/></span>
    {/if}
</label>




