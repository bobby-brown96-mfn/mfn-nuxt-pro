<script setup lang="ts">
import { sub } from "date-fns";
import type { Period, Range } from "~/appTypes";
import { fromUnixTime } from "date-fns";

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

const nowSeconds = ref(0);
const expireSeconds = ref(0);
const secondsRemaining = computed(
  () => nowSeconds.value / 1000 - expireSeconds.value
);
const expireTime = ref("");
const getExpireTime = computed(() => {
  return fromUnixTime(expireSeconds.value);
});
const getNowTime = computed(() => {
  return fromUnixTime(nowSeconds.value / 1000);
});

const setNowTime = () => {
  nowSeconds.value = Date.now();
};

const getExpSeconds = () => {
  const exp = authStore.decodedAccessToken?.exp ?? -1;
  if (exp > 0) {
    expireTime.value = new Date(exp * 1000).toISOString();
    expireSeconds.value = exp;
    nowSeconds.value = Date.now();
    //   secondsRemaining.value = nowSeconds.value / 1000 - expireSeconds.value;
  } else expireTime.value = "";
};

// const expireDiff = computed(()=>{

// })
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
            <UButton color="red" @click="getExpSeconds">Refresh</UButton>
            <UButton color="primary" @click="setNowTime">Update Now</UButton>
          </div>
          <!-- <div>{{ authStore.decodedAccessToken }}</div> -->
        </template>
      </UDashboardToolbar>

      <UDashboardPanelContent>
        <div class="grid lg:grid-cols-2 lg:items-start gap-8 mt-8">
          <DashboardHomeCountries />
          <UDashboardCard
            title="Recent sales"
            description="You made 128 sales this month."
            icon="i-heroicons-chart-bar-20-solid"
          >
            <h2>Remaining</h2>
            <div>{{ secondsRemaining }}</div>
            <h2>Expire Time</h2>
            <div>{{ expireTime }}</div>
            <h2>Expire Seconds</h2>
            <div>{{ expireSeconds }}</div>
            <h2>Now Time</h2>
            <div>{{ nowSeconds }}</div>
            <h2>Expire Time Formatted</h2>
            <div>{{ getExpireTime }}</div>
            <h2>Now Time Formatted</h2>
            <div>{{ getNowTime }}</div>
          </UDashboardCard>
        </div>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
