function state() {
  return { tasks: [], currentTask: null };
}

const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  },

  setCurrentTask(state, task) {
    state.currentTask = task;
  },
};

const actions = {
  getTasks({ commit }) {
    this.$axios.$get('tasks').then((data) => {
      commit('setTasks', data.data);
    });
  },

  getCurrentTask({ commit }, id) {
    this.$axios.$get(`tasks/${id}`).then((data) => {
      commit('setCurrentTask', data.data);
    });
  },

  removeTask({ commit, state }, id) {
    this.$axios.$delete(`/tasks/${id}`).then(() => {
      commit(
        'setTasks',
        state.tasks.filter((task) => task._id !== id)
      );
    });
  },
};

const getters = {
  tasks(state) {
    return state.tasks;
  },

  currentTask(state) {
    return state.currentTask;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: false,
};
