<svelte:options tag="my-heading-1" />

<style>
    :host {
        display: inline-block;
    }
    :host > h1{
        font-size: var(--theme-h1-fontsize-s);
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        line-height: 1.1;
        margin-bottom: 6px;
        font-weight: 400;
    }

    @media screen and (min-width: 521px) {
        :host > h1 {
            font-size: var(--theme-h1-fontsize-m);
        }
    }

    @media screen and (min-width: 921px) {
        :host > h1 {
            font-size: var(--theme-h1-fontsize-l);
        }
    }
</style>

<h1>
    <slot/>
</h1>