<svelte:options tag="my-heading-5" />

<style>
    :host {
        display: inline-block;
    }
    :host > h5{
        font-size: var(--theme-h5-fontsize-s);
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        line-height: 1.333;
        margin-bottom: 6px;
        font-weight: 500;
    }


    @media screen and (min-width: 521px) {
        :host > h5 {
            font-size: var(--theme-h5-fontsize-m);
        }
    }

    @media screen and (min-width: 921px) {
        :host > h5 {
            font-size: var(--theme-h5-fontsize-l);
        }
    }
</style>

<h5>
    <slot/>
</h5>