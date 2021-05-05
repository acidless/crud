<template>
  <div class="task">
    <div class="task__header">
      <h3 class="task__title">
        <nuxt-link :to="`/tasks/${task._id}`">{{ task.title }}</nuxt-link>
      </h3>
      <div class="task__actions">
        <button
          v-if="fullData"
          @click="() => setUpdateWindowOpened(true)"
          class="btn-link"
        >
          &#9998;
        </button>
        <button @click="() => setDeleteWindowOpened(true)" class="btn-link">
          &#10006;
        </button>
      </div>
    </div>
    <p class="task__description" v-if="fullData && task.description">
      {{ task.description }}
    </p>
    <time class="task__creation-date">{{
      new Date(task.createdAt).toLocaleString()
    }}</time>
    <TaskDeleteDialog
      :is-delete-window-opened="isDeleteWindowOpened"
      :set-delete-window-opened="setDeleteWindowOpened"
      :task-id="task._id"
    />
    <TaskDialog
      v-if="fullData"
      :task-values="task"
      :is-opened="isUpdateWindowOpened"
      :set-opened="setUpdateWindowOpened"
    />
  </div>
</template>

<script>
import TaskDialog from '@/components/Pages/Index/CreateTask/TaskDialog/TaskDialog';
import TaskDeleteDialog from '@/components/Pages/Index/Tasks/Task/TaskDeleteDialog/TaskDeleteDialog';
import DialogWindow from '@/components/Common/DialogWindow/DialogWindow';

export default {
  name: 'Task',
  components: { TaskDialog, TaskDeleteDialog, DialogWindow },
  props: {
    task: {
      type: Object,
      required: true,
    },
    fullData: Boolean,
  },

  data() {
    return {
      isDeleteWindowOpened: false,
      isUpdateWindowOpened: false,
    };
  },

  methods: {
    setDeleteWindowOpened(value) {
      this.$data.isDeleteWindowOpened = value;
    },

    setUpdateWindowOpened(value) {
      this.$data.isUpdateWindowOpened = value;
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

  .task__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .task__actions {
    button:not(:last-child) {
      margin-right: 0.25em;
    }
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
