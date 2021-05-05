<template>
  <div class="current-task-wrapper container" v-if="currentTask">
    <Task :full-data="true" :task="currentTask" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from '~/components/pages/index/tasks/task/Task';

export default {
  name: 'CurrentTask',
  components: { Task },
  computed: {
    ...mapGetters({
      currentTask: 'currentTask',
    }),
  },
  mounted() {
    this.$store.dispatch('getCurrentTask', this.$route.params.id);
  },
};
</script>

<style lang="scss">
.current-task-wrapper {
  .task {
    .task__title a {
      font-size: 4rem;
    }

    .task__title,
    .task__description {
      white-space: normal;
      word-break: break-word;
    }

    .task__description {
      font-size: 2rem;
    }
  }
}
</style>
