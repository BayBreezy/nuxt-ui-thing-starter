<template>
  <hr :class="styles({ class: props.class })" />
</template>

<script lang="ts" setup>
  const props = defineProps<{ class?: any }>();

  const styles = tv({
    base: 'h-px border-t-0 bg-[linear-gradient(90deg,theme("colors.input/10%"),_theme("colors.input"),_theme("colors.input/10%"))]',
  });
</script>
