<i18n src="~/assets/messages.json"></i18n>

<template>
  <div class="container">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section"><TitlePage :titleString="$t('title')" /></div>
      <div class="section">つづく</div>
    </full-page>
  </div>
</template>

<script>
import TitlePage from '~/components/TitlePage.vue'

export default {
  components: {
    TitlePage,
  },
  data() {
    return {
      options: {
        licenseKey: 'IN_REQUEST',
        anchors: ['home', 'tbc'],
        verticalCentered: true,
        controlArrows: true,
        scrollBar: true,
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    }
  }
}
</script>

<style>
.container {
  @apply min-w-full min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
