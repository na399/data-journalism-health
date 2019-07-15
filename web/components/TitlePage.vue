<i18n src="~/assets/messages.json"></i18n>

<template>
  <div class="page">
    <div class="wordcloud">
      <h1 v-html="$t('title')"></h1>
    </div>
    <div class="images">
      <img src="~/assets/img/old-lady.png" />
      <img src="~/assets/img/old-man.png" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.page {
  @apply w-full h-full bg-purple-600 flex flex-col items-center justify-center;
}

.wordcloud {
  @apply bg-gray-100 rounded-lg m-5 p-10 text-purple-700 text-2xl font-semibold;
}

img {
  @apply inline m-auto w-20;
}
</style>
