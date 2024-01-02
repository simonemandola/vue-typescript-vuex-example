<script setup lang="ts">
import AddNewToDo from "./components/AddNewToDo.vue"
import ToDoList from "./components/ToDoList.vue"
</script>

<template>
  <main>
    <h1 class="main-title">To Do list</h1>
    <p class="main-subtitle">Make every task count.</p>
    <AddNewToDo />
    <ToDoList />
  </main>
</template>
