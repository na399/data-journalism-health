<i18n src="~/assets/messages.json"></i18n>

<template>
  <div class="container">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <TitlePage :titleContent="$t('title')" />
      </div>
      <div class="section">
        <SectionPage :sectionContent="$t('section-1')" />
      </div>
      <div class="section">
        <ContentPage />
      </div>
      <div class="section">
        <QuestionPage answerPage="#section-1-3" />
      </div>
      <div class="section">
        <ContentPage :boxSizes="[1, 3]" :isAnswerHidden="true" prevQid="#section-1-2" />
      </div>
      <div class="section">
        <SectionPage
          :sectionContent="$t('section-2')"
          :spacers="[1, 3]"
          :bgImg="require('~/assets/img/bg/online-marketing-hIgeoQjS_iE-unsplash.jpg')"
          bgPos="right center"
        />
      </div>
      <div class="section bg-purple-200">つづく</div>
    </full-page>
  </div>
</template>

<script>
import TitlePage from '~/components/TitlePage.vue'
import SectionPage from '~/components/SectionPage.vue'
import ContentPage from '~/components/ContentPage.vue'
import QuestionPage from '~/components/QuestionPage.vue'

export default {
  components: {
    TitlePage,
    SectionPage,
    ContentPage,
    QuestionPage
  },
  data() {
    return {
      options: {
        licenseKey: 'IN_REQUEST',
        anchors: [
          'home',
          'section-1-0',
          'section-1-1',
          'section-1-2',
          'section-1-3',
          'section-2-0',
          'tbc'
        ],
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
