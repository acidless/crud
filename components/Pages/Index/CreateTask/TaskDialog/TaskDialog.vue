<template>
  <DialogWindow :is-opened="isOpened" :set-opened="setOpened">
    <h4 class="align-center row">{{ operationType }} a task</h4>
    <form @submit="submit" class="task-form">
      <input v-model="task.title" type="text" placeholder="Title" />
      <input v-model="task.description" type="text" placeholder="Description" />
      <div class="align-center">
        <button>{{ operationType }}</button>
      </div>
    </form>
  </DialogWindow>
</template>

<script>
import DialogWindow from '~/components/common/DialogWindow/DialogWindow';
export default {
  components: { DialogWindow },
  props: {
    isOpened: {
      type: Boolean,
      required: true,
    },

    setOpened: {
      type: Function,
      required: true,
    },

    isCreateMode: Boolean,
    taskId: String,
  },

  data() {
    return {
      task: {
        title: undefined,
        description: undefined,
      },
    };
  },

  computed: {
    operationType() {
      return this.$props.isCreateMode ? 'Create' : 'Update';
    },
  },

  methods: {
    submit(e) {
      e.preventDefault();
      const task = this.$data.task;
      const createMode = this.$props.isCreateMode;

      Object.keys(task).forEach((key) => {
        task[key] = task[key]?.trim() || undefined;
      });

      if (createMode) {
        this.$store.dispatch('createTask', task);
      } else {
        this.$store.dispatch('updateTask', { id: this.$props.taskId, ...task });
      }

      this.$props.setOpened(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.task-form {
  input {
    display: block;
    margin: 0 auto 0.75em auto;
  }
}
</style>
