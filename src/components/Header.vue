<template>
  <div class="header">
    Header
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 3rem;
  background-color: red;
}
</style>
