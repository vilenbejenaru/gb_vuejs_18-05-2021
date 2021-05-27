<template>
    <div class="add-wrapper">
        <label for="">Date</label>
        <input placeholder="insert date" v-model.trim="date">
        <label for="">Category</label>
        <input placeholder="insert category" v-model.trim="category">
        <label for="">Value</label>
        <input placeholder="insert price" v-model="value">
        <button @click="onSave">Save</button>
        <button @click="onCancel">Cancel </button>
    </div>
</template>

<script>
    export default {
        name: 'addPayment',
        data() {
            return {
                date: '',
                category: '',
                value: 0
            }
        },
        methods: {
            onSave () {
                const { category, value} = this
                const data = {
                    date: this.date || this.getCurrentDate,
                    category,
                     value
                }
                 this.$emit('saveEmit', data)  //данные из инпутов передаются в родитель для сохранения
            },
            onCancel (){
                 this.$emit('cancelEmit')
            }
        },
        computed: {
            getCurrentDate () {
                const date = new Date ()
                const d = date.getDate ()
                const m = date.getMonth ()
                const y = date.getFullYear ()
                return `${d}.${m}.${y}`
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
