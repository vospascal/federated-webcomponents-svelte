<svelte:options tag="my-heading-3" />

<style>
    :host {
        display: inline-block;
    }
    :host > h3{
        font-size: var(--theme-h3-fontsize-s);
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        line-height: 1.1;
        margin-bottom: 6px;
        font-weight: 500;
    }

    @media screen and (min-width: 521px) {
        :host > h3 {
            font-size: var(--theme-h3-fontsize-m);
        }
    }

    @media screen and (min-width: 921px) {
        :host > h3 {
            font-size: var(--theme-h3-fontsize-l);
        }
    }
</style>

<h3>
    <slot/>
</h3>