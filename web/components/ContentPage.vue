<i18n src="~/assets/messages.json"></i18n>

<template>
  <div class="page">
    <div
      :class="['top-box', {'blurred': isAnswerHidden}]"
      :style="{'flex-grow': boxSizes[0]}"
      v-html="contentTop"
    ></div>
    <div
      v-if="isButtomBox"
      :class="['bottom-box', {'blurred': isAnswerHidden}]"
      :style="{'flex-grow': boxSizes[1]}"
      v-html="contentBottom"
    ></div>
    <div
      v-if="!isButtomBox"
      :class="['bottom-no-box', {'blurred': isAnswerHidden}]"
      :style="{'flex-grow': boxSizes[1]}"
      v-html="contentBottom"
    ></div>
    <transition name="fade">
      <div class="overlay" v-if="isAnswerHidden">
        <span>{{ $t('q-not-ans') }}</span>
        <br />
        <a :href="`#${questionId}`">
          <button class="btn btn-teal">{{ $t('return-to-prev-q') }}</button>
        </a>
        <br />
        <button class="btn btn-pink-text" @click="revealAns()">{{ $t('reveal-ans') }}</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    boxSizes: {
      type: Array,
      default: () => [2, 1]
    },
    contentTop: {
      type: String,
      default: '<span>(contentTop)</span>'
    },
    contentBottom: {
      type: String,
      default: '<span>(contentBottom)</span>'
    },
    isButtomBox: {
      type: Boolean,
      default: true
    },
    isAnswerHidden: {
      type: Boolean,
      default: false
    },
    questionId: {
      type: String,
      default: 'home'
    }
  },
  methods: {
    revealAns() {
      this.$props.isAnswerHidden = false
    }
  }
}
</script>

<style scoped>
.page {
  @apply w-full h-full py-8 bg-purple-400 flex flex-col items-center justify-center;
}

.page * {
  @apply flex flex-col items-center justify-center;
}

.top-box,
.bottom-box {
  @apply w-5/6 max-w-xl rounded-lg shadow-md m-5 p-5 bg-purple-100;
}

.bottom-no-box {
  @apply w-full max-w-xl;
}

.blurred {
  filter: blur(10px);
}

.overlay {
  @apply w-full h-full absolute;
  background-color: hsla(0, 0%, 100%, 0.7);
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
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
