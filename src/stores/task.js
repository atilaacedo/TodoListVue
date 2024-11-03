import { defineStore } from "pinia";

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            {
                title: "Estudar Vue",
                description: "Estudar Vue com Vuetitfy",
              },
        ],
        titleTaskCreating: "",
        showDialogDelete: false,
        indexTaskSelector: 0,
        showDialogTaskFields: false
    }),
    actions: {
        addTask(){
            this.tasks.push({
                title: this.titleTaskCreating
            });
            this.titleTaskCreating = "";
            this.saveLocalData();
        },
        toggleDelete (index) {
            this.showDialogDelete = !this.showDialogDelete;
            if(index)
              this.indexTaskSelector = index;
        },
        deleteTask(){
            this.tasks.splice(this.indexTaskSelector, 1);
            this.toggleDelete();
            this.saveLocalData();
        },
        toggle(index){
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if(index)
              this.indexTaskSelector = index;

            this.saveLocalData();
        },
        saveLocalData(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        getTasks(){
            let items = localStorage.getItem('tasks');
            if(items)
                this.tasks = JSON.parse(items);
        }
        
    }
});