<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div >
    <h1 >{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
    </h3>
  </div>
</template>

<style lang="scss" scoped>
</style>
