<script setup lang="ts">
import type { BookMember } from "~/types";
const authStore = useAuthStore();

const { data: connectedUsers } = await useGraphqlQuery(
  "listDashboardBookUsers",
  { bookId: authStore.activeBookId ?? "" }
);

const members = computed<BookMember[]>(() => {
  return connectedUsers.users.map((u) => ({
    ...u,
    fullName: `${u.firstName} ${u.lastName}`,
  }));
});

const q = ref("");
const isInviteModalOpen = ref(false);

const filteredMembers = computed(() => {
  return members.value.filter((member) => {
    return (
      member.fullName.search(new RegExp(q.value, "i")) !== -1 ||
      member.email.search(new RegExp(q.value, "i")) !== -1
    );
  });
});
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UDashboardSection
      title="Manage access"
      description="Invite new members by email address."
      orientation="horizontal"
      :ui="{ container: 'lg:sticky top-2' }"
    >
      <template #links>
        <UButton
          label="Invite people"
          color="black"
          @click="isInviteModalOpen = true"
        />
      </template>

      <UCard
        :ui="{ header: { padding: 'p-4 sm:px-6' }, body: { padding: '' } }"
        class="min-w-0"
      >
        <template #header>
          <UInput
            v-model="q"
            icon="i-heroicons-magnifying-glass"
            placeholder="Search members"
            autofocus
          />
        </template>

        <SettingsMembersList :members="filteredMembers" />
      </UCard>
    </UDashboardSection>
  </UDashboardPanelContent>
</template>
