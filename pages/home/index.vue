<script setup lang="ts">
definePageMeta({
  layout: "home",
  bookAuth: false,
});

useSeoMeta({
  title: "Home",
});

const toast = useToast();

const authStore = useAuthStore();

const clearingBook = ref(false);

const clearActiveBook = async () => {
  clearingBook.value = true;
  toast.add({ title: "Cleared Active Book", color: "green", id: "clear_book" });
  await authStore.clearActiveBook();
  toast.remove("clear_book");
  clearingBook.value = false;
};
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Home"> </UDashboardNavbar>
      <UDashboardToolbar>
        <template #left>
          <UButton
            color="red"
            @click="clearActiveBook()"
            label="Clear Active Book"
            :disabled="authStore.activeBookId === null"
            :loading="clearingBook"
          />
        </template>
      </UDashboardToolbar>
      <UDashboardPanelContent>
        <div class="grid lg:grid-cols-2 lg:items-start gap-5 mt-1">
          <DashboardHomeCountries />
          <UDashboardCard
            title="Auth"
            description="Auth Status"
            icon="i-heroicons-lock-closed-20-solid"
          >
            <div class="max-w-fit grid grid-cols-2 lg:items-start gap-8 mt-8">
              <h2>Access Token</h2>
              <div>
                {{ authStore.accessToken === null }}
              </div>
              <h2>Active User Id</h2>
              <div>
                {{ authStore.activeUserId }}
              </div>
              <h2>Active Book Id</h2>
              <div>
                {{ authStore.activeBookId }}
              </div>
              <h2>Access Expires</h2>
              <div>
                {{ authStore.decodedAccessToken }}
              </div>
            </div>
          </UDashboardCard>
          <UDashboardCard
            title="Auth State"
            description="Auth State"
            icon="i-heroicons-user-20-solid"
          >
            <div
              class="max-w-fit grid lg:grid-cols-2 lg:items-start gap-1 mt-2"
            >
              <h2>Active User</h2>
              <pre>
                {{ authStore.activeUser }}
              </pre>
              <h2>Active Book</h2>
              <pre>
                {{ authStore.activeBook }}
              </pre>
              <h2>User Role</h2>
              <div>
                {{ authStore.activeUserRole }}
              </div>
            </div>
          </UDashboardCard>
        </div>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
