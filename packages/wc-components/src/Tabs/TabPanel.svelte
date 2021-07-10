<svelte:options tag="my-tab-panel"/>


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


    function handleChecked() {
        if (checked) {
            if (tab) {
                tab.setAttribute("checked", 'checked');
                tab.checked = true;
            }
            get_current_component().setAttribute("aria-selected", `${checked ? true : false}`);
            get_current_component().setAttribute("active", 'active');
        } else {
            if (tab) {
                tab.removeAttribute("checked");
                tab.checked = false;
            }
            get_current_component().removeAttribute("aria-selected");
            get_current_component().removeAttribute("active");
        }
    }

    $: handleChecked(checked);

</script>

<style>
    :host .tab-panel {
        left: 0;
        padding: 0.75rem;
        background: #fff;
        color: #2c3e50;
        border: 1px solid #bdc3c7;
        border-bottom: 0.25rem solid #bdc3c7;
        transition: all 0.35s;
    }
</style>
{#if checked}
    <div class="tab-panel" class:active={checked}>
        {#if $$slots.default}
            <slot/>
        {/if}
    </div>
{/if}