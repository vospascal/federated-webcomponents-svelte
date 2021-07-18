<svelte:options tag="my-button" />
<style>
    :host {
        display: inline-block;
    }

    .button {
        display: inline-flex;
        align-items: center;
        -webkit-box-align: center;
        border-width: 0px;
        border-radius: 3px;
        box-sizing: border-box;
        max-width: 100%;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
        white-space: nowrap;
        cursor: pointer;
        padding: 10px 10px;
        vertical-align: middle;
        width: auto;
        -webkit-box-pack: center;
        justify-content: center;
        color: rgb(255, 255, 255) !important;
    }
    .button:hover {
        text-decoration: inherit;
        transition-duration: 0s, 0.15s;
        color: #fff !important;
    }

    .button--inner{
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
        opacity: 1;
        margin: 0 2px;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-flex-shrink: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    button[theme="primary"] {
        background: tomato;
        color:black;
    }
    button[theme="primary"]:hover {
        background: #d5452c;
    }

    button[compact="true"] {
        padding: 5px 10px;
    }

    button[theme="secondary"] {
        background: blue;
        color:white;
    }
    button[theme="secondary"]:hover  {
        background: #5353f8;
    }

    .button--before,
    .button--after{
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
        opacity: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin: 0 2px;
    }
</style>
<script>
    export let name = '';
    export let compact = 'false'
    export let theme = 'primary';

    //reactive to name
    // $: { name, handleChange() }
    // function handleChange() {
    //     console.log(name)
    // }
</script>


<button class="button" name={name} theme={theme} compact={compact}>
    <!--{name} reactive to name-->
    {#if $$slots.start}
        <span class="button--before">
              <slot name="start"/>
        </span>
    {/if}

    <span class="button--inner">
        <slot />
    </span>

    {#if $$slots.end}
        <span class="button--after">
            <slot name="end"/>
        </span>
    {/if}
</button>