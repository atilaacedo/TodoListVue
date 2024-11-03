<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogDelete" max-width="400" persistent>
      <v-card
        prepend-icon="mdi-map-marker"
        title="Delete Task?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="taskStore.toggleDelete()"> No </v-btn>

          <v-btn @click="taskStore.deleteTask()"> Yes </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/task.js";

const taskStore = useTaskStore();

</script>