<!--https://github.com/wysher/svelte-overlay-->
<!--https://svelte.dev/repl/3153faf7584d40bd8ddebecf39f24ac1?version=3.38.3-->
<!--https://svelte.dev/repl/8364bc976f0c4ff9b83adf6e7a3c19fd?version=3.29.4-->
<!--https://github.com/CrownFramework/svelte-error-boundary-->
<!--https://microtip.vercel.app/-->
<!--https://github.com/ghosh/microtip-->
<svelte:options tag="my-tooltip"/>

<style>

    :host {
        display: inline-block;
        box-sizing: border-box;
    }

    @keyframes tooltipFadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .tooltip {

        border-bottom: 1px dotted;
        position: relative;

    }

    .tooltip__label {
        padding: 0 5px;
        color: blue;
    }

    .tooltip__label:before {
        content: '';
        display: flex;
        cursor: help;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 3;
    }

    .tooltip-dropdown {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        padding-top: 12px;
        width: max-content;
        max-width: 190px;
        text-align: center;
    }

    .tooltip-dropdown__content {
        text-align: left;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
    }

    .tooltip-dropdown__content > div {
        padding: 8px 12px;
    }

    .tooltip-dropdown__content .header {
        background: #f1f1f1;
        border: 1px solid #fff;
        border-radius: 6px 6px 0px 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }


    .tooltip-dropdown__content .footer {
        background: #f1f1f1;
        border: 1px solid #fff;
        border-radius: 0px 0px 6px 6px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .tooltip--open .tooltip-dropdown {
        animation: tooltipFadeIn 0.15s;
        display: block;
    }

    .close {
        float: right;
        background: transparent;
        border: 0;
        padding: 6px;
        display: none;
    }

    /* smartphones, touchscreens */
    @media (hover: none) {
        .close {
            display: block;
        }
    }

    /* mouse, touch pad */
    @media (hover: hover) {
        .close {
            display: none;
        }
    }

    .tooltip [data-popper-placement^='top'] .arrow { bottom: -4px; }
    .tooltip [data-popper-placement^='top'] .arrow:before { bottom: -1px; }

    .tooltip [data-popper-placement^='bottom'] .arrow { top: 7px; }
    .tooltip [data-popper-placement^='bottom'] .arrow:before { top: -1px; }

    .tooltip [data-popper-placement^='left'] .arrow { right: -4px; }
    .tooltip [data-popper-placement^='left'] .arrow:before { right: -1px; }

    .tooltip [data-popper-placement^='right'] .arrow { left: -11px; }
    .tooltip [data-popper-placement^='right'] .arrow:before { left: 5px; }

    .arrow, .arrow::before, .arrow::after {
        position: absolute;
        width: 12px;
        height: 12px;
    }
    .arrow::before {
        content: "";
        transform: rotate(45deg);
        background-color: #ccc;
        width: 12px;
        height: 12px;
    }
    .arrow::after {
        content: "";
        width: 12px;
        height: 12px;
        transform: rotate(45deg);
        background-color: #fff;
    }



</style>
<script>
    import {get_current_component} from "svelte/internal";
    import {createPopper} from '@popperjs/core/lib/popper-lite';
    import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
    import arrow from '@popperjs/core/lib/modifiers/arrow';
    import {onDestroy, tick} from 'svelte'

    export let value = "sd"
    let tooltip;
    let placeholder;
    let dropdown;
    let open = false;
    let popper;
    let arrowEl;

    $: showDropdown(open)

    async function showDropdown(open) {
        if (open) {
            await tick()
            $: value = `${Math.random()}`;
            popper = createPopper(placeholder, dropdown, {
                container: 'body',
                placement: 'top',
                modifiers: [
                    preventOverflow,
                    {
                        ...arrow,
                        options: {
                            element: arrowEl
                        },
                    },
                ],
            });
        } else if (popper) {
            await tick()
            popper.destroy()
        }
    }

    onDestroy(() => {
        popper && popper.destroy()
    })

    $: { open, handleOpen() }
    function handleOpen() {
        get_current_component().setAttribute("open", `${open}`);
    }

</script>

<div class="tooltip popper" ref="popperElement" tabindex="-1">
    <div class="tooltip__label"
         bind:this={placeholder}
         on:touchstart={() => { open = true }}
         on:mouseover={() => { open = true }}
         on:mouseleave={() => { open = false }}
    >
        {#if $$slots.label}
            <slot name="label"/>
        {/if}
    </div>
    {#if open}
        <div class="tooltip-dropdown tooltip--open" bind:this={dropdown}>
            <div class="arrow" bind:this={arrowEl} data-popper-arrow></div>
            <div role="tooltip" class="tooltip-dropdown__content">
                {#if $$slots.content}
                    <button class="close" on:click={close}>X</button>
                    <!--                <div class="header">header</div>-->
                    <div>
                        <slot name="content"/>
                    </div>
                    <!--                <div class="footer">footer</div>-->
                {/if}
            </div>
        </div>
    {/if}
</div>




