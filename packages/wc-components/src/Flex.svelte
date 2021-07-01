<svelte:options tag="my-flex"/>
<style>
    :host {
        display: inline-block;
        width: 100%;
    }
</style>
<script>
    import {get_current_component} from "svelte/internal";
    const component = get_current_component();

    import {styled} from "./Styled-system/index";
    import theme from "./Styled-system/theme";
    import {css} from 'goober';

    const shadowSheet = css.bind({target: component.shadowRoot})
    const style = styled($$props, $theme);
    const generatedClassname = shadowSheet`display: flex; ${style}`;

</script>

<div class="{generatedClassname}">
    <slot/>
</div>


