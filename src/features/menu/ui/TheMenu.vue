<script setup lang="ts">

import {TheNavigation} from "~/features/navigation";
import {BaseButton} from "~/shared/button";

defineProps<{ isOpen: boolean }>();
</script>

<template>
  <transition name="fade">
    <div class="menu-wrapper" v-if="isOpen">
      <div class="menu"  >
        <the-navigation class="menu__navigation" ></the-navigation>
        <base-button class="menu__button">Записаться</base-button>
      </div>
      <div class="overlay"></div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.menu-wrapper {
  position: fixed;
  z-index: 3;
  top: 56px;
  width: 100vw;
  inset: 56px 0 0 0; // растянуть на весь екран
  display: flex;
  flex-direction: column;
  @include tablet {
    top: 63px;
  }
}
.menu {
  position: relative;
  z-index: 2;
  height: 447px;
  background: $white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  @include tablet {
    height: 414px;
    gap: 38px;
    padding-top: 62px;
    justify-content: flex-start;
  }
  &__button {
    padding: 12px;
    width: 219px;
    height: 43px;
    border-radius: 8px;
    font-size: 1rem;
    @include tablet {
      width: 238px;
      height: 43px;
    }
  }
}
.overlay {
  position: fixed;
  z-index: 1;
  top: 56px;
  height: 100vh;
  background: rgba(62, 39, 39, 0.2);
  backdrop-filter: blur(10px);
}
// анимация появления меню
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>