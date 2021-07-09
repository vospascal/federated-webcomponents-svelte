<svelte:options tag="my-heading-2" />

<style>
    :host {
        display: inline-block;
    }
    :host > h2{
        font-size: var(--theme-h2-fontsize-s);
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        line-height: 1.1;
        margin-bottom: 6px;
        font-weight: 400;
    }

    @media screen and (min-width: 521px) {
        :host > h2 {
            font-size: var(--theme-h2-fontsize-m);
        }
    }

    @media screen and (min-width: 921px) {
        :host > h2 {
            font-size: var(--theme-h2-fontsize-l);
        }
    }
</style>

<h2>
    <slot/>
</h2>