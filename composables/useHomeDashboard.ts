import { createSharedComposable } from "@vueuse/core";

const _useHomeDashboard = () => {
  const route = useRoute();
  const router = useRouter();
  const isHelpSlideoverOpen = ref(false);
  const isNotificationsSlideoverOpen = ref(false);

  defineShortcuts({
    "b-h": () => router.push("/home"),
    "b-b": () => router.push("/home/books"),
    "b-u": () => router.push("/home/users"),
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
