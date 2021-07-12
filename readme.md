## federated modules / webcomponents 
Intergrating web-components build with Svelte in to React, Vue and Svelte

### steps
- 1: build  web components with Svelte expose with webpack module federation
- 2: load that web component in a Svelte app with webpack module federation
- 3: load that web component in a React app with webpack module federation
- 4: load that web component in a Vue app with webpack module federation

open vue on http://localhost:3003/
open svelte on http://localhost:3004/
open react on http://localhost:3005/

build with yarn berry (yarn 2)



## addEventListener


```sveltehtml
<script>
      import { createEventDispatcher } from 'svelte';
      import { get_current_component } from 'svelte/internal';
    
      const component = get_current_component();
      const originalDispatch = createEventDispatcher();
    
      const dispatch = (name, detail) => {
        originalDispatch(name, detail);
        component?.dispatchEvent(new CustomEvent(name, { detail }));
      }
    
      export let name
      $: (name) && dispatch('namechanged', { name })
    </script>
    
    Hello, {name}
    <input bind:value={name}>
```


```sveltehtml
<script>
  import { tick } from 'svelte';
  let value = '';

  async function onInput(event) {
    const input = this;
    let selectionStart = input.selectionStart;
    let selectionEnd = input.selectionEnd;

    value = input.value.toUpperCase();

    await tick();

    input.selectionStart = selectionStart;
    input.selectionEnd = selectionEnd;
  }
</script>
<input on:input={onInput} {value} />
```


