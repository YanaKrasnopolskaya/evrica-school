<script setup lang="ts">
import {InfoCardWithList} from "~/entities/cards";
import {TYPES_CAMPS_DATA} from "~/widgets/camp-page/types-of-camps";
</script>

<template>
  <section class="types-of-camps">
    <h2 class="types-of-camps__title">Чем отличается городской лагерь от&nbsp;загородного</h2>
    <div class="types-of-camps__cards-wrapper">
      <info-card-with-list v-for="card in TYPES_CAMPS_DATA"
                           :key="card.id"
                           class="card"
                           :class="[`card--${card.id}`]"
                           :title="card.title"
                           :color="card.color"
                           :description="card.description"
                           :icon="card.icon"
                           :icon-width="card.iconWidth"
                           :icon-height="card.iconHeight"
                           :items="card.items" />
      <img class="types-of-camps__image" src="/images/desktop/44-image.webp" alt="Вид лагеря изображение" loading="lazy" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.types-of-camps {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 60px;
  @include tablet {
    gap: 61px;
    margin-bottom: 100px;
  }
  @include desktop {
    margin-bottom: 120px;
  }
  &__title {
    @include desktop {
      width: 886px;
      margin-left: -7px;
    }
  }
  &__cards-wrapper {
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 20px;
    @include desktop {
      grid-template-columns: repeat(3, auto);
      gap: 0;
    }
  }
  &__image {
    position: absolute;
    transform: translate(-33px, 43px);
    object-position: 64% center;
    z-index: 2;
    display: none;
    grid-column: 2;
    grid-row: 1;
    width: 460px;
    height: 594px;
    border-radius: 20px;
    rotate: 3deg;
    @include desktop {
      display: block;
    }
  }
}
.card--1,
.card--2 {
  :deep(.card__info-title) {
    order: 0;
  }
  :deep(.card__list) {
    order: 1;
  }
  :deep(.card__info-description) {
    order: 2;
  }
  @include tablet {
    width: 480px;
    height: 515px;
  }
  @include desktop {
    height: 594px;
    padding: 40px 42px;
  }
}
.card--1 {
  z-index: 2;
  :deep(.card__icon) {
    left: -13px;
    bottom: -8px;
  }
  @include tablet {
    justify-self: flex-start;
    :deep(.card__icon) {
      left: -5px;
      bottom: 8px;
    }
  }
  @include desktop {
    z-index: 3;
    overflow: visible;
    :deep(.card__icon) {
      left: 25px;
      bottom: -8px;
    }
  }
}
.card--2 {
  z-index: 3;
  :deep(.card__icon) {
    left: -7px;
    bottom: 5px;
  }
  @include tablet {
    rotate: -2.6deg;
    justify-self: flex-end;
    transform: translateY(-46.5%);
    :deep(.card__icon) {
      left: 0;
      bottom: 15px;
    }
  }
  @include desktop {
    z-index: 1;
    rotate: 0deg;
    transform: translateY(0);
    grid-column: 3;
    :deep(.card__icon) {
      left: 30px;
    }
  }
}
</style>