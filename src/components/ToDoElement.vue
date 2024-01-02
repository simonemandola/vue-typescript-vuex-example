<script setup lang="ts">
import store from "@/store/store"
import {computed} from "vue";

const toDoListStore = computed(()=> {
  return store.state.toDoList
})

function changeToDoStatus(index: number): void {
  store.commit("changeStatus", index)
}

function deleteToDo(index: number): void {
  store.dispatch("deleteToDoAction", index)
}

</script>

<template>
  <li v-for="(toDo, index) in toDoListStore" :key="index" class="todo-list__item">
    <p :class="{'done': toDo.isDone }">{{ toDo.name }}</p>
    <button
        class="button button--check"
        type="button"
        @click.prevent="changeToDoStatus(index)"
        :title="`${toDo.isDone ? 'Uncheck' : 'Check'}`"
    >
      <i :class="`icon-check${toDo.isDone ? '' : '-empty' }`" aria-label="hidden" />
    </button>
    <button
        class="button button--danger"
        type="button"
        @click.prevent="deleteToDo(index)"
    >
      <i class="icon-trash" />
    </button>
  </li>
</template>
