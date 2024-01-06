<template>
  <div>
    <button @click="increment">
      {{ count }} KID
      <slot />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

defineExpose({
  increment,
  count
})
</script>
