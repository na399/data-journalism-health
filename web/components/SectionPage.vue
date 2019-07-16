<template>
  <div class="page">
    <div class="bg" :style="{'background-image': `url(${bgImg})`, 'background-position': bgPos}">
      <div :style="{'flex-grow': spacers[0]}"></div>
      <div class="wordbox">
        <h2 v-html="sectionContent"></h2>
      </div>
      <div :style="{'flex-grow': spacers[1]}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionContent: {
      type: String,
      default: '(section)'
    },
    spacers: {
      type: Array,
      default: () => [5, 1]
    },
    bgImg: {
      default: require('~/assets/img/bg/cristian-newman-CeZypKDceQc-unsplash.jpg')
    },
    bgPos: {
      type: String,
      default: 'center center'
    }
  }
}
</script>

<style scoped>
.page {
  @apply w-full h-full bg-purple-400;
}

.bg {
  @apply h-full max-w-3xl m-auto flex flex-col items-center justify-center;
  background-size: cover;
}

.wordbox {
  @apply rounded-lg shadow-md m-5 p-10 text-gray-100 text-2xl font-semibold;
  /* @apply bg-purple-800 opacity-75; */
  background-color: hsla(256, 44%, 42%, 0.85);
}

@screen md {
  .wordbox {
    @apply text-3xl;
  }
}
</style>
