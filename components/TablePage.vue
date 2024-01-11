<template>
  <UiContainer class="py-5">
    <h1 class="mb-1 text-2xl font-bold">Users</h1>
    <p class="text-muted-foreground">A list of users in the system</p>

    <UiGradientDivider class="my-7" />

    <ClientOnly>
      <template #fallback>
        <TableLoading />
      </template>
      <UiDatatable
        class="nowrap hover order-column row-border"
        @ready="table = $event"
        :options="options"
        :data="users"
      />
    </ClientOnly>
  </UiContainer>
</template>

<script lang="ts" setup>
  import DataTableRef from "datatables.net";
  import type { Config } from "datatables.net";

  const { data: users } = await useAsyncData<any[]>(
    "users",
    () => $fetch("https://randomuser.me/api/?results=100"),
    {
      default: () => [],
      transform: (data: any) => data.results,
    }
  );

  const options = ref<Config>({
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
    columns: [
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
        responsivePriority: 1,
        name: "actions",
        className: "hide-action",
        ariaTitle: "Actions",
        orderable: false,
        render(_, __, row, ___) {
          return `
          <div class="flex items-center justify-center gap-2">
            <button edit-button data-id="${row.id}" class="${TABLE_PRIMARY_BTN}">Edit</button>
            <button delete-button data-id="${row.id}" class="${TABLE_SECONDARY_BTN}">Delete</button>
            </div>
          `;
        },
      },
    ],
  });

  // Get a reference to the table so you can do stuff with it in the script
  const table = ref<InstanceType<typeof DataTableRef<any[]>> | null>(null);

  onMounted(() => {
    setTimeout(() => {
      table.value?.on("click", "button[edit-button]", async function (e: Event) {
        e.preventDefault();
        const id = (e.target as HTMLButtonElement)?.dataset.id;
        if (id) {
          // Do something with the ID
          console.log(id);
          push.success({
            title: "Success",
            message: "You clicked the edit button",
          });
        }
      });
      table.value?.on("click", "button[delete-button]", async function (e: Event) {
        e.preventDefault();
        const id = (e.target as HTMLButtonElement)?.dataset.id;
        if (id) {
          // Do something with the ID
          console.log(id);
          push.info({
            title: "Deleted",
            message: "You clicked the delete button",
          });
        }
      });
    }, 1000);
  });
</script>
