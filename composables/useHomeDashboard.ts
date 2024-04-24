import { createSharedComposable } from "@vueuse/core";

const _useHomeDashboard = () => {
  const route = useRoute();
  const router = useRouter();
  const isHelpSlideoverOpen = ref(false);
  const isNotificationsSlideoverOpen = ref(false);

  defineShortcuts({
    "g-h": () => router.push("/home"),
    "g-b": () => router.push("/home/books"),
    "g-u": () => router.push("/home/users"),
    "g-s": () => router.push("/home/settings"),
    "?": () => (isHelpSlideoverOpen.value = true),
    n: () => (isNotificationsSlideoverOpen.value = true),
  });

  watch(
    () => route.fullPath,
    () => {
      isHelpSlideoverOpen.value = false;
      isNotificationsSlideoverOpen.value = false;
    }
  );

  return {
    isHelpSlideoverOpen,
    isNotificationsSlideoverOpen,
  };
};

export const useHomeDashboard = createSharedComposable(_useHomeDashboard);
