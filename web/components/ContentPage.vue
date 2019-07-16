<i18n src="~/assets/messages.json"></i18n>

<template>
  <div class="page">
    <div
      :class="['top-box', {'blurred': isHidingAnswer}]"
      :style="{'flex-grow': boxSizes[0]}"
      v-html="sectionContentTop"
    ></div>
    <div
      :class="['bottom-box', {'blurred': isHidingAnswer}]"
      :style="{'flex-grow': boxSizes[1]}"
      v-html="sectionContentBottom"
    ></div>
    <div class="overlay" v-if="isHidingAnswer">
      <span>{{ $t('q-not-ans') }}</span>
      <br />
      <a :href="prevQid">
        <button class="btn btn-teal">{{ $t('return-to-prev-q') }}</button>
      </a>
      <br />
      <button class="btn btn-pink-text" @click="revealAns()">{{ $t('reveal-ans') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxSizes: {
      type: Array,
      default: () => [2, 1]
    },
    sectionContentTop: {
      type: String,
      default: '<span>(sectionContentTop)</span>'
    },
    sectionContentBottom: {
      type: String,
      default: '<span>(sectionContentBottom)</span>'
    },
    isHidingAnswer: {
      type: Boolean,
      default: false
    },
    prevQid: {
      type: String,
      default: '#home'
    }
  },
  methods: {
    revealAns() {
      this.$props.isHidingAnswer = false;
    }
  },
}
</script>

<style scoped>
.page {
  @apply w-full h-full bg-purple-400 flex flex-col items-center justify-center;
}

.page * {
  @apply flex flex-col items-center justify-center;
}

.top-box,
.bottom-box {
  @apply w-5/6 max-w-xl rounded-lg shadow-md m-5 p-10 bg-purple-100;
}

.blurred {
  filter: blur(10px);
}

.overlay {
  @apply w-full h-full absolute;
  background-color: hsla(0, 0%, 100%, 0.7);
}

.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-teal {
  @apply bg-teal-600 text-white;
}
.btn-teal:hover {
  @apply bg-teal-800;
}
.btn-pink-text {
  @apply text-pink-700 text-sm;
}
.btn-pink-text:hover {
  @apply text-pink-900;
}
</style>
