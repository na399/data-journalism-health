<template>
  <div class="page">
    <div class="wordbox">
      <h1 v-html="titleString"></h1>
    </div>
    <div class="images">
      <img src="~/assets/img/old-lady.png" />
      <img src="~/assets/img/old-man.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleString: {
      type: String,
      default: '(title)'
    },
  },
}
</script>

<style scoped>
.page {
  @apply w-full h-full bg-purple-600 flex flex-col items-center justify-center;
}

.wordbox {
  @apply bg-gray-100 rounded-lg m-5 p-10 text-purple-700 text-2xl font-semibold;
}

img {
  @apply inline m-auto w-20;
}
</style>
