<script setup lang="ts">
import {AnimationCard, InfoCardWithImage} from "~/entities/cards";
import {CLASSES_DATA} from "~/widgets/after-school-page/classes";

const animationCards = computed(() => CLASSES_DATA.filter(item => item.type === 'animation'));
const infoCards = computed(() => CLASSES_DATA.filter(item => item.type === 'info'));
</script>

<template>
  <div class="classes">
    <h2 class="classes__title">Чем занят ребёнок с&nbsp;12:00 до&nbsp;18:00</h2>
    <div class="classes__cards-wrapper">
        <animation-card v-for="card in animationCards"
                        class="classes__card"
                        :class="[`card--${card.id}`]"
                        :title="card.title"
                        :background="card.background"
                        :image-desktop="card.imageDesktop"
                        :image-mobile="card.imageMobile"
                        :image-alt="card.imageAlt"
                        :image-width="card.imageWidth"
                        :image-height="card.imageHeight"
                        :icon="card.icon"
                        :icon-width="card.iconWidth"
                        :icon-height="card.iconHeight"
        />
        <info-card-with-image v-for="card in infoCards"
                              class="classes__card"
                              :class="[`card--${card.id}`]"
                              :image-desktop="card.imageDesktop"
                              :image-mobile="card.imageMobile"
                              :image-alt="card.imageAlt"
                              :image-width="card.imageWidth"
                              :image-height="card.imageHeight"
                              :title="card.title" />
      <span class="classes__add-info">Ребёнка можно привести и&nbsp;забрать в&nbsp;удобное время</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.classes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  @include tablet {
    padding-top: 44px;
    gap: 60px;
  }
  @include desktop {
    padding-top: 0;
    margin-top: -4px;
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
  &__card {
    width: 100%;
  }
  &__add-info {
    width: 100%;
    padding: 24px 20px;
    border-radius: 20px;
    background: $violet;
    color: $violet-light;
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    @include tablet {
      padding: 40px;
      width: 527px;
      color: $white;
      font-size: 2.5rem;
      transform: translateY(8%);
    }
    @include desktop {
      padding-bottom: 24px;
      width: 504px;
      transform: translate(13%, -411%);
    }
  }
}
.card--1 {
  height: 410px;
  :deep(.card__image) {
    width: 262px;
    height: 303px;
    top: 0;
    left: 0;
    border-radius: 20px;
  }
  :deep(.card__info) {
    width: 323px;
    padding: 20px;
    z-index: 1;
    margin-top: auto;
    margin-left: auto;
    transform: translateY(-76%);
  }
  :deep(.card__icon) {
    right: 20px;
    bottom: 0;
    rotate: 16deg;
    z-index: 2;
  }
  @include tablet {
    height: 573px;
    :deep(.card__image) {
      width: 434px;
      height: 406px;
    }
    :deep(.card__info) {
      width: 568px;
      padding: 40px;
      transform: translateY(-26%);
    }
    :deep(.card__icon) {
      width: 119px;
      height: 140px;
      right: 0;
      bottom: -36px;
      rotate: -12.2deg;
    }
  }
  @include desktop {
    width: 664px;
    height: 573px;
    justify-self: flex-end;
    transform: translate(-3.5%, -18%);
    :deep(.card__image) {
      width: 396px;
      height: 407px;
    }
    :deep(.card__info) {
      width: 508px;
      transform: translateY(-26%);
    }
    :deep(.card__icon) {
      right: -30px;
    }
  }
}
.card--2 {
  height: 299px;
  grid-row: 2;
  background: $green;
  padding-top: 20px;
  :deep(.card__img-wrapper) {
    width: 327px;
    height: 203px;
  }
  @include tablet {
    width: 424px;
    height: 456px;
    :deep(.card__img-wrapper) {
      width: 392px;
      height: 312px;
    }
  }
  @include desktop {
    background: $orange;
    transform: translate(7%, -56%);
  }
}
.card--3 {
  height: 339px;
  :deep(.card__image) {
    width: 262px;
    height: 303px;
    top: 0;
    left: 0;
    border-radius: 20px;
  }
  :deep(.card__info) {
    width: 323px;
    padding: 20px;
    z-index: 1;
    margin-top: auto;
    margin-left: auto;
  }
  @include tablet {
    height: 573px;
    :deep(.card__image) {
      width: 434px;
      height: 406px;
    }
    :deep(.card__info) {
      width: 568px;
      padding: 40px;
      z-index: 1;
      transform: translateY(-26%);
    }
  }
  @include desktop {
    width: 664px;
    height: 573px;
    justify-self: flex-end;
    transform: translate(-2.5%, -81%);
    :deep(.card__image) {
      width: 396px;
      height: 407px;
    }
    :deep(.card__info) {
      width: 508px;
      transform: translateY(-23%);
    }
  }
}
.card--4 {
  height: 324px;
  :deep(.card__image) {
    width: 320px;
    height: 230px;
    top: 10px;
    left: 14px;
    border-radius: 20px;
    rotate: 4deg;
    object-position: center top;
  }
  :deep(.card__info) {
    z-index: 1;
    margin-top: auto;
    margin-left: auto;
  }
  @include tablet {
    height: 636px;
    :deep(.card__image) {
      width: 691px;
      height: 490px;
      top: 0;
      left: 0;
      rotate: 0deg;
    }
    :deep(.card__info) {
      width: 575px;
      background: $blue;
      transform: translateY(-47%);
    }
  }
  @include desktop {
    width: 867px;
    height: 591px;
    transform: translate(1%, -100%);
    :deep(.card__info) {
      width: 456px;
      background: $red-main;
      transform: translateY(-32%);
    }
  }
}
.card--5 {
  height: 298px;
  :deep(.card__image) {
    width: 238px;
    height: 238px;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  :deep(.card__info) {
    z-index: 1;
    margin-bottom: auto;
  }
  :deep(.card__icon) {
    top: 58px;
    left: 16px;
    rotate: -12deg;
    z-index: 3;
  }
  @include tablet {
    height: 365px;
    :deep(.card__image) {
      width: 365px;
      height: 365px;
    }
    :deep(.card__info) {
      width: 402px;
      transform: translateY(64%);
    }
    :deep(.card__icon) {
      width: 119px;
      height: 128px;
      top: 15px;
      left: -10px;
      rotate: -11.18deg;
    }
  }
  @include desktop {
    width: 1020px;
    height: 424px;
    justify-self: center;
    transform: translate(-2%, -147%);
    :deep(.card__image) {
      width: 424px;
      height: 424px;
    }
    :deep(.card__info) {
      width: 696px;
      transform: translateY(118%);
    }
    :deep(.card__icon) {
      top: 65px;
      left: -50px;
      rotate: -11.18deg;
    }
  }
}
</style>