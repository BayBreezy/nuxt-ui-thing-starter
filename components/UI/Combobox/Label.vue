<template>
  <ComboboxLabel :as-child="asChild" :class="styles({ class: props.class })">
    <slot></slot>
  </ComboboxLabel>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    asChild?: boolean;
    class?: any;
  }>();

  const styles = tv({
    base: "px-2 py-1.5 pl-9 text-sm font-medium text-muted-foreground",
  });
</script>
