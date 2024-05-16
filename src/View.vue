<template>
  <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled">
   <slot></slot>
  </component>
</template>

<script setup>
defineProps({
   element: {type: String},
   ariaLabel: {type: String},
   isDisabled: {type: Boolean}
})
</script>

<style>

</style>