<template>
  <div class="task">
    <div class="task__header">
      <h3 class="task__title">
        <nuxt-link :to="`/tasks/${task._id}`">{{ task.title }}</nuxt-link>
      </h3>
      <button @click="isDeleteWindowOpened = true" class="btn-link">
        &times;
      </button>
    </div>
    <p class="task__description" v-if="task.description">
      {{ task.description }}
    </p>
    <time class="task__creation-date">{{
      new Date(task.createdAt).toLocaleString()
    }}</time>
    <TaskDeleteDialog
      :is-delete-window-opened="isDeleteWindowOpened"
      :set-delete-window-opened="setDeleteWindowOpened"
      :task="task"
    />
  </div>
</template>

<script>
import DialogWindow from '~/components/common/DialogWindow/DialogWindow';
import TaskDeleteDialog from '~/components/tasks/task/taskDeleteDialog/taskDeleteDialog';
export default {
  name: 'Task',
  components: { TaskDeleteDialog, DialogWindow },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isDeleteWindowOpened: false,
    };
  },

  methods: {
    setDeleteWindowOpened(value) {
      this.$data.isDeleteWindowOpened = value;
    },
  },
};
</script>

<style lang="scss">
.task {
  color: var(--main-color);
  background: var(--task-bg);
  padding: 1em;
  border-radius: 0.5em;

  .task__header,
  .task__actions {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .task__title {
    margin-bottom: 0.75em;

    a {
      font-size: 2rem;
    }
  }

  .task__title,
  .task__description {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .task__description {
    margin-bottom: 1em;
    font-size: 1.5rem;
  }

  .task__creation-date {
    color: var(--secondary-color);
    font-size: 1.1rem;
  }
}
</style>
