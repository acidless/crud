<template>
  <DialogWindow :is-opened="isOpened" :set-opened="setOpened">
    <h4 class="align-center row">{{ operationType }} a task</h4>
    <form @submit="submit" class="task-form">
      <input v-model="task.title" type="text" placeholder="Title" />
      <textarea placeholder="Description" v-model="task.description"></textarea>
      <div class="align-center">
        <button>{{ operationType }}</button>
      </div>
    </form>
  </DialogWindow>
</template>

<script>
import DialogWindow from '@/components/Common/DialogWindow/DialogWindow';

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
    taskValues: Object,
  },

  data() {
    return {
      task: {
        title: null,
        description: null,
      },
    };
  },

  mounted() {
    this.setTaskValues();
  },

  watch: {
    taskValues() {
      this.setTaskValues();
    },
  },

  computed: {
    operationType() {
      return this.$props.isCreateMode ? 'Create' : 'Update';
    },
  },

  methods: {
    setTaskValues() {
      this.$data.task = {
        title: this.$props.taskValues?.title,
        description: this.$props.taskValues?.description,
      };
    },

    submit(e) {
      e.preventDefault();
      const task = this.$data.task;
      const createMode = this.$props.isCreateMode;

      // Если значение - пустая строка, присваиваем null
      Object.keys(task).forEach((key) => {
        task[key] = task[key]?.trim() || null;
      });

      // В зависимости от типа действия (создание или обновление) диспатчим экшн
      if (createMode) {
        this.$store.dispatch('createTask', task);
      } else {
        this.$store.dispatch('updateTask', {
          id: this.$props.taskValues._id,
          ...task,
        });
      }

      this.$props.setOpened(false);
      this.setTaskValues();
    },
  },
};
</script>

<style lang="scss" scoped>
.task-form {
  input {
    display: block;
  }

  input,
  textarea {
    margin: 0 auto 0.75em auto;
  }
}
</style>
