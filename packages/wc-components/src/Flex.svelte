<svelte:options tag="my-flex"/>
<script>
    import applyShadowRootStyles from "./applyShadowRootStyles"
    import {get_current_component} from "svelte/internal";

    import {styled, themeGet} from "./Styled-system/index";
    import theme from "./Styled-system/theme";
    import {raw} from './Goober/raw';

    const component = get_current_component();
    const generatedStyle = styled($$props, $theme);
    const style = `
        font-family: ${themeGet($theme, "font.default")};
        display: flex;
        box-sizing: border-box;
        width: 100%;
    `;
    const generatedClassname = `${style} ${generatedStyle}`;

    const rawStyles = raw(`${style} ${generatedStyle}`, ':host');
    const root = component.shadowRoot
    const styleBind = {rawStyles, root}
</script>

<slot use:applyShadowRootStyles={styleBind}/>


