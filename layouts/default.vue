<template>
  <div>
    <UiNavbar sticky>
      <UiContainer class="flex h-14 items-center justify-between">
        <NuxtLink class="text-lg font-semibold" to="/">{{ SITE_NAME }}</NuxtLink>
        <div class="flex items-center gap-2">
          <UiButton
            external
            to="https://github.com/BayBreezy/nuxt-ui-thing-starter"
            target="_blank"
            variant="ghost"
            size="icon-sm"
            title="View on github"
          >
            <span class="sr-only">View on github</span>
            <Icon name="lucide:github" class="size-4" />
          </UiButton>
          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton class="h-9 w-9" variant="ghost" size="icon" title="Theme switcher">
                <span class="sr-only">Theme switcher</span>
                <Icon :name="currentIcon || 'lucide:sun'" class="h-[18px] w-[18px]"
              /></UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent align="end" :side-offset="5">
              <UiDropdownMenuItem
                class="cursor-pointer"
                v-for="(m, i) in modes"
                :key="i"
                :icon="m.icon"
                :title="m.title"
                @click="setTheme(m.value)"
              />
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </div>
      </UiContainer>
    </UiNavbar>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  const modes = [
    { icon: "lucide:sun", title: "Light", value: "light" },
    { icon: "lucide:moon", title: "Dark", value: "dark" },
    { icon: "lucide:laptop", title: "System", value: "system" },
  ];

  const colorMode = useColorMode();
  const setTheme = (val: string) => {
    colorMode.preference = val;
  };

  const currentIcon = computed(() => {
    return modes.find((m) => m.value === colorMode?.preference)?.icon;
  });
</script>
