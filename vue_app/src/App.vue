<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome," :secondMsg="fio" />
    {{created}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      operand1: 0,
      operand2: 1,
      name: 'Vilen',
      lastName: 'Bejenaru'
    }
  },
  computed: {
    fio () {
      return `${this.name} ${this.lastName}`
    },
    created () {
      return `Created by ${this.name} ${this.lastName}`
    }
  }
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
