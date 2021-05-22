<template>
  <div class="hello">
    <h1 v-if='isShow'>{{ msg }} {{secondMsg}}</h1>
    <button class="btn" @click="isShow = !isShow">Welcome</button>
    <br>
    <br>
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
      isShow: false
    }
  },
  methods: {
    writeConsole (event) {
      console.log(event)
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
.btn {
  background-color: #42b983;
  border: 2px solid 35495e;
  border-radius: 20px;
  width: 200px;
  height: 40px;
}
</style>
