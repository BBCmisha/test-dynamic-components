<template id="my-component">
  <div class="my-component">
    <h2>test component</h2>
    <span>{{ count }}</span>
    <button @click="clickBtnHandler">Count</button>
  </div>
</template>

<script>
app.component("my-component", {
  template: "#my-component",
  data: () => ({
    count: 0
  }),
  methods: {
    clickBtnHandler: function () {
      this.count += 1
    },
  },
  created() {
    console.log('created')
  }
})
</script>

<style>
.my-component {
  border: 1px solid red;
}
</style>
