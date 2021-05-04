<template>
  <div class="task-container">
    <Task v-for="task in tasks" :task="task" :key="task._id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from '~/components/tasks/task/Task';

export default {
  name: 'TaskList',
  components: { Task },
  computed: {
    ...mapGetters({
      tasks: 'tasks',
    }),
  },
  mounted() {
    this.$store.dispatch('getTasks');
  },
};
</script>

<style lang="scss" scoped>
.task-container {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 40rem));
  grid-gap: 5em;
  justify-content: center;
}
</style>
