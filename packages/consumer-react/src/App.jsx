import React, {useEffect} from "react";

function App() {
    useEffect(() => {
        window['mywc'].get("./my-header").then((module) => module().default);
        window['mywc'].get("./my-footer").then((module) => module().default);
        window['mywc'].get("./my-button").then((module) => module().default);
        window['mywc'].get("./my-modal").then((module) => module().default);
    }, [])

    const clickedIt = (event) => {
        console.log(event, 'clickedIt')
    }

  return (
    <div>
        <my-header></my-header>
        <my-footer></my-footer>
        <my-button theme="primary" name="test primary">nice button</my-button>
        <my-button theme="secondary" name="test primary">
            <span slot="start"><strong>go</strong></span>
            test
            <span slot="end"><strong>stop</strong></span>
        </my-button>

        <my-modal closefooter="true" closeheader="true">
            <div slot="trigger">
                abc
            </div>
            <div slot="header">
                <strong>header Modal</strong>
            </div>
            <div slot="content">
                content
                <my-button onClick={clickedIt}>nice button</my-button>
            </div>
            <div slot="footer">
                <strong>footer Modal</strong>
            </div>
        </my-modal>
    </div>
  );
}

export default App;
