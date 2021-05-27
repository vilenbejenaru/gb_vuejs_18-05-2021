<template>
  <div id="app">
    <Counter v-if="flag" />
    <!-- <Counter />
    <Counter />
    <Counter />
    <Counter /> -->
    <button @click="flag = !flag">Change</button>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  },
  data() {
    return {
      flag: true
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
