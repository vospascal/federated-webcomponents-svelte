/** @jsx nativeEvents */
import React, {useEffect, useState} from "react";
import nativeEvents from 'jsx-native-events'
import Test from "./Test";


function App() {
    useEffect(() => {
        import('mywc/my-radio-button-group');
        import('mywc/my-accordion');
        import('mywc/my-accordion-section');
        import('mywc/my-header');
        import('mywc/my-footer');
        import('mywc/my-button');
        import('mywc/my-modal');
        import('mywc/my-spinner');
        import('mywc/my-select');
        import('mywc/my-box');
        import('mywc/my-flex');
        import('mywc/my-provider');
        import('mywc/my-consumer');
        import('mywc/my-theme-provider');
        import('mywc/my-tooltip');
        import('mywc/my-divider');
        import('mywc/my-heading-1');
        import('mywc/my-heading-2');
        import('mywc/my-heading-3');
        import('mywc/my-heading-4');
        import('mywc/my-heading-5');
        import('mywc/my-heading-6');
        import('mywc/my-switch');
        import('mywc/my-checkbox');
        import('mywc/my-tabs');
        import('mywc/my-tab');
        import('mywc/my-tab-list');
        import('mywc/my-tab-panel');
        import('mywc/my-radio-button');

        import('mywc/my-tab-panel');

    }, []);

    const clickedIt = (event) => {
        console.log(event, 'clickedIt')
    }


    const changedIt = (event) => {
        console.log(event, 'changedIt')
    }

    const options = [
        {name: 'lemon pie', value: 'lemon_pie'},
        {name: 'cherry pie', value: 'cherry_pie'},
        {name: 'apple pie', value: 'apple_pie'}
    ]

    return (
        <my-theme-provider>

            <my-divider/>
            <my-select placeholder="Select option" name="my-select" options={JSON.stringify(options)}  onEventChange={(e) => console.log(e, 'my-select')} />

            <my-divider/>

            <my-button  theme="primary"  name="test primary"  i-got-a-hyphen="test">nice button</my-button>
            <my-button theme="secondary" name="test secondary">
                <span slot="start"><strong>go</strong></span>
                test
                <span slot="end"><strong>stop</strong></span>
            </my-button>

            <my-divider/>

            <my-tabs>
                <my-tab-list>
                    <my-tab name="tab_one">tab name one</my-tab>
                    <my-tab name="tab_two">tab name two</my-tab>
                    <my-tab name="tab_three">tab name three</my-tab>
                </my-tab-list>
                <my-tab-panel name="tab_one">tab panel one</my-tab-panel>
                <my-tab-panel name="tab_two">tab panel two</my-tab-panel>
                <my-tab-panel name="tab_three">tab panel three</my-tab-panel>
            </my-tabs>

            <my-divider/>

            <my-radio-button-group name="radio_button" onEventChange={(e) => console.log(e, 'my-radio-button-group')}>
                <my-radio-button value="radio_one" checked="checked">radio_one</my-radio-button>
                <my-radio-button value="radio_two">radio_two</my-radio-button>
                <my-radio-button value="radio_three">radio_three</my-radio-button>
            </my-radio-button-group>

            <my-divider/>

            <my-switch name="switch_zero" value="switch_zero" onEventChange={(e) => console.log(e, 'my-switch')}/>
            <my-switch checked="checked" onEventChange={(e) => console.log(e, 'my-switch')}/>
            <my-switch disabled="disabled" onEventChange={(e) => console.log(e, 'my-switch')}/>
            <my-switch checked="checked" disabled="disabled" onEventChange={(e) => console.log(e, 'my-switch')}/>


            <my-divider/>

            <my-checkbox name="checkbox_zero" value="checkbox_zero" onEventChange={(e) => console.log(e, 'my-checkbox')}/>
            <my-checkbox name="checkbox_one" value="checkbox_one" checked="checked" onEventChange={(e) => console.log(e, 'my-checkbox')}>
                checkbox_one
            </my-checkbox>
            <my-checkbox name="checkbox_two" value="checkbox_two" disabled="disabled" onEventChange={(e) => console.log(e, 'my-checkbox')}>
                checkbox_two
            </my-checkbox>
            <my-checkbox name="checkbox_three" value="checkbox_three" checked="checked" disabled="disabled" onEventChange={(e) => console.log(e, 'my-checkbox')}>
                checkbox_three
            </my-checkbox>

            <my-divider/>

            <h1>Typography</h1>
            <h2>Headings</h2>
            <my-flex wrap="wrap" align="stretch" content="stretch" style={{borderBottom: '1px dotted #dedddc', padding: '5px'}}>
                <my-box width={["100%", "50%"]}>Heading 1</my-box>
                <my-box width={["100%", "50%"]}>
                    <my-heading-1>
                        The quick brown fox jumps over the lazy dog
                    </my-heading-1>
                </my-box>
            </my-flex>
            <my-flex wrap="wrap" align="stretch" content="stretch" style={{borderBottom: '1px dotted #dedddc', padding: '5px'}}>
                <my-box width={["100%", "50%"]}>Heading 2</my-box>
                <my-box width={["100%", "50%"]}>
                    <my-heading-2>
                        The quick brown fox jumps over the lazy dog
                    </my-heading-2>
                </my-box>
            </my-flex>
            <my-flex wrap="wrap" align="stretch" content="stretch" style={{borderBottom: '1px dotted #dedddc', padding: '5px'}}>
                <my-box width={["100%", "50%"]}>Heading 3</my-box>
                <my-box width={["100%", "50%"]}>
                    <my-heading-3>
                        The quick brown fox jumps over the lazy dog
                    </my-heading-3>
                </my-box>
            </my-flex>
            <my-flex wrap="wrap" align="stretch" content="stretch" style={{borderBottom: '1px dotted #dedddc', padding: '5px'}}>
                <my-box width={["100%", "50%"]}>Heading 4</my-box>
                <my-box width={["100%", "50%"]}>
                    <my-heading-4>
                        The quick brown fox jumps over the lazy dog
                    </my-heading-4>
                </my-box>
            </my-flex>
            <my-flex wrap="wrap" align="stretch" content="stretch" style={{borderBottom: '1px dotted #dedddc', padding: '5px'}}>
                <my-box width={["100%", "50%"]}>Heading 5</my-box>
                <my-box width={["100%", "50%"]}>
                    <my-heading-5>
                        The quick brown fox jumps over the lazy dog
                    </my-heading-5>
                </my-box>
            </my-flex>
            <my-flex wrap="wrap" align="stretch" content="stretch" style={{borderBottom: '1px dotted #dedddc', padding: '5px'}}>
                <my-box width={["100%", "50%"]}>Heading 6</my-box>
                <my-box width={["100%", "50%"]}>
                    <my-heading-6>
                        The quick brown fox jumps over the lazy dog
                    </my-heading-6>
                </my-box>
            </my-flex>



            <my-header/>

            <my-divider>my divider</my-divider>
            <p>
                Some text Some text
                <my-tooltip open="false">
                    <span slot="label"> hover me </span>
                    <span slot="content">
                        this is content for the tooltip
                        this is content for the tooltip
                    </span>
                </my-tooltip>
                Even more content here.
            </p>

            <my-divider/>


            <my-accordion single="true">
                <my-accordion-section name="header_one" title="Header One" open="true">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas consequat nisl id pulvinar.
                </my-accordion-section>
                <my-accordion-section name="header_two" title="Header Two">
                    is quis tortor ac sem elementum suscipit eu vitae sapien. Phasellus a pharetra diam, eget porttitor
                    nunc.
                </my-accordion-section>
                <my-accordion-section name="header_three" title="Header Three">
                    Phasellus a pharetra diam, eget porttitor nunc.
                </my-accordion-section>
            </my-accordion>

            <my-accordion>
                <my-accordion-section name="header_one" title="Header One" open="true">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas consequat nisl id pulvinar.
                </my-accordion-section>
                <my-accordion-section name="header_two" title="Header Two" open="true">
                    is quis tortor ac sem elementum suscipit eu vitae sapien. Phasellus a pharetra diam, eget porttitor
                    nunc.
                </my-accordion-section>
            </my-accordion>

            <my-provider>
                <div>
                    <my-consumer/>
                    <my-consumer/>
                </div>
            </my-provider>

            <my-flex wrap="wrap" align="stretch" content="stretch">
                <my-box
                    bg={["#cd5c5b", "#e17672", "#ef938d", "#f9b1ab"]}
                    color={["#fff", "#fff", "#fff", "#000"]}
                    p={["space.s", "space.m", "space.l"]}
                    width={["100%", "50%", "75%", "87.5%"]}
                >
                    <my-flex>
                        <my-box bg="bg.primary" color="#000000">a</my-box>
                        <my-box bg="bg.secondary" color="#000000">b</my-box>
                    </my-flex>
                </my-box>
                <my-box
                    bg={["#6476bc", "#7e8dce", "#99a4de", "#b6bdea"]}
                    color={["#fff", "#fff", "#fff", "#000"]}
                    p={["space.s", "space.m", "space.l"]}
                    width={["100%", "50%", "25%", "12.5%"]}
                >
                    <Test>boxed content</Test>
                </my-box>
            </my-flex>

            <my-spinner/>
            <my-spinner theme="secondary"/>

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

            <my-footer></my-footer>
        </my-theme-provider>
    );
}

export default App;
