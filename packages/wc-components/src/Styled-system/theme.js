import {writable} from "svelte/store";

export default writable({
    headings: {
        h1: 'var(--theme-h1-fontsize)',
        h2: 'var(--theme-h2-fontsize)',
        h3: 'var(--theme-h3-fontsize)',
        h4: 'var(--theme-h4-fontsize)',
        h5: 'var(--theme-h5-fontsize)',
        h6: 'var(--theme-h6-fontsize)',
    },
    textdecoration: {
        i: '--theme-textdecoration-i',
        b: '--theme-textdecoration-b',
        underline: '--theme-textdecoration-underline',
        strike: '--theme-textdecoration-strike',
        ttc: '--theme-textdecoration-ttc',
        ttu: '--theme-textdecoration-ttu',
    },
    color: {
        primary: "var(--theme-color-primary)",
        secondary: "var(--theme-color-secondary)",
        tertiary: "var(--theme-color-tertiary)",
    },
    bg: {
        primary: "var(--theme-bg-primary)",
        secondary: "var(--theme-bg-secondary)",
        tertiary: "var(--theme-bg-tertiary)",
    },
    space: {
        s: "var(--theme-space-s)",
        m: "var(--theme-space-m)",
        l: "var(--theme-space-l)",
    },
    font: {
        default: "sans-serif",
    },
    breakpoints: [
        '540px',
        '720px',
        '960px',
        '1140px'
    ], // mediaquery css var's not compatible
});
