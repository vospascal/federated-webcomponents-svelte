<svelte:options tag="my-theme-provider" />

<script>

    import themeAction from "./themeAction"
    import LightTheme from "./LightTheme"
    import DarkTheme from "./DarkTheme"

    $: theme = LightTheme;
    $: current = 'light';

    const setTheme = (action) => {
        switch (action) {
            case 'dark' : {
                theme = DarkTheme;
                current = action
                return
            }
            case 'light' : {
                theme = LightTheme;
                current = action
                return
            }
            default:
                theme = LightTheme
                current = 'light'
        }
    }
</script>

<button on:click={() => setTheme("light")}>light</button>
<button on:click={() => setTheme("dark")}>dark</button>

<slot use:themeAction={[theme, current]} />