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
      <button class='btn' v-for="(operation, idx) in buttons"
      :key="idx"
      @click="calc(operation)"
      :title="operation"
      :disabled="op1 === '' && op2 === '' "> {{operation}} </button>
    </div>
    <br>
    <div class="logs">
      Последние вычисления: <br>{{logs}}
    </div>
    <div class="result">
      <div class="cond" v-if="result > 0">Результат положительный</div>
      <div class="cond" v-else-if="result < 0">Результат отрицательный</div>
      <div class="cond" v-else>Результат = 0 </div>
    </div>
    <div class="numbers" v-for="(item, idx) in numbersComp" :key="idx"> {{item}} </div>
    <div class="fibo">Фибоначчи: {{fibResult}}</div>
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
      errorText: ' На ноль делить нельзя!!!',
      buttons: ['+', '-', '*', '/', '**', '%'],
      numbers: [1, 2, 3, 5, 6, 7, 8, 11, 2, 3, 5],
      logs: {}
    }
  },
  watch: {
    op2 (newValue) {
      console.log(newValue)
      this.result = this.op1 + newValue
    }
  },
  methods: {
    fib (n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2)
    },
    calc (operation) {
      this.hasError = false
      if (operation === '/' && this.op2 === 0) {
        this.hasError = true
        return
      }
      const { op1, op2 } = this
      // const op1 = this.op1
      this.$set(this.logs, Date.now(), `${op1} ${operation} ${op2} = ?`)
      // this.logs[Date.now()] = `${op1} ${operation} ${op2}=?` без реактивности

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
  },
  computed: {
    numbersComp () {
      return this.numbers.filter(n => n > 6)
    },
    fib1 () {
      return this.fib(this.op1)
    },
    fibResult () {
      return this.fib(this.op1) - this.fib(this.op2)
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
  border: 2px solid #35495e;
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
  .cond {
    font-size: 24px;
    color: #35495e;
  }
  .numbers {
    font-size: 24px;
    color: #35495e;
  }
  .logs, .fibo {
  border: 1px solid #35495e;
  margin: 20px 0;
  padding: 10px;
  }
</style>
