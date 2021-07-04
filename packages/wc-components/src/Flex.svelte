<svelte:options tag="my-flex"/>
<script>
    import applyShadowRootStyles from "./applyShadowRootStyles"
    import {get_current_component} from "svelte/internal";

    import {styled, themeGet, validProps} from "./Styled-system/index";
    import theme from "./Styled-system/theme";
    import {raw} from './Goober/raw';

    const component = get_current_component();
    const generatedStyle = styled(
        validProps($$props, ['wrap', 'align', 'content']),
        $theme
    );
    const style = `
        font-family: ${themeGet($theme, "font.default")};
        display: flex;
        box-sizing: border-box;
        width: 100%;
    `;
    const generatedClassname = `${style} ${generatedStyle}`;
    const rawStyles = raw(`${style} ${generatedStyle}`, ':host');
    const styleBind = {rawStyles, root: component.shadowRoot}
</script>

<slot use:applyShadowRootStyles={styleBind}/>


