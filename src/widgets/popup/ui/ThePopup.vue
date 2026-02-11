<script setup lang="ts">
import BaseForm from '~/features/form/ui/BaseForm.vue';

defineProps<{ isOpen: boolean }>();
defineEmits<{ (e: 'close'): void }>();
</script>

<template>
  <transition name="fade">
    <div class="popup-wrapper" v-if="isOpen">
      <div class="popup">
        <picture>
          <source
              srcset="/images/desktop/dt-hero-bg-img.webp"
              type="image/webp"
              media="(min-width: 768px)"
          />
          <img
              class="popup__bg"
              src="/images/mobile/mb-hero-bg-img.png"
              alt="Логотип Эврика"
              width="343"
              height="418"
              fetchpriority="high"
              decoding="async"
              loading="eager"
          />
        </picture>
        <button class="popup__close-btn" @click="$emit('close')">
          <svg class="popup__icon-close" width="12" height="12" aria-hidden="true">
            <use href="/sprite/sprite.svg#icon_close"></use>
          </svg>
        </button>
        <div class="popup__content">
          <span class="popup__content-text">Начните открывать мир вместе с&nbsp;нами!</span>
          <base-form class="popup__form"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.popup-wrapper {
  inset: 0;
  position: fixed;
  z-index: 100;
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
  background: $red-light;
  background-size: 230%;
  padding: 80px 16px;
  overflow: hidden;
  @include tablet {
    height: 743px;
    margin: 0 48px;
    padding: 120px 114.5px;
  }
  @include desktop {
    width: 672px;
    margin: 0 auto;
  }
  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 0;
  }
  &__icon-close {
    position: absolute;
    top: 22px;
    right: 22px;
    color: $brown;
  }
  &__content {
    position: relative;
    z-index: 1;
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
      margin-left: -49px;
      margin-right: -49px;
    }
  }
  &__form {
    :deep(.form__check) {
      opacity: 46%;
    }
    @include tablet {
      :deep(.form__btn) {
        padding: 29px;
      }
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
