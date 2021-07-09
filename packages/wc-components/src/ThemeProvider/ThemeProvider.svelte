<svelte:options tag="my-theme-provider" />

<script>

    import themeAction from "./themeAction"
    import Theme from "./Theme"
    import LightTheme from "./LightTheme"
    import DarkTheme from "./DarkTheme"


    $: ThemeShade = LightTheme;
    $: current = 'light';

    const setTheme = (action) => {
        switch (action) {
            case 'dark' : {
                ThemeShade = DarkTheme;
                current = action
                return
            }
            case 'light' : {
                ThemeShade = LightTheme;
                current = action
                return
            }
            default:
                ThemeShade = LightTheme
                current = 'light'
        }
    }
</script>

{#if current !== 'light'}
<button on:click={() => setTheme("light")}>make it light</button>
{/if}

{#if current !== 'dark'}
<button on:click={() => setTheme("dark")}>make it dark</button>
{/if}

<slot use:themeAction={[Theme, current]} use:themeAction={[ThemeShade, current]} />