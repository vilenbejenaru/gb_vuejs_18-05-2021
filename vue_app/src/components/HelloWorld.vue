<template>
  <div class="hello">
    <input v-model.number="op1"/>
    <input v-model.number="op2"/>
    <span class="result"> = {{result}} </span>
    <br>
    <button class="btn" @click="plus">+</button>
    <button class="btn" @click="minus">-</button>
    <button class="btn" v-on:click="mult">*</button>
    <button class="btn" @click="div">/</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    secondMsg: {
      type: String,
      default: 'User'
    }
  },
  data () {
    return {
      op1: 0,
      op2: 0,
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
  font-size: 36px;
  margin: 5px;
}
</style>
