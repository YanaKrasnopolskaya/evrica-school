<script setup lang="ts">
interface Input {
  placeholder: string;
  invalid: boolean;
  modelValue: string;
  errorText?: string | null;
}

const props = withDefaults(defineProps<Input>(), {
  placeholder: '',
  invalid: false,
  modelValue: '',
  errorText: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'blur'): void;
}>();

const localValue = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
});
</script>

<template>
  <div class="input-wrapper">
    <div class="input" :class="{ 'input--invalid': invalid }">
      <input
        class="input__field"
        type="text"
        :placeholder="placeholder"
        v-model="localValue"
        @blur="emit('blur')"
      />
      <transition name="fade">
        <svg class="input__invalid-icon" width="14" height="14" aria-hidden="true" v-if="invalid">
          <use href="/sprite/sprite.svg#icon_warning"></use>
        </svg>
      </transition>
    </div>
    <transition name="fade">
      <span class="input__invalid-text" v-if="invalid">{{ errorText || 'Заполните это поле' }}</span>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
}
.input {
  border: 2px solid $red-light;
  display: flex;
  align-items: center;
  gap: 8px;
  background: $white;
  border-radius: 16px;
  padding: 15.5px 16px;
  transition: border-color 0.25s ease;
  &__field {
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    vertical-align: middle;
    color: $brown;
    border: none;
    &::placeholder {
      font-weight: 300;
      font-size: 1rem;
      line-height: 120%;
      letter-spacing: 0;
      vertical-align: middle;
      color: rgba(62, 39, 39, 0.5);
    }
    &:focus-visible {
      outline: none;
    }
  }
  &__invalid-icon {
    width: 14px;
    height: 14px;
    transition: 0.2s ease;
  }
  &__invalid-text {
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    transition: 0.2s ease;
    margin: 6px 0 0 24px;
    color: $red-main;
  }
}
.input--invalid {
  animation: flash-shadow 0.6s ease;
  .input__field {
    color: $red-main;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
