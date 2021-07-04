// https://www.colortools.net/color_complementary.html

let DarkTheme = `
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
export default DarkTheme;