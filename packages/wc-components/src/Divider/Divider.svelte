<svelte:options tag="my-divider"/>
<style>
    :host {
        box-sizing: border-box;
        display: block;
    }

    hr.unslotted{
        display: block;
        width: 100%;
        height: 1px;
        border: 0;
        background-color: var(--theme-divider-bordercolor);
    }
    hr.slotted {
        display: block;
        margin: 50px 0 -15px;
        width: 100%;
        height: 1px;
        border: 0;
        background-color: var(--theme-divider-bordercolor);
    }

    hr.slotted + div {
        display: inline-block;
        position: relative;
        left: 50%;
        margin: 0;
        padding: 5px 10px;
        border: 1px solid var(--theme-divider-bordercolor);
        transform: translateX(-50%);
        text-align: center;
        text-transform: uppercase;
        background-color: var(--theme-divider-bgcolor);
    }
    /* Alternative transform: translate */
    hr.slotted + div {
        border-width: 1px 0;
    }
    hr.slotted + div::before, hr + div::after {
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        background: var(--theme-divider-bordercolor);
        content: "";
    }
    hr.slotted + div::before {
        left: 0;
    }
    hr.slotted + div::after {
        right: 0;
    }


</style>

<script>

</script>


{#if $$slots.default}
    <hr class="slotted"/>
    <div><slot/></div>
{:else}
    <hr class="unslotted"/>
{/if}