<template>
  <div class="container py-5">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="mb-1 text-2xl font-bold">Users</h1>
        <p class="mb-5 text-muted-foreground">A list of users in the system</p>
      </div>
      <button @click="toggleTheme">
        <Icon name="lucide:sun" />
      </button>
    </div>
    <UIDT @ready="table = $event" :options="options" :data="users" />
  </div>
</template>

<script lang="ts" setup>
  import DataTableRef from "datatables.net";
  import { Config } from "datatables.net/types/types";

  const { data: users } = await useAsyncData<any[]>(
    "any",
    () => $fetch("https://randomuser.me/api/?results=100"),
    {
      default: () => [],
      transform: (data: any) => data.results,
    }
  );

  const options = ref<Config>({
    dom: "<'block'Q><'dataTables_header_wrapper'Bf>rt<'dataTables_footer_wrapper'ilp>",
    buttons: [
      "colvis",
      "copy",
      "csv",
      "excel",
      "pdf",
      { extend: "print", text: "Print", key: { key: "p", altKey: true } },
    ],
    lengthMenu: [
      [10, 20, 30, 40, 50, -1],
      [10, 20, 30, 40, 50, "All"],
    ],
    colReorder: true,
    language: {
      searchPlaceholder: "Filter users...",
      search: "",
      zeroRecords: "No users found",
      emptyTable: "No users found",
      lengthMenu: "Rows per page _MENU_",
      paginate: {
        previous: "Prev",
      },
    },
    select: true,
    responsive: true,
    columns: [
      {
        data: "name.first",
        title: "First Name",
        className: "font-bold",
      },
      { data: "name.last", title: "Last Name" },
      {
        data: "email",
        title: "Email",
        render(data, type, row, meta) {
          return `<a class="underline decoration-dashed underline-offset-2 decoration-primary/50" href="mailto:${data}">${data}</a>`;
        },
      },
      {
        data: "phone",
        title: "Phone",
        render(data, type, row, meta) {
          return `<a class="underline decoration-dashed underline-offset-2 decoration-primary/50" href="tel:${data}">${data}</a>`;
        },
      },
    ],
  });

  const table = ref<InstanceType<typeof DataTableRef<any[]>> | null>(null);
  const mode = useColorMode();
  const toggleTheme = () => {
    mode.value = mode.value === "light" ? "dark" : "light";
  };
</script>
