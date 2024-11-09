<template>
  <div>
    <Notivue v-slot="item">
      <NotivueSwipe :item="item">
        <Notifications :theme="theme" :item="item" :icons="icons" />
      </NotivueSwipe>
    </Notivue>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "#components";
  import { lightTheme } from "notivue";
  import type { NotificationType, NotivueTheme } from "notivue";

  const theme: NotivueTheme = {
    ...lightTheme,
    "--nv-global-bg": "hsl(var(--background))",
    "--nv-border-width": "1px",
    "--nv-global-border": "hsl(var(--border))",
    "--nv-global-fg": "hsl(var(--foreground))",
    "--nv-radius": "7px",
    "--nv-width": "380px",
    "--nv-min-width": "380px",
    "--nv-y-align": "start",
    "--nv-promise-accent": "hsl(var(--muted-foreground))",
    "--nv-error-accent": "hsl(var(--destructive))",
  };

  const icons: Record<NotificationType | "close", any> = {
    close: markRaw(h(Icon, { name: "lucide:x" })),
    success: markRaw(h(Icon, { name: "lucide:check-circle-2" })),
    error: markRaw(h(Icon, { name: "lucide:x-circle" })),
    info: markRaw(h(Icon, { name: "lucide:info" })),
    warning: markRaw(h(Icon, { name: "lucide:alert-triangle" })),
    promise: markRaw(h(Icon, { name: "svg-spinners:clock" })),
    "promise-resolve": markRaw(h(Icon, { name: "lucide:check-circle-2" })),
    "promise-reject": markRaw(h(Icon, { name: "lucide:x-circle" })),
  };
</script>

<style>
  .Notivue__content-title,
  .Notivue__content-message {
    @apply text-sm;
  }
  .Notivue__content-title {
    @apply font-semibold;
  }
  .Notivue__content-message {
    @apply text-muted-foreground;
  }

  .Notivue__icon {
    @apply !mt-[13px] !size-5;
  }

  .Notivue__close-icon {
    @apply h-4 w-4 opacity-40 hover:opacity-100;
  }
  .Notivue__close {
    @apply flex items-center justify-center after:rounded-full;
  }
</style>
