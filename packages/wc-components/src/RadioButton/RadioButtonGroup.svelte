<svelte:options tag="my-radio-button-group"/>

<script context="module">
    let sections = [];
</script>

<script>
    export let name;
    export let disabled = false; //todo: fix this

    import {createEventDispatcher} from "svelte";
    import {get_current_component} from "svelte/internal";
    import {Channel} from "./../Context/channel";
    import {value} from "../Select.svelte";

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

    const channel = new Channel(component, "radio-button-group", true);
    channel.connect();

    function addOrReplace(sections, detail) {
        return [...sections.filter((obj) => obj.value !== detail.value), {...detail}];
    }

    function handleMutation(event) {
        sections = [...sections.map((item) => {
            item.name = name;
            return item
        })]
        if (sections.filter(item => item.checked) && event.detail.checked) {
            sections = [...sections.map((item) => {
                item.checked = false;
                return item
            })]
        }
        sections = addOrReplace(sections, event.detail)
        channel.cast(sections);
    }

    function handleRegisterMessage(event) {
        handleMutation(event);
    }

    function handleMessage(event) {
        handleMutation(event);
        dispatch('change', sections.filter(item => item.checked)[0]);
    }

    function uncheckAll() {
        channel.cast([...sections.map((item) => {
            item.checked = false;
            return item
        })])
    }

</script>

<div class="radio-button-group" on:radio-button-event-register={handleRegisterMessage}  on:radio-button-event={handleMessage}>
<!--    <button on:click={() => uncheckAll()}>uncheck all</button>-->
    <slot/>
</div>