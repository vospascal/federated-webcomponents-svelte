<svelte:options tag="my-consumer"/>
<script>
    import {onMount} from 'svelte';
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

    let channelData = "";

    onMount(async () => {
        channel.connect((data) => {
            channelData = data
        });
    });

    $: console.log(channelData)

    channel.cast("consumer");
</script>

<div>
    channelData: {channelData}
</div>