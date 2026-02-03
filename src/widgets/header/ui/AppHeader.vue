<script setup lang="ts">

</script>

<template>
  <header class="header">
    <NuxtLink to="/">
      <picture>
        <source srcset="/images/desktop/heder-logo.webp" type="image/webp" media="(min-width: 768px)"/>
        <img class="header__logo" src="/images/mobile/mb-header-logo.png" alt="Логотип Эврика" width="101" height="36"/>
      </picture>
    </NuxtLink>
    <div class="header__menu">
      <button class="header__menu-btn" aria-label="Меню">
        <svg class="header__menu-icon" width="21" height="15" aria-hidden="true">
          <use href="/sprite/sprite.svg#icon_menu"></use>
        </svg>
      </button>
    </div>
  </header>
</template>


<style scoped lang="scss">
.header {
  padding: 10px 16px 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid $red-light;
  background: inherit;
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
}
</style>