<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue'
  export default {
    name: 'App',
    components: {
      Tab
    }
  }
</script>

<style scoped>

  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  input, button{
    -webkit-appearance: none;
  }
</style>
