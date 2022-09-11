<template>
  <div id="app" class="">
    <NavComponent/>
    <MainComponent/>
  </div>
</template>

<script>

import MainComponent from "./components/MainComponent.vue";
import NavComponent from "./components/NavComponent.vue";

export default {
  name: 'App',
  components: {
    NavComponent,
    MainComponent
}
}
</script>

<style>

</style>
