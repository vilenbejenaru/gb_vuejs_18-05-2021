<template>
  <div class="select">
    <select v-model="selected">
      <option
        v-for="(option, idx) in dictionaryList"
        :key="idx"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "SelectList",
  props: {
      dictionaryList: {
          type: Array,
          default: ()=>[],
          require: true
      }
  },
  data() {
    return {
      selected: '',
    }
  }
};
</script>
<style scoped>
.select {
  width: 100%;
}
</style>
