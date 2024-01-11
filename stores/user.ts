export const useUserStore = defineStore("User", () => {
  // Add proper types, don't be lazy
  const users = ref<any[]>([]);

  const fetchUsers = async () => {
    const res = await $fetch<{ results: Array<any>; info: Record<string, string | number> }>(
      "https://randomuser.me/api/?results=100"
    );
    users.value = res.results;
    return res;
  };
  return {
    users,
    fetchUsers,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
