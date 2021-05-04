<template>
  <DialogWindow
    :is-opened="isDeleteWindowOpened"
    :set-opened="setDeleteWindowOpened"
  >
    <h4 class="row">Are you realy want to delete this task?</h4>
    <div class="task__actions">
      <button @click="() => setDeleteWindowOpened(false)">No</button>
      <button class="btn-danger" @click="removeTask">Yes</button>
    </div>
  </DialogWindow>
</template>

<script>
import DialogWindow from '~/components/common/DialogWindow/DialogWindow';

export default {
  name: 'TaskDeleteDialog',
  components: { DialogWindow },
  props: {
    task: {
      type: Object,
      required: true,
    },
    isDeleteWindowOpened: {
      type: Boolean,
      required: true,
    },
    setDeleteWindowOpened: {
      type: Function,
      required: true,
    },
  },
  methods: {
    removeTask() {
      this.$store.dispatch('removeTask', this.$props.task._id);
    },
  },
};
</script>
