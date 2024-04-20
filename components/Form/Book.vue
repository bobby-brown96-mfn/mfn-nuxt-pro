<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import type { NewProductionBookInput } from "#graphql-operations";

interface Props {
  baseUserId?: string;
  id?: string;
  defaultCurrencyCode?: string;
}

const currencyCodeOptions = ["USD", "EUR", "GBP", "MXN"];

const props = withDefaults(defineProps<Props>(), {
  baseUserId: "",
  id: "",
  defaultCurrencyCode: "USD",
});

const emit = defineEmits<{
  success: [id: string];
  submitted: [name: string];
  cancel: [];
}>();

const state: NewProductionBookInput = reactive({
  name: "",
  primaryCurrencyCode: props.defaultCurrencyCode,
});

const submitted = ref(false);

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name || state.name === "")
    errors.push({ path: "name", message: "Required" });
  if (!state.primaryCurrencyCode)
    errors.push({ path: "primaryCurrencyCode", message: "Required" });
  if (!currencyCodeOptions.includes(state.primaryCurrencyCode))
    errors.push({
      path: "primaryCurrencyCode",
      message: "Must select valid currency",
    });
  return errors;
};

const onSubmit = async (event: FormSubmitEvent<NewProductionBookInput>) => {
  // Do something with data
  submitted.value = true;
  console.log(event.data);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  submitted.value = false;
};

const onSuccess = () => {
  emit("success", props.id);
};

const onCancel = () => {
  emit("cancel");
};
</script>

<template>
  <UModal>
    <UCard>
      <template #header>
        <h1 class="h-8">Create New Book</h1>
      </template>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.name" :disabled="submitted" />
        </UFormGroup>

        <UFormGroup label="Primary Currency" name="primaryCurrencyCode">
          <USelect
            v-model="state.primaryCurrencyCode"
            :options="currencyCodeOptions"
            :disabled="submitted"
          />
        </UFormGroup>

        <div class="flex justify-end gap-3">
          <UButton type="submit" :loading="submitted"> Submit </UButton>
          <UButton color="red" :disabled="submitted" @click="onCancel">
            Cancel
          </UButton>
        </div>
      </UForm>
    </UCard>
  </UModal>
</template>
