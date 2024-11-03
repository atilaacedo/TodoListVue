<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogTaskFields" min-width="400" max-width="600" persistent>
      <!-- <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps"> Open Dialog </v-btn>
      </template> -->

      <v-card
        prepend-icon="mdi-map-marker"
        title="Edit Task"
      >
        <v-card-text>
          <v-text-field label="Title" v-model="props.task.title"></v-text-field>
          <v-text-field label="Description" v-model="props.task.description"></v-text-field>
        </v-card-text>
        <template #actions>
          <v-spacer></v-spacer>

          <v-btn @click="taskStore.toggle()"> Ok</v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import {ref, defineProps} from 'vue';
import { useTaskStore } from "@/stores/task.js";

const taskStore = useTaskStore();


const props = defineProps({
    task: Object
})
</script>