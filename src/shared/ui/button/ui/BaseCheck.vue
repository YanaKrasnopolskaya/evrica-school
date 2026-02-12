<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  invalid: boolean;
  required: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const toggleCheck = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>

<template>
  <label class="checkbox" :class="{ 'checkbox--invalid': invalid }">
    <input
      class="checkbox__input"
      id="check"
      type="checkbox"
      :checked="modelValue"
      @change="toggleCheck"
    />
    <span class="checkbox__box">
      <svg class="checkbox__icon" width="9" height="6" aria-hidden="true">
        <use href="/sprite/sprite.svg#icon_check"></use>
      </svg>
    </span>
    <slot name="check-text"></slot>
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  &__input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    &:checked + .checkbox__box .checkbox__icon {
      display: block;
    }
  }
  &__box {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid $brown;
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
    &:hover {
      opacity: 41%;
    }
  }
  &__icon {
    display: none;
  }
}
.checkbox--invalid .checkbox__box {
  animation: flash-shadow 0.6s ease;
  border-color: $red-main;
  background: rgba(237, 61, 90, 0.4);
}
@keyframes flash-shadow {
  0% {
    box-shadow: 0 0 0 0 rgba(237, 61, 90, 0);
  }
  30% {
    box-shadow: 0 0 6px 3px rgba(237, 61, 90, 0.4);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(237, 61, 90, 0);
  }
}
</style>
