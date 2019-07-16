export const state = () => ({
  recordedAnswers: {}
})

export const getters = {
  recordedAnswers: state => state.recordedAnswers
}

export const mutations = {
  recordAnswer(state, payload) {
    state.recordedAnswers[payload.idQ] = payload.idAns
  }
}
