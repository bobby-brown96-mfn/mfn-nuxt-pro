<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

interface Props {
  baseUserId?: string;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  baseUserId: "",
  id: "",
});

const emit = defineEmits<{
  success: [id: string];
}>();

const state = reactive({
  name: "",
});

const onSuccess = () => {
  emit("success", props.id);
};
</script>

<template>
  <UModal>
    <UCard>
      <UForm :state="state" class="space-y-4">
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>
      </UForm>
    </UCard>
  </UModal>
</template>
