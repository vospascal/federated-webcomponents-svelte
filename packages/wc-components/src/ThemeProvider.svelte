<svelte:options tag="my-theme-provider" />

<script>
    // https://www.colortools.net/color_complementary.html
    function styles(node, styles) {
        const head = document.head || document.getElementsByTagName('head')[0]
        const style = document.createElement('style');
        head.appendChild(style);
        style.type = 'text/css';
        let el = document.createTextNode(styles)
        style.appendChild(el);
        return {
            update(val) {
                const newEl = document.createTextNode(val)
                style.replaceChild(newEl, el)
                el = newEl
            },
            destroy() {
                head.removeElement(style)
            }
        }
    }

    let themeLight = `
    html {
        background:#fff;
        color:#333;
    }
    * {
        --theme-bg-primary: #159933;
        --theme-bg-secondary: #016FB7;
        --theme-bg-tertiary: #E75540;

        --theme-color-primary: #159933;
        --theme-color-secondary: #016FB7;
        --theme-color-tertiary: #E75540;

        --theme-space-s: 1.5rem;
        --theme-space-m: 2rem;
        --theme-space-l: 2.5rem;

        --theme-h1-fontsize: 'font-size: 3rem;
        --theme-h2-fontsize: 'font-size: 2.25rem;
        --theme-h3-fontsize: 'font-size: 1.5rem;
        --theme-h4-fontsize: 'font-size: 1.25rem;
        --theme-h5-fontsize: 'font-size: 1rem;
        --theme-h6-fontsize: 'font-size: .875rem;

        --theme-textdecoration-i: 'font-style: italic;
        --theme-textdecoration-b: 'font-weight: bold;
        --theme-textdecoration-underline: 'text-decoration: underline;
        --theme-textdecoration-strike: 'text-decoration: line-through;
        --theme-textdecoration-ttc: 'text-transform: capitalize;
        --theme-textdecoration-ttu: 'text-transform: uppercase;
    }
    `

    let themeDark = `
    html {
        background:#999;
        color:#fff;
    }
    * {
        --theme-bg-primary: #EA66CC;
        --theme-bg-secondary: #FE9048;
        --theme-bg-tertiary: #18AABF;

        --theme-color-primary: #EA66CC;
        --theme-color-secondary: #FE9048;
        --theme-color-tertiary: #18AABF;

        --theme-space-s: 1.5rem;
        --theme-space-m: 2rem;
        --theme-space-l: 2.5rem;

        --theme-h1-fontsize: 'font-size: 3rem;
        --theme-h2-fontsize: 'font-size: 2.25rem;
        --theme-h3-fontsize: 'font-size: 1.5rem;
        --theme-h4-fontsize: 'font-size: 1.25rem;
        --theme-h5-fontsize: 'font-size: 1rem;
        --theme-h6-fontsize: 'font-size: .875rem;

        --theme-textdecoration-i: 'font-style: italic;
        --theme-textdecoration-b: 'font-weight: bold;
        --theme-textdecoration-underline: 'text-decoration: underline;
        --theme-textdecoration-strike: 'text-decoration: line-through;
        --theme-textdecoration-ttc: 'text-transform: capitalize;
        --theme-textdecoration-ttu: 'text-transform: uppercase;
    }
    `

    $: theme = themeLight;

    const setTheme = (action) => {
        switch (action) {
            case 'dark' : {
                theme = themeDark;
                return
            }
            case 'light' : {
                theme = themeLight;
                return
            }
            default: theme = themeLight
        }
    }
</script>

<button on:click={() => setTheme("light")}>light</button>
<button on:click={() => setTheme("dark")}>dark</button>

<slot use:styles={theme} />