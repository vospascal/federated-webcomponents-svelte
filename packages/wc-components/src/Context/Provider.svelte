<svelte:options tag="my-provider" />
<script>
    import {get_current_component} from "svelte/internal";
    import {Channel} from "./channel";

    const component = get_current_component();
    const channel = new Channel(
        // Element
        component,
        // string
        "test",
        // associates the composed option to the event
        // this allows bypassing the shadowDOM when connecting the channels
        true
    );

    channel.connect((data) => {console.log(data, 'provider')});

    channel.cast("provider");

    const sendValueToChild = (value) => {
        channel.cast(value);
    }
</script>
<div>
    <button on:click={() => sendValueToChild('a')}>a</button>
    <button on:click={() => sendValueToChild('b')}>b</button>
    <slot/>
</div>