const App = {
    components: {},
    mounted() {
        window['mywc'].get('./my-header').then(module => module().default)
        window['mywc'].get('./my-footer').then(module => module().default)
        window['mywc'].get('./my-button').then(module => module().default)
        window['mywc'].get('./my-modal').then(module => module().default)
        window['mywc'].get("./my-spinner").then((module) => module().default);
        window['mywc'].get("./my-select").then((module) => module().default);
    },
    data: function () {
        return {
            options: [{name: 'lemon pie', value: 'lemon_pie'}, {
                name: 'cherry pie',
                value: 'cherry_pie'
            }, {name: 'apple pie', value: 'apple_pie'}],
        }
    },
    methods: {
        clickedIt: function (event) {
            console.log(event, 'clickedIt')
        },
        changedIt: function (event)  {
            console.log(event, 'changedIt')
        },
        onChange: function (event){
            console.log(event, 'onChange')
        }
    },
    template: `
      <div>
          <my-header></my-header>
          <my-footer></my-footer>


          <my-select placeholder="Select option" :options="JSON.stringify(options)" v-on:change="onChange" />
          
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
              <my-button v-on:click="clickedIt">nice button</my-button>
            </div>
            <div slot="footer">
              <strong>footer Modal</strong>
            </div>
          </my-modal>
      </div>
    `
}

export default App