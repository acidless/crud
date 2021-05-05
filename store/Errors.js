function state() {
  return {
    error: null,
  };
}

const mutations = {
  setError(state, error) {
    state.error = error;
  },
};

const getters = {
  error(state) {
    return state.error;
  },
};

export default {
  state,
  mutations,
  getters,
  namespaced: false,
};
