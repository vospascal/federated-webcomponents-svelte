<svelte:options tag="my-modal"/>

<script context="module">
    // for passing focus on to the next Modal in the queue.
    // A module context level object is shared among all its component instances. [Read More Here](https://svelte.dev/tutorial/sharing-code)
    const modalList = []
</script>
<script>
    import {booleanStore} from './booleanStore'

    const store = booleanStore(false)
    const {isOpen, open, close} = store

    function keydown(e) {
        e.stopPropagation()
        if (e.key === 'Escape') {
            close()
        }
    }

    function transitionend(e) {
        const node = e.target
        node.focus()
    }

    function modalAction(node) {
        const returnFn = []
        // for accessibility
        if (document.body.style.overflow !== 'hidden') {
            const original = document.body.style.overflow
            document.body.style.overflow = 'hidden'
            returnFn.push(() => {
                document.body.style.overflow = original
            })
        }
        node.addEventListener('keydown', keydown)
        node.addEventListener('transitionend', transitionend)
        node.focus()
        modalList.push(node)
        returnFn.push(() => {
            node.removeEventListener('keydown', keydown)
            node.removeEventListener('transitionend', transitionend)
            modalList.pop()
            // Optional chaining to guard against empty array.
            modalList[modalList.length - 1]?.focus()
        })
        return {
            destroy: () => returnFn.forEach((fn) => fn()),
        }
    }

    export let closefooter; //attributes
    export let closeheader; //attributes
</script>
<style>
    div.modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
    }

    div.modal:not(:focus-within) {
        transition: opacity 0.1ms;
        opacity: 0.99;
    }

    div.backdrop {
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        width: 100%;
        height: 100%;
    }

    div.content-wrapper {
        z-index: 10;
        max-width: 70vw;
        border-radius: 0.3rem;
        background-color: white;
        overflow: hidden;
        padding: 1rem;
        min-width: 300px;
    }

    div.content {
        max-height: 50vh;
        overflow: auto;
    }

</style>

<button on:click={open}>
    {#if $$slots.trigger}
        <slot name="trigger"/>
    {:else}
        Open
    {/if}
</button>

{#if $isOpen}
    <div class="modal" use:modalAction tabindex="0">
        <div class="backdrop" on:click={close}/>
        <div class="content-wrapper">
            {#if $$slots.header}
                <div>
                    <slot name="header"/>
                    {#if closeheader}
                        <button on:click={close}>x</button>
                    {/if}
                </div>
            {/if}

            <div class="content">
                <slot name="content" {store}/>
            </div>

            {#if $$slots.footer}
                <div>
                    <slot name="footer"></slot>
                    {#if closefooter}
                        <button on:click={close}>Close</button>
                    {/if}
                </div>
            {/if}

        </div>

    </div>
{/if}