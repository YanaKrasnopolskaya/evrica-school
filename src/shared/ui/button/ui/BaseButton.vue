<script setup lang="ts">
interface Button {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  state?: 'default' | 'success' | 'invalid' | 'server-error';
  disabled?: boolean;
}

withDefaults(defineProps<Button>(), {
  variant: 'primary',
  type: 'button',
  state: 'default',
  disabled: false,
});

defineEmits<{
  (e: 'update:state', value: Button['state']): void;
}>();
</script>

<template>
  <button
    class="btn"
    :class="[
      `btn__${variant}`,
      { 'btn__is-invalid': state === 'invalid', 'btn__is-success': state === 'success' },
    ]"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: 29px 48px;
  border-radius: 16px;
  background: $red-main;
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 120%;
  letter-spacing: 0;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(240, 35, 69, 1);
  }
  &:active {
    background: rgba(247, 14, 52, 1);
  }
  &:disabled {
    background: rgba(237, 61, 90, 0.7);
    cursor: not-allowed;
  }
  &__is-invalid {
    background: rgba(241, 0, 4, 1);
  }
}
</style>
