<template>
  <div id="app">
    <titleScroll></titleScroll>
    <router-view/>
  </div>
</template>

<script>
import titleScroll from '@/components/titlescroll'
export default {
  name: 'App',
  components:{
    titleScroll
  },
}
</script>

<style lang="scss">
  @import './index.scss';
</style>
