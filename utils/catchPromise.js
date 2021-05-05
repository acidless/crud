function catchPromise(commit, promise) {
  promise.catch((e) => {
    commit('setError', e.response?.data.message || e);
  });
}

export default catchPromise;
