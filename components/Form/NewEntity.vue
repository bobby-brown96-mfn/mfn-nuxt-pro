<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import {
  EntityType,
  type NewBookEntityInput,
  type BaseBookEntityFragment,
} from "#graphql-operations";

interface Props {
  bookId: string;
  userId: string;
  existingBookEntities: BaseBookEntityFragment[];
}

const props = defineProps<Props>();
const isProcessing = ref(false);
const authStore = useAuthStore();

const entityTypeNames = ref(Object.keys(EntityType));

const emit = defineEmits<{
  saving: [];
  savedNew: [id: string];
  close: [];
}>();

const existingEntityNumbers = computed(() =>
  props.existingBookEntities
    .map(({ entityId }) => entityId)
    .sort((a, b) => a - b)
);

const arrayRange = (start: number, stop: number, step = 1) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

const getNextEntityNumber = computed(() => {
  const range = arrayRange(2, existingEntityNumbers.value.length, 1);
  const opts = range.filter((n) => !existingEntityNumbers.value.includes(n));
  return Math.max(...opts) + 2;
});

const state: NewBookEntityInput = reactive({
  name: "",
  entityType: EntityType.GENERAL,
  isActive: true,
  entityId: 0,
});

const validate = (state: any): FormError[] => {
  const errors: FormError[] = [];

  if (!state.name || state.name === "")
    errors.push({ path: "name", message: "Please enter a name." });
  if (!state.entityType)
    errors.push({
      path: "entityType",
      message: "Please enter an Entity Type.",
    });

  return errors;
};

async function onSubmit(event: FormSubmitEvent<NewBookEntityInput>) {
  isProcessing.value = true;
  //await authStore.refreshAccess();
  emit("saving");
  // Do something with data
  console.log("submit entity form " + event.data);

  try {
    const { data, errors } = await useGraphqlMutation("createBookEntity", {
      input: event.data,
    });

    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (data.createBookEntity.id) {
      emit("savedNew", data.createBookEntity.id);
    } else {
      console.log(
        "No Book Entity Id with errors " + JSON.stringify(errors, null, 2)
      );
      emit("close");
    }

    emit("close");
  } catch (e) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(`error submitting new entity: ${e}`);
    console.log(`error submitting new entity: ${JSON.stringify(e, null, 2)}`);
  }
  isProcessing.value = false;
}

onMounted(() => {
  state.entityId = getNextEntityNumber.value;
});
</script>

<template>
  <UProgress v-if="isProcessing === true" animation="carousel" />
  <UForm
    v-else
    :validate="validate"
    :validate-on="['submit']"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormGroup label="Name" name="name">
      <UInput
        v-model="state.name"
        placeholder="Test Entity"
        autofocus
        :disabled="isProcessing"
      />
    </UFormGroup>

    <UFormGroup label="Entity Type" name="entityType">
      <USelect
        :options="entityTypeNames"
        v-model="state.entityType"
        :disabled="isProcessing"
      />
    </UFormGroup>

    <UFormGroup label="Entity Number" name="entityId">
      <PrimeInputNumber v-model="state.entityId" />
    </UFormGroup>

    <UFormGroup label="Is Active" name="isActive">
      <UCheckbox v-model="state.isActive" :disabled="isProcessing" />
    </UFormGroup>

    <div class="flex justify-center gap-3">
      <UButton
        label="Cancel"
        color="gray"
        variant="ghost"
        @click="emit('close')"
      />
      <UButton type="submit" label="Save" color="black" />
    </div>
    <pre>{{ getNextEntityNumber }}</pre>
  </UForm>
</template>
