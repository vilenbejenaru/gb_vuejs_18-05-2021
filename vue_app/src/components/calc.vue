<template>
  <div class='calc'>
      <input placeholder='a' v-model.number.lazy="op1" />
      <input placeholder='b' v-model.number="op2" />
      <span class='result'> = {{ result }} </span>
      <br />
      <button class='btn' @click="plus">a+b</button>
      <button class='btn' @click="minus">a-b</button>
      <button class='btn' v-on:click="mult">a*b</button>
      <button class='btn'  :disabled="op2 === 0" @click="div">a/b</button>
      <button class='btn' @click="pow">a**b</button>
      <button class='btn' @click="divInt">a%b</button>
      <hr />
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    msg: String,
    secondMsg: {
      type: String,
      default: 'User'
    }
  },
  data () {
    return {
      op1: '',
      op2: '',
      result: 0
    }
  },
  methods: {
    plus () {
      this.result = this.op1 + this.op2
    },
    minus () {
      this.result = this.op1 - this.op2
    },
    mult () {
      this.result = this.op1 * this.op2
    },
    div () {
      this.result = this.op1 / this.op2
    },
    pow () {
      this.result = this.op1 ** this.op2
      // this.result = Math.pow(this.op1, this.op2)
    },
    divInt () {
      this.result = this.op1 % this.op2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  width: 200px;
  height: 40px;
  margin: 10px;
  font-size: 24px;
  padding: 10px;
  box-sizing: border-box;
}
.result {
  font-size: 36px;
  color: blue;
}
.btn {
  background-color: #42b983;
  border: 2px solid 35495e;
  border-radius: 20px;
  width: 80px;
  height: 40px;
  font-size: 24px;
  margin: 5px;
}
</style>
