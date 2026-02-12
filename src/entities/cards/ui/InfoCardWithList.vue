<script setup lang="ts">
import {ArrowButton} from "~/shared/ui/button";

interface Card {
  color: string;
  title: string;
  description: string;
  icon: string;
  iconWidth: string;
  iconHeight: string;
  items: string[];
  page?: string;
}

defineProps<Card>();
</script>

<template>
  <div class="card" :class="[`card--${ color }`]">
    <div class="card__info">
      <h3 class="card__info-title" v-html="title"></h3>
      <p class="card__info-description" v-html="description"></p>
      <ul class="card__list">
        <li class="card__list-item" v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div v-if="page" class="card__link">
      <NuxtLink :to="page">
        <arrow-button class="card__button"/>
      </NuxtLink>
    </div>
    <svg
        class="card__icon"
        :width="iconWidth"
        :height="iconHeight"
        aria-hidden="true"
    >
      <use :href="`/sprite/sprite.svg#${icon}`"></use>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  height: 478px;
  padding: 40px 20px;
  border-radius: 24px;
  background-size: cover;
  background: url("/images/mobile/card-bg-img.webp") no-repeat right bottom;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  overflow: hidden;
  @include tablet {
    padding: 40px 32px;
    width: 424px;
    height: 594px;
  }
  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
  &__info-title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    @include tablet {
      font-size: 2.5rem;
    }
  }
  &__info-description {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    color: $brown;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.35px;
    }
  }
  &__list {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    align-items: flex-start;
  }
  &__list-item {
    padding: 8px 16px;
    background: $white;
    border-radius: 32px;
    color: $brown;
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.35px;
    }
  }
  &__button {
    width: 52px;
    height: 52px;
  }
  &__icon {
    position: absolute;
    bottom: 0;
    left: 10px;
    rotate: -18.93deg;
  }
}
.card--orange {
  background-color: $orange-light;
  .card__info-title {
    color: $orange;
  }
  .card__button {
    border-color: $orange;
  }
  .card__icon {
    @include tablet {
      bottom: -6px;
      width: 167px;
      height: 196px;
    }
  }
  :deep(.arrow-btn__icon) {
    color: $orange;
  }
}
.card--green {
  background-color: $green-extra-light;
  .card__info-title {
    color: $green-dark;
  }
  .card__button {
    border-color: $green-dark;
  }
  .card__icon {
    left: 0;
    bottom: 16px;
    @include tablet {
      width: 207px;
      height: 157px;
      left: 28px;
    }
  }
  :deep(.arrow-btn__icon) {
    color: $green-dark;
  }
}
.card--azure {
  background-color: $azure-extra-light;
  .card__info-title {
    color: $azure;
  }
  .card__icon {
    @include tablet {
      width: 162px;
      height: 199px;
      bottom: -8px;
      left: 24px;
    }
  }
  .card__button {
    border-color: $azure;
  }
  :deep(.arrow-btn__icon) {
    color: $azure;
  }
}
</style>