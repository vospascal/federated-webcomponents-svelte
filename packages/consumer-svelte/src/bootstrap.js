import App from "./App.svelte";

// window.wcheader.get("./wcheader").then((module) => module().default);

const app = new App({
  target: document.getElementById("app"),
});

window.app = app;

export default app;