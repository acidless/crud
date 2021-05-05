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
    this.$axios
      .$get('tasks')
      .then((data) => {
        commit('setTasks', data.data);
      })
      .catch((e) => commit('setError', e.response.data.message));
  },

  getCurrentTask({ commit }, id) {
    this.$axios
      .$get(`tasks/${id}`)
      .then((data) => {
        commit('setCurrentTask', data.data);
      })
      .catch((e) => commit('setError', e.response.data.message));
  },

  createTask({ commit, state }, task) {
    this.$axios
      .$post(`tasks`, task)
      .then((data) => {
        commit('setTasks', [data.data, ...state.tasks]);
      })
      .catch((e) => commit('setError', e.response.data.message));
  },

  updateTask({ commit, state }, task) {
    this.$axios
      .$patch(`tasks/${task.id}`, task)
      .then((data) => {
        if (state.currentTask._id === data.data._id) {
          commit('setCurrentTask', data.data);
        }

        commit(
          'setTasks',
          state.tasks.map((task) => {
            if (data.data._id === task._id) {
              return data.data;
            }

            return task;
          })
        );
      })
      .catch((e) => commit('setError', e.response.data.message));
  },

  removeTask({ commit, state }, id) {
    this.$axios
      .$delete(`/tasks/${id}`)
      .then(() => {
        commit(
          'setTasks',
          state.tasks.filter((task) => task._id !== id)
        );
      })
      .catch((e) => commit('setError', e.response.data.message));
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
