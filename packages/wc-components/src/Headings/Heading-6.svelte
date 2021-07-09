<svelte:options tag="my-heading-6" />

<style>
    :host {
        display: inline-block;
    }
    :host > h6{
        font-size: var(--theme-h6-fontsize-s);
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        line-height: 2rem;
        margin-bottom: 6px;
        font-weight: 500;
    }

    @media screen and (min-width: 521px) {
        :host > h6 {
            font-size: var(--theme-h6-fontsize-m);
        }
    }

    @media screen and (min-width: 921px) {
        :host > h6 {
            font-size: var(--theme-h6-fontsize-l);
        }
    }
</style>

<h6>
    <slot/>
</h6>