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
        /*display: none;*/

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

    .tooltip [data-popper-placement="bottom"] .tooltip-dropdown__content:after,
    .tooltip [data-popper-placement="bottom"] .tooltip-dropdown__content:before {
        content: '';
        position: absolute;
        left: 50%;
        top: -3px;
        border-style: solid;
        border-width: 10px 14px 10px 0;
        border-color: rgba(0, 0, 0, 0) #ccc rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
        transform: rotate(90deg);
    }

    .tooltip [data-popper-placement="bottom"] .tooltip-dropdown__content:after {
        border-width: 9px 14px 9px 0;
        border-color: rgba(0, 0, 0, 0) #fff rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
        top: 0px;
    }

    .tooltip [data-popper-placement="top"] .tooltip-dropdown__content:after,
    .tooltip [data-popper-placement="top"] .tooltip-dropdown__content:before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -15px;
        border-style: solid;
        border-width: 10px 14px 10px 0;
        border-color: rgba(0, 0, 0, 0) #ccc rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
        transform: rotate(270deg);
    }

    .tooltip [data-popper-placement="top"] .tooltip-dropdown__content:after {
        border-width: 9px 14px 9px 0;
        border-color: rgba(0, 0, 0, 0) #fff rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
        bottom: -13px;
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

</style>
<script>
    import {createPopper} from '@popperjs/core/lib/popper-lite';
    import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
    import {onDestroy, tick} from 'svelte'

    let tooltip;
    let placeholder;
    let dropdown;
    let open = false;
    let arrowEl;
    let popper;

    $: showDropdown(open)

    async function showDropdown(open) {
        if (open) {
            await tick()
            popper = createPopper(placeholder, dropdown, {
                container: 'body',
                placement: 'top',
                modifiers: [
                    preventOverflow,
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


</script>

<div class="tooltip">
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


