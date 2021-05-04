<template>
  <div class="container">
    <TaskList />
  </div>
</template>

<script>
import TaskList from '~/components/tasks/TaskList';
export default {
  name: 'Index',
  components: { TaskList },
};
</script>
