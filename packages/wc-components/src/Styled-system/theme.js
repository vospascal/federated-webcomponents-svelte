import { writable } from "svelte/store";

export default writable({
    color: {
        primary: "white",
        secondary: "white"
    },
    bg: {
        primary: "dodgerblue",
        secondary: "firebrick"
    },
    space: {
        s: "1.5rem",
        m: "2rem",
        l: "2.5rem"
    },
    font: {
        default: "sans-serif",
    },
    breakpoints: ["20rem", "48rem", "64rem"]
});
