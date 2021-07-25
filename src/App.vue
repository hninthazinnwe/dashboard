<template>
  <div class="d-flex">
    <sidebar/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import sidebar from './components/sidebar.vue'

export default {
  components: {
    sidebar
  }
}
</script>
<style>
  
</style>