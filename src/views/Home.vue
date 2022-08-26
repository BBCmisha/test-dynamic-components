<template>
  <div class="home">
    <h1>Home</h1>
    <AsyncComponent></AsyncComponent>
    <div class="external-component" ref="externalComponentRef"></div>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue'
// import Test from '../components/Test.vue'
// import externalComponentsUtil from "../utils/external-component";

// const URL = 'http://localhost:8200/MyComponent/MyComponent.vue';

// const AsyncComponent = defineAsyncComponent(() => {
//     return new Promise((resolve) => {
//       fetch(URL).then((response) => resolve(response))
//     });
//   }
// );
const AsyncComponent = defineAsyncComponent(() => {
  return import('../components/Test.vue')
})

export default {
  name: "Home",
  components: { AsyncComponent },
  setup() {
    const externalComponentRef = ref()

    return { externalComponentRef }
  }
};
</script>
