<template>
  <div>
    <v-text-field
      label="Add Task"
      @keyup.enter="taskStore.addTask"
      v-model="taskStore.titleTaskCreating"
    ></v-text-field>

    <ListTasks></ListTasks>
  </div>
</template>


<script setup>
import { onMounted } from "vue";
import ListTasks from "./ListTasks.vue";
import { useTaskStore } from "@/stores/task.js";

const taskStore = useTaskStore();

onMounted(() =>{
  taskStore.getTasks();
})
</script>