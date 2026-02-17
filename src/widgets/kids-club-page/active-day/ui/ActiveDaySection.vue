<script setup lang="ts">
import {AnimationCard, InfoCardWithImage} from "~/entities/cards";
import {ACTIVE_DAY_DATA} from "~/widgets/kids-club-page/active-day";
</script>

<template>
  <div class="active-day" >
    <h2 class="active-day__title">День, полный активности и&nbsp;открытий</h2>
      <template v-for="card in ACTIVE_DAY_DATA">
        <animation-card v-if="card.type === 'animation'"
                        class="active-day__card"
                        :class="[`card--${card.id}`]"
                        :background="card.background"
                        :image-desktop="card.imageDesktop"
                        :image-mobile="card.imageMobile"
                        :image-alt="card.imageAlt"
                        :image-width="card.imageWidth"
                        :image-height="card.imageHeight"
                        :description="card.description"
                        :icon="card.icon"
                        :icon-width="card.iconWidth"
                        :icon-height="card.iconHeight"
        />
        <info-card-with-image v-if="card.type === 'info'"
                              class="active-day__card"
                              :class="[`card--${card.id}`]"
                              :image-desktop="card.imageDesktop"
                              :image-mobile="card.imageMobile"
                              :image-alt="card.imageAlt"
                              :image-width="card.imageWidth"
                              :image-height="card.imageHeight"
                              :card-description="card.description" />
      </template>
  </div>
</template>

<style lang="scss" scoped>
.active-day {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  @include tablet {
    padding-top: 44px;
    gap: 60px;
    margin-bottom: -8px;
  }
  @include desktop {
    padding-top: 0;
    margin-top: -4px;
    grid-template-columns: repeat(2, 1fr);
  }
  &__title {
    text-align: left;
    width: 220px;
    @include tablet {

      width: 642px;
    }
    @include desktop {
      grid-column: span 2;
      width: 563px;
    }
  }
  &__card {
    :deep(.card__image) {
      border-radius: 20px;
    }
  }
}
.card--1 {
  width: 100%;
  height: 382px;
  :deep(.card__info) {
    padding: 20px;
    width: 323px;
    transform: translateY(308%);
    margin-left: auto;
    z-index: 1;
  }
  :deep(.card__image) {
    top: 0;
  }
  :deep(.card__icon) {
    bottom: 0;
    right: 22px;
    rotate: 16deg;
    z-index: 2;
  }
  @include tablet {
    height: 573px;
    :deep(.card__info) {
      width: 568px;
      padding: 40px;
      transform: translateY(291%);
    }
    :deep(.card__icon) {
      bottom: -26px;
      right: 2px;
      width: 115px;
      height: 110px;
      rotate: -12.2deg;
    }
    :deep(.card__image) {
      width: 434px;
      height: 406px;
    }
  }
  @include desktop {
    grid-row: span 2;
    grid-column: 2;
    transform: translate(-13%, -30%);
    :deep(.card__info) {
      width: 508px;
      transform: translate(8%, 291%);
    }
    :deep(.card__icon) {
      right: -72px;
    }
    :deep(.card__image) {
      width: 396px;
      height: 406px;
      transform: translateX(19%);
    }
  }
}
.card--2 {
  background: $green;
  width: 100%;
  height: 281px;
  @include tablet {
    width: 424px;
    height: 428px;
    transform: translateY(-2%);
  }
  @include desktop {
    background: $orange;
    transform: translate(3%, 27%);
  }
}
.card--3 {
  width: 100%;
  height: 308px;
  :deep(.card__image) {
    bottom: 0;
    right: 0;
  }
  @include tablet {
    height: 365px;
    :deep(.card__info) {
      padding-right: 50px;
      width: 402px;
      transform: translateY(77%);
    }
    :deep(.card__image) {
      width: 365px;
      height: 365px;
      bottom: 10px;
    }
  }
  @include desktop {
    grid-row: 4;
    grid-column: 2;
    :deep(.card__info) {
      padding-right: 50px;
      width: 696px;
      transform: translate(-76%, 233%);
    }
    :deep(.card__image) {
      width: 424px;
      height: 424px;
      transform: translate(-48%, 40%);
    }
  }
}
.card--4 {
  width: 100%;
  height: 370px;
  :deep(.card__image) {
    top: 0;
  }
  :deep(.card__icon) {
    z-index: 2;
    bottom: -16px;
    right: 22px;
    rotate: 16deg;
  }
  :deep(.card__info) {
    padding: 20px;
    width: 323px;
    z-index: 1;
    margin-left: auto;
    transform: translateY(310%);
  }
  @include tablet {
    height: 636px;
    :deep(.card__info) {
      padding: 40px;
      width: 575px;
      transform: translateY(426%);
    }
    :deep(.card__icon) {
      width: 119px;
      height: 128px;
      rotate: -11.08deg;
      right: -12px;
      bottom: -6px;
    }
    :deep(.card__image) {
      width: 690px;
      height: 489px;
      transform: translateY(-3%);
    }
  }
  @include desktop {
    grid-row: 5;
    grid-column: span 2;
    :deep(.card__image) {
      transform: translate(1%, 18%);
    }
    :deep(.card__info) {
      width: 456px;
      transform: translate(-97.5%, 363%);
    }
    :deep(.card__icon) {
      right: 31%;
      bottom: -58px;
    }
  }
}
</style>