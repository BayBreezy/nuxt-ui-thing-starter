<template>
  <ConfigProvider :use-id="useIdFunction">
    <div>
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <!-- Delete the toast that you don't need -->
      <UiToastToaster />
      <UiVueSonner />
      <UiNotivue />
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
  import { ConfigProvider } from "radix-vue";

  const useIdFunction = () => useId();
</script>
