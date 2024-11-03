<template>
  <div>
   
    <v-list lines="three" select-strategy="classic">
      <v-list-subheader>General</v-list-subheader>

      <v-list-item v-for="(task, index) in taskStore.tasks" :key="index" :value="index">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>{{ task.title }}</v-list-item-title>

        <v-list-item-subtitle>
          {{ task.description }}
        </v-list-item-subtitle>
        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn  color="grey-lighten-1"
                icon="mdi-dots-vertical"
                variant="text"
                v-bind="props">  </v-btn>
            </template>
            <v-list>
              <v-list-item value="editar"
              @click="taskStore.toggle(index)">
                <v-list-item-title >Editar</v-list-item-title>
              </v-list-item>
              <v-list-item value="deletar"
              @click="taskStore.toggleDelete(index)">
                <v-list-item-title>Deletar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialogTaskFields
    :task="taskStore.tasks[taskStore.indexTaskSelector]"></DialogTaskFields>
    <DialogDelete></DialogDelete>
  </div>
</template>

<script setup>
import DialogTaskFields from './DialogTaskFields.vue';
import DialogDelete from './DialogDelete.vue';
import { useTaskStore } from "@/stores/task.js";

const taskStore = useTaskStore();
</script>