<template>
  <ComboboxHeader v-bind="$attrs" :as-child="asChild">
    <slot></slot>
  </ComboboxHeader>
</template>

<script lang="ts" setup>
  defineOptions({ inheritAttrs: false });
  const props = defineProps<{
    asChild?: boolean;
  }>();
</script>
