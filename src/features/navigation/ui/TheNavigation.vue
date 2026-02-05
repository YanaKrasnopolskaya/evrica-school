<script setup lang="ts">
import { navLinks } from '~/features/navigation';
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="(link, index) in navLinks" :key="index">
        <NuxtLink
          v-if="!link.isAnchor"
          :to="link.to"
          class="nav__link"
          exact-active-class="nav__link--exact-active"
          >{{ link.label }}</NuxtLink
        >
        <a v-else :href="link.to" class="nav__link">{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  padding: 8px 16px;
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @include tablet {
      gap: 14px;
    }
    @include desktop {
      flex-direction: row;
      gap: 24px;
    }
  }
  &__link {
    padding-bottom: 9px;
    position: relative;
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    vertical-align: middle;
    &:hover {
      color: $red-main;
    }
  }
}
.nav__link--exact-active {
  color: $red-main;
  @include desktop {
    top: -4px;
    left: -2px;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 5px;
    box-shadow: 0 0 2px 0 $red-main;
    background: $red-main;
    border-radius: 50%;
  }
}
</style>
