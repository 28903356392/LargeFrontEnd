<script setup lang="ts">

onBeforeMount(() => {
  console.log('挂载前')
})
onMounted(() => {
  console.log('挂载后')
})
onBeforeUpdate(() => {
  console.log('更新前')
})
onUpdated(() => {
  console.log('更新后')
})
onBeforeUnmount(() => {
  console.log('销毁前')
})
onUnmounted(() => {
  console.log('销毁后')
})
console.log('创建')
</script>

<template>
  <p>index</p>
  <HelloWorld></HelloWorld>
</template>

<style lang="scss" scoped>
</style>
