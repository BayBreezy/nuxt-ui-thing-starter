<template>
  <DataTable ref="table" :options="options" :data="data" :class="props.class">
    <slot></slot>
  </DataTable>
</template>

<script lang="ts" setup generic="T">
  import { Config } from "datatables.net/types/types";
  import DataTableRef from "datatables.net";

  const props = withDefaults(
    defineProps<{
      options?: Config;
      data: T[];
      class?: string;
    }>(),
    {
      options: () => ({}),
      data: () => [],
      class: "nowrap hover row-border",
    }
  );

  const emits = defineEmits<{
    ready: [any];
  }>();

  const table = shallowRef<{ dt: InstanceType<typeof DataTableRef<T[]>> } | null>(null);

  onMounted(() => {
    nextTick(() => {
      emits("ready", table.value?.dt);
    });
  });
</script>
