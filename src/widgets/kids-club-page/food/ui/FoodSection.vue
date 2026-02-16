<script setup lang="ts">

import {SmallCardWithFeatures} from "~/entities/cards";
import {FOOD_DATA} from "~/widgets/kids-club-page/food/model/FOOD_DATA";
</script>

<template>
  <section class="food">
    <h2 class="food__title">Здоровая, полезная пища</h2>
    <small-card-with-features v-for="(card, index) in FOOD_DATA"
                              class="card"
                              :class="[ `card--${card.id}` ]"
                              :key="index"
                              :title="card.title"
                              :description="card.description"
                              :icon="card.icon"
                              :icon-width="card.iconWidth"
                              :icon-height="card.iconHeight"
    >
      <template #icon>
        <div class="card__icon-wrapper">
          <svg class="card__icon"
               :width="card.iconWidth"
               :height="card.iconHeight"
               aria-hidden="true"
          >
            <use :href="`/sprite/sprite.svg#${card.icon}`"></use>
          </svg>
        </div>
      </template>
    </small-card-with-features>
  </section>
</template>

<style scoped lang="scss">
.food {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 62px;
  background: $white url("/images/mobile/mb-section-bg-img.webp") no-repeat center center;
  margin-left: -16px;
  margin-right: -16px;
  padding: 40px 16px;
  margin-bottom: 18px;
  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: 31px;
    background-image: url("/images/tablet/tb-section-bg-img.webp");
    background-position: center top;
    margin-bottom: 104px;
    height: 1140px;
  }
  @include desktop {
    background-image: url("/images/desktop/dt-section-bg-img.webp");
    margin-bottom: 121px;
    height: 860px;
  }
  &__title {
    grid-row: 3;
    @include tablet {
      width: 514px;
      grid-column: span 2;
      transform: translate(-4%, -57%);
    }
    @include desktop {
      width: 365px;
      transform: translate(0, -32%);
    }
  }
}
.card {
  @include tablet {
    width: 366px;
  }
  &__icon-wrapper {
    position: absolute;
    right: -3px;
    top: -68px;
    width: 100px;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include tablet {
      top: -90px;
      right: -48px;
      width: 140px;
      height: 162px;
    }
  }
}
.card--1 {
  border-color: $green-light;
  .card__icon-wrapper {
    rotate: 0;
  }
  :deep(.card__title) {
    color: $green-dark;
  }
  @include tablet {
    grid-row: 1;
    grid-column: 1;
    transform: translate(0, 8%);
    .card__icon {
      width: 70px;
      height: 84px;
    }
  }
  @include desktop {
    transform: translate(-28%, 66%);
  }
}
.card--2 {
  border-color: $violet-light;
  :deep(.card__title) {
    color: $violet;
  }
  @include tablet {
    grid-row: 2;
    grid-column: 2;
    transform: translate(-18%, -4%);
    .card__icon {
      width: 70px;
      height: 84px;
    }
  }
  @include desktop {
    transform: translate(19%, -84%);
  }
}
.card--3 {
  border-color: $orange-light;
  :deep(.card__title) {
    color: $orange;
  }
  @include tablet {
    grid-row: 4;
    grid-column: 1;
    transform: translate(0, -10%);
    .card__icon {
      width: 120px;
      height: 140px;
    }
    .card__icon-wrapper {
      rotate: 8.61deg;
    }
  }
  @include desktop {
    transform: translate(-17%, -90%);
  }
}
.card--4 {
  border-color: $blue-light;
  :deep(.card__title) {
    color: $blue;
  }
  @include tablet {
    grid-row: 5;
    grid-column: 2;
    transform: translate(-26%, -4%);
    .card__icon {
      width: 119px;
      height: 128px;
    }
    .card__icon-wrapper {
      rotate: 8.61deg;
    }
  }
  @include desktop {
    transform: translate(-10%, -128%);
  }
}
</style>