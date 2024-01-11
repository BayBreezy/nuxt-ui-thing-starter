<template>
  <UiContainer class="py-5">
    <h1 class="mb-1 text-2xl font-bold">Notivue</h1>
    <p class="text-muted-foreground">
      Check out these notifications. Docs here:
      <NuxtLink
        class="underline underline-offset-2"
        target="_blank"
        to="https://notivuedocs.netlify.app/installation/nuxt.html"
        external
        >Notivue Nuxt Docs</NuxtLink
      >
    </p>

    <div class="mt-10 flex flex-wrap items-center gap-3">
      <template v-for="(p, i) in testPushes" :key="i">
        <UiButton :variant="p.variant" @click="p.onClick">
          {{ p.text }}
        </UiButton>
      </template>
    </div>
  </UiContainer>
</template>

<script setup lang="ts">
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
