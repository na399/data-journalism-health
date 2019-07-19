<template>
  <div class="container">
    <full-page ref="fullpage" :options="fullPageOptions" id="fullpage">
      <div class="section" v-for="page in spec.pages" :key="page.name">
        <TitlePage v-if="page.type == 'title'" :content="page.content" />
        <SectionPage
          v-if="page.type == 'section'"
          :content="page.content"
          :spacers="page.spacers"
          :bgImg="page.bgImg"
          :bgPos="page.bgPos"
        />
        <ContentPage
          v-if="page.type == 'content'"
          :contentTop="page.contentTop"
          :contentBottom="page.contentBottom"
          :boxSizes="page.boxSizes"
          :questionId="page.questionId"
          :isAnswerHidden="page.questionId && !recordedAnswers.hasOwnProperty(page.questionId)"
          :isButtomBox="page.isButtomBox"
        />
        <QuestionPage
          v-if="page.type == 'question'"
          :questionId="page.questionId"
          :question="page.question"
          :answerChoices="page.answerChoices"
          :answerPage="page.answerPage"
          :boxSizes="page.boxSizes"
        />
      </div>
    </full-page>
  </div>
</template>

<script>
import TitlePage from '~/components/TitlePage.vue'
import SectionPage from '~/components/SectionPage.vue'
import ContentPage from '~/components/ContentPage.vue'
import QuestionPage from '~/components/QuestionPage.vue'

import spec from '~/assets/spec.th.json'

export default {
  components: {
    TitlePage,
    SectionPage,
    ContentPage,
    QuestionPage
  },
  data() {
    return {
      spec: spec,
      recordedAnswers: {},
      fullPageOptions: {
        licenseKey: 'wobwH@p8',
        anchors: spec.pages.map(page => page.name),
        verticalCentered: true,
        controlArrows: true,
        scrollBar: true,
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    }
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'localStorage/recordAnswer':
          this.recordedAnswers = state.localStorage.recordedAnswers
          break
      }
    })
  },
  head () {
    return {
      script: [
        { src: 'https://public.flourish.studio/resources/embed.js' }
      ]
    }
  }
}
</script>

<style>
.container {
  @apply min-w-full min-h-screen flex justify-center items-center text-center mx-auto bg-purple-400;
}
</style>
