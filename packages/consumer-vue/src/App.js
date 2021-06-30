const App = {
    components: {},
    mounted() {
        window['mywc'].get('./my-header').then(module => module().default)
        window['mywc'].get('./my-footer').then(module => module().default)
        window['mywc'].get('./my-button').then(module => module().default)
        window['mywc'].get('./my-modal').then(module => module().default)
    },
    methods: {
        clickedIt: function (event) {
            console.log(event, 'clickedIt')
        }
    },
    template: `
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