<template>
    <div>
        <div v-for="(item, index) in messages" :key="index">
            <p>{{ item }}</p>
        </div>
    </div>
</template>

<script>
const msg = 'hello';
export default {
    name: 'LifeCycle',
    data() {
        return {
            msg: 'hello',
            messages: []
        }
    },
    beforeCreate() { /*this.log('beforeCreate');*/ console.log(msg, this.msg) },
    created() { this.log('created'); },
    beforeMount: function () { this.log('beforeMount'); },
    mounted() { this.log('mounted'); },
    updated() { /*this.log('updated');*/ },
    beforeUpdate() { /*this.log('beforeUpdate');*/ },
    beforeDestroy() { this.log('beforeDestory'); },
    destroyed() { this.log('destoryed'); },
    methods: {
        log(name) {
            let now = new Date();
            let message = `${now} - ${name}`
            this.messages.push(message);
            console.log(message);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>