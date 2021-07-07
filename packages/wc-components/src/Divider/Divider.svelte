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
        background-color: rgba(0, 0, 0, 0.35);
    }
    hr.slotted {
        display: block;
        margin: 50px 0 -15px;
        width: 100%;
        height: 1px;
        border: 0;
        background-color: rgba(0, 0, 0, 0.35);
    }
    hr.slotted + h2 {
        display: inline-block;
        position: relative;
        left: 50%;
        margin: 0;
        padding: 5px 10px;
        border: 1px solid #453986;
        transform: translateX(-50%);
        color: #453986;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.32em;
        text-align: center;
        text-transform: uppercase;
        background-color: #fff;
    }
    hr.slotted + h2::first-letter {
        margin-left: 0.32em;
    }

    /* Alternative transform: translate */
    hr.slotted + h2 {
        border-width: 1px 0;
    }
    hr.slotted + h2::before, hr + h2::after {
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        background: #453986;
        content: "";
    }
    hr.slotted + h2::before {
        left: 0;
    }
    hr.slotted + h2::after {
        right: 0;
    }

</style>

<script>

</script>


{#if $$slots.default}
    <hr class="slotted"/>
    <h2><slot/></h2>
{:else}
    <hr class="unslotted"/>
{/if}