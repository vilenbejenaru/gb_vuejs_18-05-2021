<template>
  <div class='calc'>
    <div class="inputs">
      <input placeholder='a' v-model.number.lazy="op1" />
      <input placeholder='b' v-model.number.trim="op2" />
      <span class='result'> = {{ result }} </span>
    </div>
    <br />
    <div class="error"  v-if="hasError">
      {{errorText}}
    </div>
    <div class="btns">
      <button class='btn btn__qwerty' @click="calc('+')">a+b</button>
      <button class='btn' @click="calc('-')">a-b</button>
      <button class='btn' v-on:click="calc('*')">a*b</button>
      <button class='btn' @click="calc('/')">a/b</button>
      <button class='btn' @click="calc('**')">a**b</button>
      <button class='btn' @click="calc('%')">a%b</button>
    </div>
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
      result: 0,
      hasError: false,
      errorText: ' На ноль делить нельзя!!!'
    }
  },
  methods: {
    calc (operation) {
      this.hasError = false
      if (operation === '/' && this.op2 === 0) {
        this.hasError = true
        return
      }
      const { op1, op2 } = this
      // const op1 = this.op1
      const calcOperations = {
        '+': () => op1 + op2,
        '-': () => op1 - op2,
        '*': () => op1 * op2,
        '/': () => op1 / op2,
        '**': () => op1 ** op2,
        '%': () => op1 % op2
      }
      this.result = calcOperations[operation]()
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
  &__qwerty {
    color: #fff;
  }
 }
  .error {
    background-color: yellow;
    border: 3px solid red;
    padding: 10px;
  }
</style>
