<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Notivue v-slot="item">
      <NotivueSwipe :item="item">
        <Notifications
          class="[&>svg]:mt-3.5"
          :theme="mode == 'dark' ? themeDark : themeLight"
          :item="item"
        />
      </NotivueSwipe>
    </Notivue>
  </div>
</template>

<script setup lang="ts">
  import { darkTheme, lightTheme } from "notivue";
  import type { NotivueTheme } from "notivue";

  const mode = useColorMode();
  mode.value = "dark";

  const themeLight: NotivueTheme = {
    ...lightTheme,
    "--nv-global-bg": "hsl(var(--background))",
    "--nv-global-border": "hsl(var(--border))",
    "--nv-global-fg": "hsl(var(--foreground))",
    "--nv-global-accent": "hsl(var(--primary))",
    "--nv-error-accent": "hsl(var(--destructive))",
    "--nv-y-align": "flex-start",
    "--nv-radius": "6px",
    "--nv-message-size": "14px",
    "--nv-title-size": "15px",
    "--nv-icon-size": "18px",
  };
  const themeDark: NotivueTheme = {
    ...darkTheme,
    "--nv-global-bg": "hsl(var(--background))",
    "--nv-global-border": "hsl(var(--border))",
    "--nv-global-fg": "hsl(var(--foreground))",
    "--nv-global-accent": "hsl(var(--primary))",
    "--nv-error-accent": "hsl(var(--destructive))",
    "--nv-y-align": "flex-start",
    "--nv-radius": "6px",
    "--nv-message-size": "14px",
    "--nv-title-size": "15px",
    "--nv-icon-size": "18px",
  };
</script>
