<script setup lang="ts">

import {TheNavigation} from "~/features/navigation";
import {BaseButton} from "~/shared/button";
import {TheMenu} from "~/features/menu";

const isOpenMenu = ref(false);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
}
</script>

<template>
  <div class="header-wrapper">
    <div class="container">
      <header class="header">
        <div class="header__logo-wrapper">
          <NuxtLink to="/">
            <picture>
              <source srcset="/images/tablet/tb-header-logo.webp" type="image/webp" media="(min-width: 768px)"/>
              <source srcset="/images/desktop/dt-header-logo.webp" type="image/webp" media="(min-width: 1024px)"/>
              <img class="header__logo" src="/images/mobile/mb-header-logo.png" alt="Логотип Эврика" width="101" height="36"/>
            </picture>
          </NuxtLink>
        </div>
        <the-navigation class="header__nav"></the-navigation>
        <div class="header__button-wrapper">
          <base-button class="header__btn">Записаться</base-button>
          <button v-if="!isOpenMenu" class="header__menu-btn" aria-label="Меню" @click="toggleMenu">
            <svg class="header__menu-icon" width="21" height="15" aria-hidden="true">
              <use href="/sprite/sprite.svg#icon_menu"></use>
            </svg>
          </button>
          <button v-else class="header__menu-btn" aria-label="Меню" @click="toggleMenu">
            <svg class="header__menu-icon header__menu-close-icon" width="12" height="12" aria-hidden="true">
              <use href="/sprite/sprite.svg#icon_close"></use>
            </svg>
          </button>
        </div>
        <the-menu class="header__menu" :is-open="isOpenMenu" @close="isOpenMenu = false"></the-menu>
      </header>
    </div>
  </div>
</template>


<style scoped lang="scss">
.header-wrapper {
  background: inherit;
  border-bottom: 2px solid $red-light;
  @include desktop {
    border-bottom: none;
  }
}
.header {
  padding: 10px 0 8px;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include tablet {
    padding: 10px 0 8px;
  }
  @include desktop {
    padding: 7px 60px;
  }
  &__logo-wrapper {
    @include desktop {
      padding: 13px 9px 9px 8px ;
    }
  }
  &__logo {
    width: 101px;
    height: 36px;
    @include tablet {
      width: 121px;
      height: 43px;
    }
    @include desktop {
      width: 123px;
      height: 43px;
    }
  }
  &__nav {
    display: none;
    @include desktop {
      display: block;
    }
  }
  &__button-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 47px;
  }
  &__btn {
    padding: 12px;
    width: 112px;
    height: 32px;
    font-size: 0.75rem;
    border-radius: 8px;
    @include tablet {
      display: none;
    }
    @include desktop {
      padding: 12px 32px;
      width: 143px;
      height: 43px;
      font-size: 1rem;
      display: flex;
    }
  }
  &__menu-btn {
    width: 35px;
    height: 35px;
    background: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    @include desktop {
      display: none;
    }
  }
  &__menu-icon {
    width: 23px;
    height: 19px;
  }
  &__menu-close-icon {
    width: 14px;
    height: 14px;
  }
  &__menu {
    @include desktop {
      display: none;
    }
  }
}
</style>