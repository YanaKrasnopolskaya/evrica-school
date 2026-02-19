<script setup lang="ts">
import {AnimationCard, InfoCardWithImage} from "~/entities/cards";
import {ACTIVE_DAY_CAMP_DATA} from "~/widgets/camp-page/active-day";

</script>

<template>
  <div class="active-day">
    <h2 class="active-day__title">День, полный активности и&nbsp;открытий</h2>
    <div class="active-day__cards-wrapper">
      <animation-card v-for="(card) in ACTIVE_DAY_CAMP_DATA"
                      class="card"
                      :class="[ `card--${card.id}` ]"
                      :title="card.title"
                      :icon="card.icon"
                      :icon-width="card.iconWidth"
                      :icon-height="card.iconHeight"
                      :description="card.description"
                      :background="card.background"
                      :image-desktop="card.imageDesktop"
                      :image-mobile="card.imageMobile"
                      :image-alt="card.imageAlt"
                      :image-width="card.imageWidth"
                      :image-height="card.imageHeight"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.active-day {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  @include tablet {
    gap: 60px;
  }
  @include desktop {
    gap: 78px;
  }
  &__title {
    text-align: left;
    @include tablet {
      width: 648px;
    }
  }
  &__cards-wrapper {
    width: 100%;
    display: grid;
    gap: 40px;
    @include tablet {
      gap: 60px;
    }
  }
}
.card {
  width: 100%;
}
.card--1 {
  height: 284px;
  :deep(.card__info) {
    color: $violet-light;
  }
  :deep(.card__image) {
    width: 174px;
    height: 174px;
    bottom: 0;
    right: 10px;
    rotate: -6deg;
    border-radius: 20px;
    object-position: right center;
  }
  :deep(.card__icon) {
    right: 25px;
    top: -50px;
    z-index: 1;
    rotate: 15deg;
  }
  @include tablet {
    height: 408px;
    padding-top: 20px;
    :deep(.card__info) {
      width: 604px;
      margin-right: auto;
    }
    :deep(.card__icon) {
      width: 115px;
      height: 110px;
      right: 110px;
      top: -68px;
      rotate: 9.67deg;
    }
    :deep(.card__image) {
      width: 240px;
      height: 240px;
      right: 0;
      rotate: 0deg;
    }
  }
  @include desktop {
    width: 746px;
    height: 502px;
    padding-top: 0;
    transform: translateX(-1%);
    justify-self: flex-end;
    :deep(.card__icon) {
      top: -72px;
    }
    :deep(.card__image) {
      bottom: 110px;
    }
  }
}
.card--2 {
  height: 284px;
  :deep(.card__image) {
    width: 174px;
    height: 174px;
    bottom: -20px;
    right: 10px;
    rotate: -6deg;
    border-radius: 20px;
    object-position: 78% center;
  }
  @include tablet {
    height: 408px;
    padding-top: 20px;
    :deep(.card__info) {
      width: 604px;
    }
    :deep(.card__image) {
      width: 240px;
      height: 240px;
      bottom: 0;
      right: 0;
      rotate: 0deg;
    }
  }
  @include desktop {
    width: 746px;
    height: 502px;
    justify-self: flex-end;
    transform: translate(-3%, -56%);
    :deep(.card__image) {
      bottom: 92px;
    }
  }
}
.card--3 {
  height: 442px;
  :deep(.card__image) {
    width: 262px;
    height: 303px;
    top: 0;
    left: 0;
    border-radius: 20px;
    object-position: center center;
  }
  :deep(.card__info) {
    width: 323px;
    margin-top: auto;
    margin-left: auto;
    transform: translateY(-32%);
    z-index: 1;
  }
  :deep(.card__icon) {
    right: 25px;
    bottom: -13px;
    z-index: 2;
    rotate: 15deg;
  }
  @include tablet {
    height: 573px;
    grid-row: 2;
    :deep(.card__image) {
      width: 436px;
      height: 406px;
    }
    :deep(.card__info) {
      width: 568px;
      margin-top: auto;
      margin-left: auto;
      transform: translateY(-4%);
    }
    :deep(.card__icon) {
      width: 119px;
      height: 128px;
      right: 0;
      bottom: -32px;
      rotate: -12.2deg;
    }
  }
  @include desktop {
    width: 664px;
    height: 573px;
    transform: translate(6%, -54%);
    :deep(.card__image) {
      width: 396px;
      height: 407px;
    }
    :deep(.card__info) {
      width: 508px;
      transform: translateY(-3%);
    }
    :deep(.card__icon) {
      right: -32px;
    }
  }
}
.card--4 {
  height: 370px;
  :deep(.card__image) {
    width: 320px;
    height: 320px;
    top: 8px;
    left: 13px;
    rotate: 4deg;
    border-radius: 20px;
    object-position: center center;
  }
  :deep(.card__info) {
    margin-top: auto;
    margin-left: auto;
    transform: translateY(6%);
    z-index: 1;
  }
  @include tablet {
    height: 636px;
    :deep(.card__image) {
      width: 690px;
      height: 490px;
      top: 0;
      left: 0;
      rotate: 0deg;
    }
    :deep(.card__info) {
      width: 575px;
      transform: translateY(0);
    }
  }
  @include desktop {
    width: 867px;
    height: 591px;
    transform: translate(4.5%, -81.5%);
    :deep(.card__info) {
      width: 456px;
      transform: translateY(-6%);
    }
  }
}
.card--5 {
  height: 352px;
  transform: translateY(-1%);
  :deep(.card__image) {
    width: 238px;
    height: 238px;
    right: 0;
    bottom: 0;
  }
  :deep(.card__info) {
    color: $red-light
  }
  @include tablet {
    height: 365px;
    padding-top: 62px;
    :deep(.card__info) {
      color: $white;
      width: 402px;
    }
    :deep(.card__image) {
      width: 365px;
      height: 365px;
      right: 0;
    }
  }
  @include desktop {
    width: 1020px;
    height: 424px;
    transform: translate(8%, -100%);
    padding-top: 16px;
    :deep(.card__info) {
      width: 696px;
    }
    :deep(.card__image) {
      width: 424px;
      height: 424px;
      bottom: 90px;
    }
  }
}
</style>