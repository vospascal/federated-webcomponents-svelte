### info
- https://www.youtube.com/watch?v=HUVawJXeHfU

### commands
- To set yarn to version 2 "berry" -> `yarn set version berry`
- to see plugins -> `yarn plugin list`
- set constrains first install -> `yarn plugin import constraints`
- check constrains -> `yarn constraints` run with `yarn constraints --fix` to remove packages that are wrong
- to see workspaces -> `yarn workspaces list`
- install workspace tools -> `yarn plugin import workspace-tools`
- run all builds -> `yarn workspaces foreach run build`
- install interactive tools -> `yarn plugin import interactive-tools`
- to see if all packages are up to date -> `yarn upgrade-interactive`
- `yarn why fsevents` shows where its been used

### remarks
used injector code from -> `https://github.com/react-boilerplate/redux-injectors`

###problems
- https://github.com/supasate/connected-react-router doesnt support history v5 yet



Button.svelte
<script>
    export let theme;
</script>

<style>
  button[theme="primary"] {
    background: tomato;
  }

  button[theme="text"] {
    background: blue;
  }
</style>

<button theme={theme}>Button</button>


App.svelte
<script>
    import Button from "./Button.svelte";
</script>

<Button theme="primary" />
<Button theme="text" />




<custom-element class="class-to-add"></custom-element>
export { clazz as class };
<div class={`col-${width} ${clazz || ''}`}></div>




:host {
    --Button--base-color: #c6538c;
    --Button--disabled-color: #c6538ce1;
}
button {
    background-color: var(--Button--base-color);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
}
button[disabled] {
    background: var(--Button--disabled-color);
}
