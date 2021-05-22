<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Calculator />
    {{created}}
  </div>
</template>

<script>
import Calculator from './components/calc.vue'

export default {
  name: 'App',
  components: {
    Calculator
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
