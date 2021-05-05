<template>
  <div class="container">
    <CreateTask />
    <TaskList />
  </div>
</template>

<script>
import TaskList from '~/components/pages/index/tasks/TaskList';
import CreateTask from '~/components/pages/index/createTask/CreateTask';
export default {
  name: 'Index',
  components: { CreateTask, TaskList },
};
</script>
