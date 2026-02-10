<script setup lang="ts">
import BaseForm from '~/features/form/ui/BaseForm.vue';

defineProps<{ isOpen: boolean }>();
defineEmits<{ (e: 'close'): void }>();
</script>

<template>
  <transition name="fade">
    <div class="popup-wrapper" v-if="isOpen">
      <div class="popup">
        <button class="popup__close-btn" @click="$emit('close')">
          <svg class="popup__icon-close" width="12" height="12" aria-hidden="true">
            <use href="/sprite/sprite.svg#icon_close"></use>
          </svg>
        </button>
        <div class="popup__content">
          <span class="popup__content-text">Начните открывать мир вместе с&nbsp;нами!</span>
          <base-form />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.popup-wrapper {
  inset: 0;
  position: fixed;
  z-index: 1;
  background: rgba(62, 39, 39, 0.2);
  backdrop-filter: blur(10px);
}
.popup {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  margin: 0 16px;
  border-radius: 24px;
  background: $red-light url('/images/desktop/dt-hero-bg-img.png') no-repeat bottom left;
  background-size: 230%;
  padding: 80px 16px;
  &__icon-close {
    position: absolute;
    top: 22px;
    right: 22px;
    color: $brown;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    @include tablet {
      gap: 50px;
    }
  }
  &__content-text {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: $red-main;
    @include tablet {
      font-size: 4rem;
      line-height: 90%;
    }
  }
}
// анимация появления попапа
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
