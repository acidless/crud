import catchPromise from '@/utils/catchPromise';

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
    catchPromise(
      commit,
      this.$axios.$get('tasks').then((data) => {
        commit('setTasks', data.data);
      })
    );
  },

  getCurrentTask({ commit }, id) {
    catchPromise(
      commit,
      this.$axios.$get(`tasks/${id}`).then((data) => {
        if (!data.data) {
          return Promise.reject('Task with this id not found');
        }

        commit('setCurrentTask', data.data);
      })
    );
  },

  createTask({ commit, state }, task) {
    catchPromise(
      commit,
      this.$axios.$post(`tasks`, task).then((data) => {
        commit('setTasks', [data.data, ...state.tasks]);
      })
    );
  },

  updateTask({ commit, state }, task) {
    catchPromise(
      commit,
      this.$axios.$patch(`tasks/${task.id}`, task).then((data) => {
        if (state.currentTask?._id === data.data._id) {
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
    );
  },

  removeTask({ commit, state }, id) {
    catchPromise(
      commit,
      this.$axios.$delete(`/tasks/${id}`).then(() => {
        commit(
          'setTasks',
          state.tasks.filter((task) => task._id !== id)
        );
      })
    );
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
