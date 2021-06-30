/** @jsx nativeEvents */
import React, {useEffect} from "react";
import nativeEvents from 'jsx-native-events'


function App() {
    useEffect(() => {
        window['mywc'].get("./my-header").then((module) => module().default);
        window['mywc'].get("./my-footer").then((module) => module().default);
        window['mywc'].get("./my-button").then((module) => module().default);
        window['mywc'].get("./my-modal").then((module) => module().default);
        window['mywc'].get("./my-spinner").then((module) => module().default);
        window['mywc'].get("./my-select").then((module) => module().default);
    }, [])

    const clickedIt = (event) => {
        console.log(event, 'clickedIt')
    }


    const changedIt = (event) => {
        console.log(event, 'changedIt')
    }

    const options = [
        {name: 'lemon pie', value:'lemon_pie' },
        {name: 'cherry pie', value:'cherry_pie' },
        {name: 'apple pie', value:'apple_pie' }
    ]

  return (
    <div>
        <my-header></my-header>
        <my-footer></my-footer>

        <my-select placeholder="Select option" options={JSON.stringify(options)} onEventChange={(e)=> console.log(e)} />

        <my-button theme="primary" name="test primary">nice button</my-button>
        <my-button theme="secondary" name="test primary">
            <span slot="start"><strong>go</strong></span>
            test
            <span slot="end"><strong>stop</strong></span>
        </my-button>

        <my-spinner />
        <my-spinner theme="secondary" />

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
