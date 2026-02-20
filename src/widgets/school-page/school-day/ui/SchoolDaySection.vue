<script setup lang="ts">
import {AnimationCard, InfoCardWithImage} from "~/entities/cards";
import {SCHOOL_DAY_DATA} from "~/widgets/school-page/school-day";
</script>

<template>
  <div class="school-day" >
    <h2 class="school-day__title">Как&nbsp;проходит&nbsp;день в&nbsp;нашей&nbsp;школе с&nbsp;9:00&nbsp;до&nbsp;18:00</h2>
    <template v-for="card in SCHOOL_DAY_DATA">
      <animation-card v-if="card.type === 'animation'"
                      class="card"
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
                      :title="card.title"
      >
        <template #additional-content>
          <span class="card__time" v-html="card.additionalContent"></span>
        </template>
      </animation-card>
      <div v-if="card.type === 'info'" class="card-wrapper">
        <info-card-with-image class="card"
                              :class="[`card--${card.id}`]"
                              :image-desktop="card.imageDesktop"
                              :image-mobile="card.imageMobile"
                              :image-alt="card.imageAlt"
                              :image-width="card.imageWidth"
                              :image-height="card.imageHeight"
                              :title="card.title"
                              :description="card.description"
                              :additional-content="card.additionalContent"
        >
          <template #card-feature>
            <span class="card__time" v-html="card.additionalContent"></span>
            <div class="card__info">
              <span class="card__info-title">Домашняя еда</span>
              <span class="card__info-description">Можно приносить еду из&nbsp;дома&nbsp;&mdash; в&nbsp;школе есть&nbsp;холодильник и&nbsp;микроволновка</span>
              <svg class="card__icon" width="47" height="65" aria-hidden="true">
                <use href="/sprite/sprite.svg#icon_paper-clip-orange"></use>
              </svg>
            </div>
          </template>
        </info-card-with-image>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.school-day {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  @include tablet {
    padding-top: 44px;
    gap: 60px;
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
      grid-row: 1;
      grid-column: 1;
      width: 563px;
    }
  }
}
.card-wrapper {
  width: 350px;
  height: 474px;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 38px 0;
  @include tablet {
    padding: 0;
    transform: translateY(-1%);
  }
}
.card {
  :deep(.card__image) {
    border-radius: 20px;
  }
  &__time {
    position: absolute;
    padding: 14.5px 16px;
    display: block;
    border-radius: 32px;
    background: $violet;
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    color: $white;
    transform: translate(160%, -105%);
    @include tablet {
      font-size: 1.25rem;
      padding: 12px 16px;
      transform: translate(285%, -118%);
    }
    @include desktop {
      transform: translate(238%, -118%);
    }
  }
  &__info {
    width: 343px;
    position: absolute;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    rotate: -4deg;
    background: $orange-light;
    transform: translate(-2.5%, 99%);
    @include tablet {
      padding: 40px;
      width: 527px;
      transform: translate(30%, 90%);
    }
    @include desktop {
      padding: 40px 40px 30px;
      width: 504px;
      rotate: -3deg;
      gap: 30px;
      transform: translate(47%, 96%);
    }
  }
  &__info-title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $orange;
    @include tablet {
      font-size: 2.5rem;
    }
  }
  &__info-description {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    color: $orange;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__icon {
    position: absolute;
    transform: translate(610%, -36%);
    @include tablet {
      width: 70px;
      height: 90px;
      transform: translate(595%, -10%);
      rotate: -10deg;
    }
    @include desktop {
      transform: translate(570%, 0%);
      rotate: -12deg;
    }
  }
}
.card--1 {
  width: 343px;
  height: 422px;
  :deep(.card__icon) {
    display: none;
    @include tablet {
      display: block;
    }
    @include desktop {
      display: none;
    }
  }
  :deep(.card__image) {
    top: 18px;
    left: 0;
  }
  :deep(.card__info) {
    width: 323px;
    margin-top: auto;
    margin-left: auto;
    z-index: 1;
    transform: translateY(14%);
    gap: 24px;
    padding: 20px;
  }
  @include tablet {
    width: 728px;
    height: 573px;
    :deep(.card__image) {
      width: 434px;
      height: 406px;
      top: 0;
      object-position: left center;
    }
    :deep(.card__info) {
      padding: 40px;
      width: 568px;
      transform: translateY(2%);
    }
    :deep(.card__icon) {
      z-index: 2;
      bottom: -24px;
      right: 0;
      rotate: -12.2deg;
    }
  }
  @include desktop {
    grid-row: 1;
    grid-column: 2;
    transform: translate(-23%, 5%);
    :deep(.card__image) {
      width: 395px;
    }
    :deep(.card__info) {
      width: 508px;
      transform: translate(-12.5%, 3%);
    }
  }
}
.card--2 {
  width: 343px;
  height: 340px;
  background: $orange;
  justify-content: flex-start;
  :deep(.card__img-wrapper) {
    width: 327px;
    height: 203px;
  }
  :deep(.card__img) {
    transform: scale(1.1);
    object-position: 67% center;
  }
  .card__time {
    transform: translate(82%,-578%);
    background: $orange-light;
    color: $orange;
  }
  @include tablet {
    width: 424px;
    height: 514px;
    padding: 16px 16px 22px;
    :deep(.card__img-wrapper) {
      width: 100%;
      height: 310px;
    }
    :deep(.card__img) {
      transform: scale(1);
      object-position: center center;
    }
    :deep(.card__info) {
      gap: 20px;
    }
  }
  @include desktop {
    grid-row: 2;
    grid-column: 1;
    transform: translate(4%, -13%);
    .card__time {
      transform: translate(156%,-100%);
    }
  }
}
.card--3 {
  width: 343px;
  height: 370px;
  transform: translateY(15%);
  .card__time {
    transform: translate(165%, -110%);
    background: $green;
  }
  :deep(.card__image) {
    bottom: 0;
    right: 8px;
    width: 174px;
    height: 174px;
    object-position: 90% center;
    rotate: -6deg;
  }
  @include tablet {
    width: 728px;
    height: 408px;
    transform: translateY(47%);
    .card__time {
      transform: translate(291%, -97%);
    }
    :deep(.card__info) {
      width: 604px;
    }
    :deep(.text-wrap) {
      display: block;
    }
    :deep(.card__image) {
      bottom: -18px;
      right: 0;
      width: 240px;
      height: 240px;
      object-position: 98% center;
      rotate: 0deg;
    }
  }
  @include desktop {
    grid-column: span 2;
    grid-row: 3;
    transform: translate(72%, 33%);
    :deep(.text-wrap) {
      display: inline;
    }
    :deep(.card__image) {
      bottom: -10px;
      right: -17px;
    }
  }
}
.card--4 {
  width: 343px;
  height: 399px;
  transform: translateY(22%);
  :deep(.card__image) {
    top: 0;
    left: 15px;
    rotate: 4deg;
    height: 230px;
  }
  :deep(.card__info) {
    gap: 16px;
    margin-top: auto;
    z-index: 1;
  }
  .card__time {
    background: $blue-light;
    color: $blue;
    transform: translate(168%, -115%);
  }
  @include tablet {
    width: 728px;
    height: 636px;
    transform: translateY(33%);
    :deep(.card__info) {
      width: 575px;
      margin-left: auto;
      gap: 24px;
      transform: translateY(4%);
    }
    :deep(.card__image) {
      top: 0;
      left: 0;
      rotate: 0deg;
      width: 690px;
      height: 489px;
    }
    .card__time {
      transform: translate(273%, -150%);
    }
  }
  @include desktop {
    grid-column: 1;
    grid-row: 4;
    transform: translate(2%, 3%);
    :deep(.card__info) {
      width: 456px;
      transform: translate(31%, -14%);
    }
    .card__time {
      transform: translate(182%, -120%);
    }
  }
}
.card--5 {
  width: 343px;
  height: 390px;
  transform: translateY(25%);
  :deep(.card__info) {
    gap: 16px;
  }
  :deep(.card__image) {
    bottom: 0;
    right: 0;
  }
  .card__time {
    background: $blue;
    color: $white;
    transform: translate(168%, -115%);
  }
  @include tablet {
    width: 728px;
    height: 365px;
    transform: translateY(70%);
    :deep(.card__info) {
      width: 402px;
      gap: 24px;
    }
    :deep(.card__image) {
      width: 365px;
      height: 365px;
      bottom: 45px;
    }
    .card__time {
      transform: translate(0, -115%);
    }
  }
  @include desktop {
    grid-column: span 2;
    grid-row: 5;
    transform: translate(18.5%, 24%);
    .card__time {
      transform: translate(-38%, -118%);
    }
    :deep(.card__info) {
      width: 696px;
      gap: 24px;
    }
    :deep(.card__image) {
      width: 424px;
      height: 424px;
      bottom: 33px;
      right: -290px;
    }
  }
}
</style>