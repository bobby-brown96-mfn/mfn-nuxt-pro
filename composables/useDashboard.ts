import { createSharedComposable } from "@vueuse/core";

const _useDashboard = () => {
  const route = useRoute();
  const router = useRouter();
  const isHelpSlideoverOpen = ref(false);

  defineShortcuts({
    "g-h": () => router.push("/app"),
    "g-e": () => router.push("/app/entities"),
    "g-s": () => router.push("/app/settings"),
    "?": () => (isHelpSlideoverOpen.value = true),
  });

  watch(
    () => route.fullPath,
    () => {
      isHelpSlideoverOpen.value = false;
    }
  );

  return {
    isHelpSlideoverOpen,
  };
};

export const useDashboard = createSharedComposable(_useDashboard);
