<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LifeCycle />
    
    <!-- <button type="button" @click="goBack()">Go Back</button>  -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LifeCycle from '@/components/LifeCycle.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    LifeCycle
  },
  methods: {
    // goBack() {
    //   this.$router.go(-1)
    // }
  }
}
</script>
