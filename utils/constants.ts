/**
 * These are used for the Datatable component
 */
export const TABLE_BUTTONS = ["copy", "colvis", "csv", "excel", "pdf", "print"];
export const TABLE_DOM =
  "Q<'flex flex-col lg:flex-row w-full lg:items-center lg:justify-between gap-5 mb-5 pr-1 p-1'<'flex-wrap'B>f><'border rounded-lg overflow-x-auto't><'flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between pt-3 p-5'li><''p>";

export const TABLE_SECONDARY_BTN = buttonStyles({
  variant: "ghost",
  size: "sm",
  class: "h-8 px-2 text-xs hover:border hover:border-foreground border border-foreground/20",
});
export const TABLE_PRIMARY_BTN = buttonStyles({
  variant: "default",
  size: "sm",
  class: "h-[30px] px-2 text-xs",
});
