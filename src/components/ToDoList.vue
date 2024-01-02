<script setup lang="ts">

import { computed } from "vue"
import store from "@/store/store"
import ToDoElement from "@/components/ToDoElement.vue"

const existToDos = computed(()=> {
  return store.state.toDoList.length > 0
})

const totalToDos = computed(()=> {
  return store.state.toDoList.length
})

function deleteAllDondeToDos(): void {
  store.dispatch("deleteDoneToDosAction")
}

</script>

<template>
  <section v-if="existToDos">
    <ul class="todo-list">
      <ToDoElement />
    </ul>
    <div class="todo-list--footer">
      <button type="button" class="button" @click.prevent="deleteAllDondeToDos">Delete all done</button>
      <p>Total: {{ totalToDos }}</p>
    </div>
  </section>
  <p v-else class="todo-list no-results">Your list is empty.</p>
</template>
