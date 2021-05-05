import Vuex from 'vuex';
import Tasks from '~/store/Tasks';
import Errors from '~/store/Errors';

new Vuex.Store({
  modules: [Tasks, Errors],
});
