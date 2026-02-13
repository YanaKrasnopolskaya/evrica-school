<script setup lang="ts">

import {SmallCardWithFeatures} from "~/entities/cards";
import {FEATURES_DATA} from "~/widgets/home-page/features";
</script>

<template>
  <section class="features">
    <h2 class="features__title">Что делает Эврику особенной</h2>
    <small-card-with-features v-for="(card, index) in FEATURES_DATA"
                              class="card"
                              :class="[ `card--${card.id}` ]"
                              :key="index"
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
.features {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 51px;
  background: $white url("/images/mobile/mb-section-bg-img.webp") no-repeat center center;
  margin-left: -16px;
  margin-right: -16px;
  padding: 40px 16px;
  margin-bottom: 60px;
  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: 31px;
    background-image: url("/images/tablet/tb-section-bg-img.webp");
    background-position: center top;
    margin-bottom: 162px;
  }
  @include desktop {
    background-image: url("/images/desktop/dt-section-bg-img.webp");
    margin-bottom: 0;
  }
  &__title {
    grid-row: 4;
    @include tablet {
      width: 365px;
      grid-row: 4;
      grid-column: span 2;
      transform: translate(-18px, 68px);
    }
    @include desktop {
      transform: translate(0, -70px);
    }
  }
}
.card {
  @include tablet {
    width: 366px;
  }
  &__icon-wrapper {
    position: absolute;
    right: 0;
    top: -76px;
    width: 98px;
    height: 114px;
    display: flex;
    align-items: center;
    justify-content: center;
    rotate: 8.79deg;
    @include tablet {
      top: -116px;
      right: -48px;
      width: 140px;
      height: 162px;
      rotate: 5.58deg;
    }
  }
}
.card--1 {
  border-color: $violet-light;
  @include tablet {
    grid-row: 1;
    grid-column: 2;
    transform: translate(-70px, 50px);
    .card__icon {
      width: 115px;
      height: 110px;
    }
  }
  @include desktop {
    transform: translate(68px, 92px);
  }
}
.card--2 {
  border-color: $orange-light;
  @include tablet {
    grid-row: 2;
    grid-column: 1;
    transform: translate(-18px, 118px);
    .card__icon {
      width: 119px;
      height: 140px;
    }
  }
  @include desktop {
    transform: translate(-102px, -6px);
  }
}
.card--3 {
  border-color: $green-light;
  @include tablet {
    grid-row: 3;
    grid-column: 2;
    transform: translate(0, 60px);
  }
  @include desktop {
    transform: translate(77px, 56px);
  }
}
.card--4 {
  border-color: $green-light;
  @include tablet {
    grid-row: 5;
    grid-column: 1;
    transform: translate(-26px, 112px);
  }
  @include desktop {
    transform: translate(-86px, -170px);
  }
}
.card--5 {
  border-color: $blue-light;
  @include tablet {
    grid-row: 6;
    grid-column: 2;
    transform: translate(-66px, 72px);
    .card__icon {
      width: 119px;
      height: 128px;
    }
  }
  @include desktop {
    transform: translate(-38px, -90px);
  }
}
.card--6 {
  border-color: $orange-light;
  @include tablet {
    grid-row: 7;
    grid-column: 1;
    transform: translate(8px, 108px);
  }
  @include desktop {
    transform: translate(132px, -170px);
  }
}
.card--3,
.card--4,
.card--6 {
  .card__icon-wrapper {
    rotate: 0deg;
  }
  @include tablet {
    width: 319px;
    padding: 16px;
    .card__icon {
      width: 70px;
      height: 90px;
    }
    .card__icon-wrapper {
      top: -95px;
    }
  }
}
</style>