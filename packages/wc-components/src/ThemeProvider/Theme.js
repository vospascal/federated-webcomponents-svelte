import OpenSansRegular from './fonts/OpenSans-Regular.woff2';


let Theme = `
    @font-face {
      font-family: 'OpenSans';
      src: url('${OpenSansRegular}') format('woff2');
      font-display: swap;
    }

    html {
        font-family: OpenSans;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        text-rendering: optimizeLegibility;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    
    body {
        font-size: .875rem;
    }
    
    @media screen and (min-width: 521px) {
        body {
            font-size:1rem
        }
    }
    
    :root {
        --theme-zindex-dropdown: 1000;
        --theme-zindex-sticky: 1020;
        --theme-zindex-fixed: 1030;
        --theme-zindex-modal-backdrop: 1040;
        --theme-zindex-offcanvas: 1050;
        --theme-zindex-modal: 1060;
        --theme-zindex-popover: 1070;
        --theme-zindex-tooltip: 1080;
    
        --theme-bg-primary: #EA66CC;
        --theme-bg-secondary: #FE9048;
        --theme-bg-tertiary: #18AABF;
    
        --theme-color-primary: #EA66CC;
        --theme-color-secondary: #FE9048;
        --theme-color-tertiary: #18AABF;
    
        --theme-space-s: 1.5rem;
        --theme-space-m: 2rem;
        --theme-space-l: 2.5rem;
    
        --theme-h1-fontsize-s: 2.25rem;
        --theme-h1-fontsize-m: 2.5rem;
        --theme-h1-fontsize-l: 2.75rem;
    
        --theme-h2-fontsize-s: 1.75rem;
        --theme-h2-fontsize-m: 2rem;
        --theme-h2-fontsize-l: 2.25rem;
    
        --theme-h3-fontsize-s: 1.375rem;
        --theme-h3-fontsize-m: 1.375rem;
        --theme-h3-fontsize-l: 1.5rem;
    
        --theme-h4-fontsize-s: 1.25rem;
        --theme-h4-fontsize-m: 1.25rem;
        --theme-h4-fontsize-l: 1.25rem;
    
        --theme-h5-fontsize-s: 1.125rem;
        --theme-h5-fontsize-m: 1.125rem;
        --theme-h5-fontsize-l: 1.125rem;
    
        --theme-h6-fontsize-s: 1rem;
        --theme-h6-fontsize-m: 1rem;
        --theme-h6-fontsize-l: 1rem;
    
        --theme-textdecoration-i: font-style: italic;
        --theme-textdecoration-b: font-weight: bold;
        --theme-textdecoration-underline: text-decoration: underline;
        --theme-textdecoration-strike: text-decoration: line-through;
        --theme-textdecoration-ttc: text-transform: capitalize;
        --theme-textdecoration-ttu: text-transform: uppercase;
    }
`

export default Theme;