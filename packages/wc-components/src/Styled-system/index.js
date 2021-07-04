import { shortHandAttributes } from "./constants";


//https://github.com/developit/dlv/blob/master/index.js
function dlv(obj, key, def, p, undef) {
    key = key.split ? key.split('.') : key;
    for (p = 0; p < key.length; p++) {
        obj = obj ? obj[key[p]] : undef;
    }
    return obj === undef ? def : obj;
}

const themeGet = (theme, pathOrValue) =>
    pathOrValue ? dlv(theme, pathOrValue, pathOrValue) : pathOrValue;

// https://github.com/manuschillerdev/svelte-styled-system
const createCssText = (attributes, theme, pseudoElementSelector) => {
    let cssText = "";
    const mediaQueries = [];

    for (let [name, value] of Object.entries(attributes)) {
        name = shortHandAttributes.get(name.toLowerCase()) || [name];

        //hack for webcomponent array strings
        try{
            value = value.split(',')
        }catch (e){}

        for (let cssProp of name) {
            if (cssProp.startsWith("_")) {
                cssProp = cssProp.replace("_", "&:");
                cssText += `${cssProp} { ${createCssText(value, theme, cssProp)} }`;
                continue;
            }

            // unresponsive definitions
            if (!Array.isArray(value)) {
                cssText += `${cssProp}:${themeGet(theme, value)};`;
                continue;
            }

            // responsive definitions
            cssText += `${cssProp}:${themeGet(theme, value[0])};`;
            if (value.length > 1) {
                for (let i = 0; i < value.length; i++) {
                    if (!mediaQueries[i]) {
                        // if a pseudoElementSelector like &:after is present
                        // we need to wrap the content in it
                        mediaQueries[i] = pseudoElementSelector
                            ? `${pseudoElementSelector} { `
                            : "";
                    }

                    mediaQueries[i] += `${cssProp}:${themeGet(theme, value[i])};`;
                    if (pseudoElementSelector) mediaQueries[i] += "}";
                }
            }
        }
    }

    // add media queries per breakpoint
    const { breakpoints = [] } = theme;
    for (let i = 0; i < breakpoints.length; i++)
        if (mediaQueries[i])
            cssText += `\n@media (min-width: ${breakpoints[i]}) {${mediaQueries[i]}}`;
    return cssText;
};

const styled = (attributes, theme) => {
    return createCssText(attributes, theme);
}

export { createCssText, themeGet, styled };