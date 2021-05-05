<template>
  <div class="container">
    <CreateTask />
    <TaskList />
  </div>
</template>

<script>
import CreateTask from '@/components/Pages/Index/CreateTask/CreateTask';
import TaskList from '@/components/Pages/Index/Tasks/TaskList';

export default {
  name: 'Index',
  components: { CreateTask, TaskList },
};
</script>
