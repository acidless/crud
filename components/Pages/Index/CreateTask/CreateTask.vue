<template>
  <div class="create-task">
    <button @click="() => setCreateMode(true)">+</button>
    <TaskDialog :is-opened="isCreateMode" :set-opened="setCreateMode" />
  </div>
</template>

<script>
import TaskDialog from '@/components/pages/index/createTask/TaskDialog/TaskDialog';
export default {
  name: 'CreateTask',
  components: { TaskDialog },
  data() {
    return {
      isCreateMode: false,
    };
  },
  methods: {
    setCreateMode(value) {
      this.$data.isCreateMode = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.create-task {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}
</style>
