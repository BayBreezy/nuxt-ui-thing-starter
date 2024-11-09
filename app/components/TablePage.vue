<template>
  <UiContainer class="py-5">
    <h1 class="mb-1 text-2xl font-bold">Users</h1>
    <p class="text-muted-foreground">
      A list of users in the system. Explore the docs here:
      <NuxtLink
        class="underline underline-offset-2"
        target="_blank"
        to="https://datatables.net/"
        external
        >Datatables.net Docs</NuxtLink
      >
    </p>

    <UiGradientDivider class="my-7" />

    <ClientOnly>
      <template #fallback>
        <TableLoading />
      </template>
      <UiDatatable
        class="nowrap hover order-column row-border"
        @ready="table = $event"
        :columns="columns"
        :options="options"
        :data="users"
      >
        <template #actions="props">
          <div>
            <UiButton
              @click.stop="
                showNote('Please wait...', `Editing record for ${props.rowData.name.first}`, 'info')
              "
              class="h-7"
              size="sm"
            >
              Edit
            </UiButton>
          </div>
        </template>
      </UiDatatable>
    </ClientOnly>
  </UiContainer>
</template>

<script lang="ts" setup>
  import DataTableRef from "datatables.net";
  import type { Config, ConfigColumns } from "datatables.net";

  // Get the data server side. We could also import the users from the store like this
  // const { users } = storeToRefs(useUserStore());
  const { data: users } = await useAsyncData("users", () => useUserStore().fetchUsers(), {
    default: () => [],
    transform: (data) => data.results,
  });

  const columns: ConfigColumns[] = [
    {
      data: "id",
      title: "ID",
      visible: false,
      render(data, type, row, meta) {
        return row.id.value || "N/A";
      },
    },
    {
      data: "name.first",
      title: "First Name",
      className: "font-bold",
      responsivePriority: 0.4,
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
    {
      data: null,
      searchable: false,
      orderable: false,
      responsivePriority: 1,
      name: "actions",
      defaultContent: "",
      className: "hide-action",
      ariaTitle: "Actions",
      render: "#actions",
    },
  ];

  const showNote = (title: string, message: string, type: string = "") => {
    if (!type) return useSonner(title, { description: message });
    // @ts-ignore
    useSonner[type](title, { description: message });
  };

  const options: Config = {
    dom: TABLE_DOM,
    autoWidth: true,
    responsive: true,
    buttons: TABLE_BUTTONS.map((b) =>
      b == "colvis"
        ? {
            extend: b,
            text: "Columns",
            columns: ":not(.hide-action)",
          }
        : {
            extend: b,
            exportOptions: {
              // Not the action column
              columns: ":not([aria-label='Actions'])",
            },
          }
    ),
    // Order by First Name by default
    order: [[1, "asc"]],
    // Customize the options in the `Rows per page` dropdown
    lengthMenu: [
      [10, 20, 30, 40, 50, -1],
      [10, 20, 30, 40, 50, "All"],
    ],
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
  };

  // Get a reference to the table so you can do stuff with it in the script
  const table = ref<InstanceType<typeof DataTableRef<any[]>> | null>(null);
</script>
