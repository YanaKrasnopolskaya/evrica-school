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
                              :card-title="card.title"
                              :card-description="card.description"
                              :additional-content="card.additionalContent"
        >
          <template #card-feature>
            <span class="card__time" v-html="card.additionalContent"></span>
            <div class="card__info">
              <span class="card__info-title">Домашняя еда</span>
              <span class="card__info-description">Можно приносить еду из&nbsp;дома&nbsp;&mdash; в&nbsp;школе есть холодильник и&nbsp;микроволновка</span>
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
}
.card-wrapper {
  width: 350px;
  height: 474px;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 38px 0;
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
      font-size: 1.25rem;
    }
  }
  &__icon {
    position: absolute;
    transform: translate(610%, -36%);
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
}
.card--2 {
  width: 343px;
  height: 340px;
  background: $orange;
  justify-content: flex-start;
  .card__time {
    transform: translate(82%,-578%);
    background: $orange-light;
    color: $orange;
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
    right: 0;
  }
}
.card--4 {
  width: 343px;
  height: 399px;
}
.card--5 {
  width: 343px;
  height: 390px;
}
</style>