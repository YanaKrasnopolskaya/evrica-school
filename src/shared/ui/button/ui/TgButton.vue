<script setup lang="ts">
const emit = defineEmits(['click']);
</script>

<template>
  <NuxtLink class="card__review-link" to="https://telegram.org/" target="_blank" rel="noopener noreferrer">
    <button class="tg-btn" type="button" @click="emit('click')">
      <span class="tg-btn__text">Написать в Telegram</span>
      <svg class="tg-btn__icon" width="32" height="32" aria-hidden="true">
        <use href="/sprite/sprite.svg#icon_tg"></use>
      </svg>
    </button>
  </NuxtLink>
</template>

<style scoped lang="scss">
.tg-btn {
  padding: 8px 24px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  display: flex;
  align-items: center;
  gap: 16px;
  &:hover {
    .tg-btn__text,
    .tg-btn__icon {
      opacity: 80%;
    }
  }
  &:active {
    .tg-btn__text,
    .tg-btn__icon {
      opacity: 60%;
    }
  }
  &:focus-visible {
    outline: none;
  }
  @include tablet {
    font-size: 1.375rem;
    padding: 16px 24px;
  }
  &__text {
    display: block;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__icon {
    color: $brown;
  }
}
</style>