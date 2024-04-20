<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";

useHead({
  bodyAttrs: {
    class: "dark:bg-gray-950",
  },
});

const navigation = inject<Ref<NavItem[]>>("navigation", ref([]));

const links = [
  {
    label: "Home",
    to: "/",
    icon: "i-heroicons-home",
  },
  {
    label: "Admin",
    to: "/",
    icon: "i-heroicons-adjustments-vertical-16-solid",
  },
];
</script>

<template>
  <div>
    <UHeader>
      <template #logo>
        Nuxt UI Pro <UBadge label="SaaS" variant="subtle" class="w-auto h-6" />
      </template>

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
    <UMain>
      <div class="h-screen flex items-center justify-center overlay">
        <div class="gradient" />

        <slot />
      </div>
    </UMain>
  </div>

  <!-- <div class="h-screen flex items-center justify-center overlay">
    <div class="gradient" />

    <UButton
      icon="i-heroicons-home"
      label="Home"
      to="/"
      color="black"
      class="absolute top-4"
    />

    <slot />
  </div> -->
</template>

<style scoped>
.gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(var(--color-primary-500) / 0.25) 0,
    #fff 100%
  );
}

.dark {
  .gradient {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(var(--color-primary-400) / 0.1) 0,
      rgb(var(--color-gray-950)) 100%
    );
  }
}

.overlay {
  background-size: 100px 100px;
  background-image: linear-gradient(
      to right,
      rgb(var(--color-gray-200)) 0.5px,
      transparent 0.5px
    ),
    linear-gradient(
      to bottom,
      rgb(var(--color-gray-200)) 0.5px,
      transparent 0.5px
    );
}
.dark {
  .overlay {
    background-image: linear-gradient(
        to right,
        rgb(var(--color-gray-900)) 0.5px,
        transparent 0.5px
      ),
      linear-gradient(
        to bottom,
        rgb(var(--color-gray-900)) 0.5px,
        transparent 0.5px
      );
  }
}
</style>
