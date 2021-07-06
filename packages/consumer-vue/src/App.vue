<script>
import Test from "./Test";

export default {
  components: {Test},
  mounted() {
    window["mywc"].get("./my-header").then(module => module().default)
    window["mywc"].get("./my-footer").then(module => module().default)
    window["mywc"].get("./my-button").then(module => module().default)
    window["mywc"].get("./my-modal").then(module => module().default)
    window["mywc"].get("./my-spinner").then(module => module().default)
    window["mywc"].get("./my-select").then(module => module().default)
    window["mywc"].get("./my-box").then(module => module().default)
    window["mywc"].get("./my-flex").then(module => module().default)
    window['mywc'].get("./my-provider").then((module) => module().default);
    window['mywc'].get("./my-consumer").then((module) => module().default);
    window['mywc'].get("./my-theme-provider").then((module) => module().default);
    window['mywc'].get("./my-accordion").then((module) => module().default);
    window['mywc'].get("./my-accordion-section").then((module) => module().default);
  },
  data: function () {
    return {
      options: [
        {name: "lemon pie", value: "lemon_pie"},
        {
          name: "cherry pie",
          value: "cherry_pie"
        },
        {name: "apple pie", value: "apple_pie"}
      ],
      name: 'i should change'
    }
  },
  methods: {
    clickedIt: function (event) {
      console.log(event, "clickedIt")
    },
    changedIt: function (event) {
      console.log(event, "changedIt")
    },
    onChange: function (event) {
      this.name = event.detail.value;
      console.log(event, "onChange")
    }
  },
};
</script>

<template>
  <my-theme-provider>
    <my-header></my-header>

    <my-accordion single="true">
      <my-accordion-section title="Header One" open="true">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas consequat nisl id pulvinar.
      </my-accordion-section>
      <my-accordion-section title="Header Two" >
      is quis tortor ac sem elementum suscipit eu vitae sapien. Phasellus a pharetra diam, eget porttitor nunc.
      </my-accordion-section>
      <my-accordion-section title="Header Three">
      Phasellus a pharetra diam, eget porttitor nunc.
      </my-accordion-section>
    </my-accordion>

    <my-accordion>
      <my-accordion-section title="Header One" open="true">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas consequat nisl id pulvinar.
      </my-accordion-section>
      <my-accordion-section title="Header Two" open="true">
      is quis tortor ac sem elementum suscipit eu vitae sapien. Phasellus a pharetra diam, eget porttitor nunc.
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
          :bg='["#cd5c5b", "#e17672", "#ef938d", "#f9b1ab"]'
          :color='["#fff","#fff","#fff","#000"]'
          :p='["space.s", "space.m", "space.l"]'
          :width='["100%", "50%", "75%", "87.5%"]'
      >
        <my-flex>
          <my-box bg="bg.primary" color="#000000">a</my-box>
          <my-box bg="bg.secondary" color="#000000">b</my-box>
        </my-flex>
      </my-box>
      <my-box
          :bg='["#6476bc", "#7e8dce", "#99a4de", "#b6bdea"]'
          :color='["#fff","#fff","#fff","#000"]'
          :p='["space.s", "space.m", "space.l"]'
          :width='["100%", "50%", "25%", "12.5%"]'
      >
        <Test>boxed content</Test>
      </my-box>
    </my-flex>

    <my-select
        placeholder="Select option"
        :options="JSON.stringify(options)"
        v-on:change="onChange"
    />
    {{name}}

    <my-button
        theme="primary"
        name="test primary"
        :i-got-a-hyphen="name"
    >nice button</my-button>
    <my-button theme="secondary" name="test secondary">
      <span slot="start"><strong>go</strong></span>
      test
      <span slot="end"><strong>stop</strong></span>
    </my-button>

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
        <my-button v-on:click="clickedIt">nice button</my-button>
      </div>
      <div slot="footer">
        <strong>footer Modal</strong>
      </div>
    </my-modal>

    <my-footer></my-footer>

  </my-theme-provider>
</template>