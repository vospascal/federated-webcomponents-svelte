<svelte:options tag="my-checkbox"/>


<style>
    :host {
      display: inline-block;
      margin:0 5px;
    }

    .radio__label{
      display: flex;
      margin-left:5px;
    }

    .checkbox {
      cursor: pointer;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      -webkit-box-align: center;
    }
    .checkbox.disabled {
      cursor: not-allowed;
    }

    .checkbox__control {
        width: 16px;
        height: 16px;
        border-radius: 0.25em;
        border: 0.1em solid #959495;
        background: #fff;
    }

    .checkbox__control svg {
        opacity: 0;
    }

    .checkbox__input {
        display: flex;
        color: #2196f3;
    }

    .checkbox__input > * {
    }

    .checkbox__input input {
        opacity: 0;
        position: absolute;
    }

    .checkbox__input input:focus + .checkbox__control {
        box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em #2196f3;
    }

    .checkbox__input input:checked + .checkbox__control svg {
        opacity: 1;
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
    export let value = "";
    export let name = "";

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
      dispatch('change', {value: value, name: name, checked: checked ? true : false});
    }

    $: {checked, handleOpen()}

    function handleOpen() {
        component.setAttribute("aria-pressed", `${checked ? true : false}`);
        if (checked) {
            component.setAttribute("checked", 'checked');
            component.setAttribute("active", 'active');
        } else {
            component.removeAttribute("checked");
            component.removeAttribute("active");
        }
    }
</script>

<label class="checkbox" class:checked={checked} class:disabled={disabled}>
  <span class="checkbox__input">
    <input type="checkbox" name={name} bind:checked disabled={disabled} on:change|preventDefault={onChange}>
    <span class="checkbox__control">
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
        <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59'/>
      </svg>
    </span>
  </span>

  {#if $$slots.default}
    <span class="radio__label">
      <slot/>
    </span>
  {/if}
</label>




