// https://www.colortools.net/color_complementary.html



let LightTheme = `
    html {
        background:#fff;
        color:#333;
    }
    * {
        --theme-zindex-dropdown: 1000;
        --theme-zindex-sticky: 1020;
        --theme-zindex-fixed: 1030;
        --theme-zindex-modal-backdrop: 1040;
        --theme-zindex-offcanvas: 1050;
        --theme-zindex-modal: 1060;
        --theme-zindex-popover: 1070;
        --theme-zindex-tooltip: 1080;
        
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

export default LightTheme;