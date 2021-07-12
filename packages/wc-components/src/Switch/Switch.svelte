<svelte:options tag="my-switch"/>

<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 17px;
        height: 24px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .container {
        position: relative;
        margin: 5px;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 0px;
        bottom: 0px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
        border: 1px solid #999;
    }

    input:checked + .slider {
        background-color: #2196f3;
    }

    input:checked + .slider {
        box-shadow: 0 0 1px #2196f3;
        color: #2196f3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    input:disabled + .slider {
        cursor: not-allowed;
    }

    .slider svg {
        width: 10px;
        height: 15px;
        margin-top: 1px;
        margin-left: 6px;
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

<label class="container">
    <span class="switch"></span>
    <input type="checkbox" name={name} bind:checked disabled={disabled} on:change|preventDefault={onChange}/>
    <span class="slider">
<!--      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">-->
<!--        <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59'/>-->
<!--      </svg>-->
    </span>
</label>




