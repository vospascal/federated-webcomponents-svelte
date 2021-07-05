// Allow hyphenated properties to be defined in a Svelte custom elements
// https://github.com/sveltejs/svelte/issues/3852
// https://github.com/electinth/common/blob/main/src/utils/custom-element.js
// https://github.com/oranmor/svelte-custom-element-dash-properties-example/blob/master/src/MyCustomComponentWrapper.js

export const customElements = {
    define: (tagName, CustomElement) => {
        class CustomElementWrapper extends CustomElement {
            static get observedAttributes() {
                return (super.observedAttributes || []).map((attr) =>
                    attr.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase(),
                );
            }

            attributeChangedCallback(attrName, oldValue, newValue) {
                attrName = attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase());
                // super.attributeChangedCallback(attrName, oldValue, newValue);
                super.attributeChangedCallback(
                    attrName,
                    oldValue,
                    newValue === '' ? true : newValue,  // Value of omitted value attribute will be true
                );
            }
        }

        window.customElements.define(tagName, CustomElementWrapper);
    },
};

///////////////// MyCustomComponent.svelte
// <script>
//     export let someDashProperty;
// </script>
//
// <svelte:options tag={null} />
//
// {someDashProperty}