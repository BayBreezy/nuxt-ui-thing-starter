<template>
  <div>
    <UiSkeleton class="h-4 w-[200px] cursor-wait rounded" />
    <UiSkeleton class="mt-3 h-8 w-24 cursor-wait rounded-md" />
    <div class="mt-4 flex items-end justify-between">
      <div class="flex flex-wrap items-center gap-2">
        <UiSkeleton class="h-8 w-12 cursor-wait rounded-md" v-for="b in 5" />
      </div>
      <UiSkeleton class="h-8 w-[230px] shrink-0 cursor-wait rounded-md" />
    </div>
    <UiSkeleton class="mt-5 h-[200px] w-full shrink-0 cursor-wait rounded-md" />
    <div class="mt-5 flex items-center justify-between">
      <UiSkeleton class="h-8 w-40 shrink-0 cursor-wait rounded-md" />
      <UiSkeleton class="h-8 w-40 shrink-0 cursor-wait rounded-md" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
