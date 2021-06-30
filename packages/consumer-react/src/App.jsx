import React, {useEffect} from "react";

function App() {
    useEffect(() => {
        window['mywc'].get("./my-header").then((module) => module().default);
        window['mywc'].get("./my-footer").then((module) => module().default);
    }, [])
  return (
    <div>
        <my-header></my-header>
        <my-footer></my-footer>
    </div>
  );
}

export default App;
