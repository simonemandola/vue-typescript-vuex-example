<script setup lang="ts">
import {computed, ref} from "vue"
import store from "@/store/store.ts"

const newToDo = ref("")
const isEmptyNewToDo = computed(()=> {
  return newToDo.value.trim().length === 0
})
function submitToDo(): void {

  if (!newToDo.value.trim())
    return

  store.commit(
      "addNewToDo",
      {
        name: newToDo.value.trim(),
        isDone: false,
      }
  )
  newToDo.value = ""
}

</script>

<template>
  <form class="form" @submit.prevent>
    <label>
      <input type="text" v-model="newToDo" placeholder="Add new to do...">
    </label>
    <button
        class="button button--primary"
        type="submit"
        @click.prevent="submitToDo"
        :disabled="isEmptyNewToDo"
    >
      Add
    </button>
  </form>
</template>

