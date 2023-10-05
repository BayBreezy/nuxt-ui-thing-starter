<template>
  <div class="container py-5">
    <div class="flex items-center gap-3">
      <template v-for="(p, i) in testPushes" :key="i">
        <UIButton :variant="p.variant" @click="p.onClick">
          {{ p.text }}
        </UIButton>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  const push = usePush();

  const testPushes = [
    {
      text: "Success",
      onClick: () =>
        push.success({
          title: "This is your first notification!",
          message: "This is a description",
          duration: Infinity,
        }),
      variant: "outline",
    },
    {
      text: "Error",
      onClick: () =>
        push.error({
          message: "This is your first notification!",
          duration: Infinity,
        }),
      variant: "outline",
    },
    {
      text: "Info",
      onClick: () => push.info("This is your first notification!"),
      variant: "outline",
    },
    {
      text: "Warning",
      onClick: () => push.warning("This is your first notification!"),
      variant: "outline",
    },
    {
      text: "Promise",
      onClick: async () => {
        const id = push.promise("Please wait on the promise...");
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve("This is a promise!");
          }, 2000);
        });

        id.resolve("Promise resolved!");
      },
      variant: "outline",
    },
  ] as const;
</script>
