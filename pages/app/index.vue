<script setup lang="ts">
import { sub } from "date-fns";
import type { Period, Range } from "~/appTypes";

useSeoMeta({
  title: "App",
});

const authStore = useAuthStore();

const { isNotificationsSlideoverOpen } = useDashboard();

const items = [
  [
    {
      label: "New mail",
      icon: "i-heroicons-paper-airplane",
      to: "/inbox",
    },
    {
      label: "New user",
      icon: "i-heroicons-user-plus",
      to: "/users",
    },
  ],
];

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
          <UTooltip text="Notifications" :shortcuts="['N']">
            <UButton
              color="gray"
              variant="ghost"
              square
              @click="isNotificationsSlideoverOpen = true"
            >
              <UChip color="red" inset>
                <UIcon name="i-heroicons-bell" class="w-5 h-5" />
              </UChip>
            </UButton>
          </UTooltip>

          <UDropdown :items="items">
            <UButton
              icon="i-heroicons-plus"
              size="md"
              class="ml-1.5 rounded-full"
            />
          </UDropdown>
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>
          <div>
            <UButton color="red" @click="clickRefresh">Refresh</UButton>
          </div>
          <div>{{ authStore.accessToken }}</div>
        </template>
      </UDashboardToolbar>
    </UDashboardPanel>
  </UDashboardPage>
</template>
