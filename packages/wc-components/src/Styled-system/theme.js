import { writable } from "svelte/store";

export default writable({
    headings :{
        h1: 'font-size: 3rem;',
        h2: 'font-size: 2.25rem;',
        h3: 'font-size: 1.5rem;',
        h4: 'font-size: 1.25rem;',
        h5: 'font-size: 1rem;',
        h6: 'font-size: .875rem;',
    },
    typestyles: {
        i:         'font-style: italic;',
        b:         'font-weight: bold;',
        underline: 'text-decoration: underline;',
        strike:    'text-decoration: line-through;',
        ttc:       'text-transform: capitalize;',
        ttu:       'text-transform: uppercase;',
    },
    buttons: {
        primary: {},
        secondary: {},
        tertiary: {},
    },
    color: {
        primary: {
            color: "#fff",
        },
        secondary: {
            color: "#fff",
        },
        tertiary: {
            color: "#fff",
        },
    },
    bg: {
        primary: {
            color: "#159933",
        },
        secondary: {
            color: "#016FB7",
        },
        tertiary: {
            color: "#E75540",
        },
    },
    space: {
        s: "1.5rem",
        m: "2rem",
        l: "2.5rem"
    },
    font: {
        default: "sans-serif",
    },
    breakpoints: ['540px', '720px', '960px', '1140px'], // box width array
});
