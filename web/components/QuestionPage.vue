<i18n src="~/assets/messages.json"></i18n>

<template>
  <div class="page">
    <canvas id="confetti" :class="{ 'active': !!answerClicked }" />
    <div class="top-box" :style="{'flex-grow': boxSizes[0]}" v-html="question"></div>
    <div class="bottom-box" :style="{'flex-grow': boxSizes[1]}">
      <div v-for="choice in answerChoices" :key="choice.idAns" @click="checkAnswer(choice)">
        <button
          :class="[
            'btn',
            'btn-choice',
            { 'btn-correct': choice.correct && answerClicked },
            { 'btn-incorrect': !choice.correct && answerClicked == choice.idAns },
            { 'cursor-not-allowed': !!answerClicked }
          ]"
        >{{ choice.text }}</button>
      </div>
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
    idQ: {
      type: String,
      default: 'q1'
    },
    question: {
      type: String,
      default: '<span>(question)</span>'
    },
    answerChoices: {
      type: Array,
      default: () => [
        {
          idAns: 1,
          text: '(ans 1)',
          correct: true
        },
        {
          idAns: 2,
          text: '(ans 2)',
          correct: false
        },
        {
          idAns: 3,
          text: '(ans 3)',
          correct: false
        }
      ]
    },
    answerPage: {
      type: String,
      default: '#home'
    }
  },
  data() {
    return {
      answerClicked: null,
      isAnswerCorrect: null
    }
  },
  methods: {
    checkAnswer(choice) {
      this.answerClicked = choice.idAns
      this.isAnswerCorrect = choice.correct

      if (this.isAnswerCorrect) {
        this.$confetti.start({
          canvasId: 'confetti',
          particlesPerFrame: 1.5,
          defaultSize: 5,
          defaultDropRate: 5,
          particles: [
            {
              type: 'rect',
              colors: ['#F6E05E', '#F687B3', '#68D391']
            }
          ]
        })
        setTimeout(() => {
          this.$confetti.stop()
        }, 1500)
      }

      this.$store.commit('localStorage/recordAnswer', {
        idQ: this.$props.idQ,
        idAns: this.answerClicked
      })

      setTimeout(() => {
        window.location.href = this.$props.answerPage
      }, 3000)
    }
  }
}
</script>

<style scoped>
.page {
  @apply w-full h-full py-8 bg-purple-400 flex flex-col items-center justify-center;
}

.page div {
  @apply flex flex-col items-center justify-center;
}

.top-box {
  @apply w-5/6 max-w-xl rounded-lg shadow-md m-5 p-10 bg-purple-100;
}

.bottom-box {
  @apply w-5/6 max-w-xl m-5;
}

.bottom-box * {
  @apply w-full flex-grow;
}

#confetti {
  @apply w-full h-full absolute z-0;
}

#confetti.active {
  @apply z-20;
}

.btn {
  @apply font-bold py-2 px-4 m-2 rounded-lg z-10;
}
.btn-choice {
  @apply bg-gray-100 font-bold py-2 px-4 border border-b-4 border-gray-400;
}
.btn-choice:hover {
  @apply bg-gray-200 border-gray-500;
}
.btn-correct {
  @apply bg-teal-400 border-teal-700 !important;
  transition: all 0.8s;
}
.btn-incorrect {
  @apply bg-pink-400 border-pink-700 !important;
  transition: all 0.2s;
}
</style>
