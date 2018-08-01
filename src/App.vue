<template>
  <div id="app" data-view>
    <my-header />
    <my-landing-page />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyLandingPage from './components/MyLandingPage.vue'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
    MyLandingPage
  }
}
</script>


<style lang="scss" src="./assets/styles/style.scss"></style>