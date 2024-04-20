<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const authStore = useAuthStore();

const navigation = inject<Ref<NavItem[]>>("navigation", ref([]));

const links = [
  {
    label: "Docs",
    to: "/docs",
  },
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "Blog",
    to: "/blog",
  },
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt UI Pro <UBadge label="SaaS" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButtonGroup v-if="!authStore.activeUserId">
        <UButton label="Sign in" color="gray" to="/login" />
        <UButton
          label="Sign up"
          icon="i-heroicons-arrow-right-20-solid"
          trailing
          color="black"
          to="/signup"
          class="hidden lg:flex"
      /></UButtonGroup>
      <UButtonGroup v-else>
        <UButton
          label="Home"
          icon="i-heroicons-home-solid"
          class="hidden lg:flex"
          color="white"
          variant="solid"
          to="/home"
        />
        <UButton
          v-if="authStore.activeBookId"
          label="Dashboard"
          class="hidden lg:flex"
          color="primary"
          variant="outline"
          to="/app"
        />
        <UButton
          label="Logout"
          icon="i-heroicons-user-minus-solid"
          trailing
          color="black"
          variant="solid"
          @click="authStore.logout()"
          class="hidden lg:flex"
        />
      </UButtonGroup>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" default-open />
    </template>
  </UHeader>
</template>
