<script setup lang="ts">
import { sub } from "date-fns";
import type { Period, Range } from "~/appTypes";

useSeoMeta({
  title: "App",
});

const authStore = useAuthStore();

const range = ref<Range>({
  start: sub(new Date(), { days: 14 }),
  end: new Date(),
});
const period = ref<Period>("daily");

const clickRefresh = async () => {
  try {
    await authStore.refreshAccess();
  } catch (e) {
    console.log(`error refreshing: ${e}`);
  }
};
// const { data } = await useGraphqlQuery("dropdownStaticLists");
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Home">
        <template #right>
          <LayoutAuthDropdown />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>
          <div>
            <UButton color="red" @click="clickRefresh">Refresh</UButton>
          </div>
          <div>{{ authStore.decodedAccessToken }}</div>
        </template>
      </UDashboardToolbar>
    </UDashboardPanel>
  </UDashboardPage>
</template>
