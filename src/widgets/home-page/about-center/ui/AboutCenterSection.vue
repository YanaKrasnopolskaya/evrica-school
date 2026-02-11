<script setup lang="ts">
import {AnimationCard, InfoCardWithImage} from "~/entities/cards";
import {ABOUT_CENTER_DATA} from "~/widgets/home-page/about-center";
</script>

<template>
  <div class="about-center">
    <h2 class="about-center__title">Центр, где&nbsp;интересно расти</h2>
    <div class="about-center__cards-wrapper" >
      <template v-for="(card, index) in ABOUT_CENTER_DATA" :key="index">
        <animation-card v-if="card.type === 'animation'"
                        class="about-center__card"
                        :class="[ `about-center__card--item-${card.id}` ]"
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
        >
        </animation-card>
        <info-card-with-image v-if="card.type === 'info'"
                              class="about-center__card"
                              :class="[ `about-center__card--item-${card.id}` ]"
                              :image-desktop="card.imageDesktop"
                              :image-mobile="card.imageMobile"
                              :image-alt="card.imageAlt"
                              :image-width="card.imageWidth"
                              :image-height="card.imageHeight"
                              :card-description="card.description" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-center {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 38px;
  @include tablet {
    gap: 60px;
  }
  &__title {
    width: 100%;
    text-align: left;
    @include tablet {
      width: 600px;
    }
    @include desktop {
      width: 421px;
    }
  }
  &__cards-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @include tablet {
      gap: 60px;
    }
  }
}
.about-center__card--item-1 {
  height: 394px;
  @include tablet {
    width: 604px;
    height: 408px;
  }
  @include desktop {
    position: absolute;
    top: 70px;
    right: 16%;
  }
  :deep(.card__icon) {
    top: -50px;
    right: 22px;
    rotate: 14.68deg;
    @include tablet {
      top: -65px;
      right: -16px;
      width: 115px;
      height: 110px;
      rotate: 9.67deg;
    }
    @include desktop {
      top: -55px;
      right: -40px;
    }
  }
  :deep(.card__info-description) {
    width: 280px;
    @include tablet {
      width: 524px;
    }
  }
  :deep(.card__image) {
    bottom: 63px;
    right: 10px;
    border-radius: 20px;
    rotate: -6deg;
    @include tablet {
      bottom: 0;
      right: -124px;
      width: 240px;
      height: 240px;
      rotate: 0deg;
    }
    @include desktop {
      bottom: -3px;
      right: -145px;
    }
  }
}
.about-center__card--item-2 {
  height: 431px;
  flex-direction: column-reverse;
  justify-content: flex-end;
  @include tablet {
    height: 573px;
  }
  :deep(.card__icon) {
    z-index: 2;
    bottom: 25px;
    right: 22px;
    rotate: 16deg;
    @include tablet {
      width: 119px;
      height: 128px;
      bottom: -30px;
      right: 0;
      rotate: -12.2deg;
    }
  }
  :deep(.card__info) {
    padding: 20px;
    width: 323px;
    position: absolute;
    right: 0;
    bottom: 90px;
    z-index: 1;
    @include tablet {
      bottom: 38px;
      padding: 40px;
      width: 568px;
    }
  }
  :deep(.card__image) {
    border-radius: 20px;
    @include tablet {
      width: 434px;
      height: 406px;
    }
  }
}
.about-center__card--item-3 {
  background: $orange;
  @include tablet {
    padding: 10px 16px 22px;
    width: 424px;
    height: 428px;
    margin-top: -6px;
  }
  :deep(.card__img-wrapper) {
    width: 327px;
    height: 203px;
    @include tablet {
      width: 392px;
      height: 312px;
    }
  }
}
.about-center__card--item-4 {
  height: 354px;
  @include tablet {
    height: 408px;
  }
  :deep(.card__info) {
    @include tablet {
      width: 604px;
      margin-top: 16px;
    }
  }
  :deep(.card__info-description) {
    @include tablet {
      width: 510px;
    }
  }
  :deep(.card__word) {
    display: block;
    @include tablet {
      display: inline;
    }
  }
  :deep(.card__image) {
    width: 174px;
    height: 174px;
    bottom: 4px;
    right: 10px;
    border-radius: 20px;
    rotate: -6deg;
    @include tablet {
      width: 240px;
      height: 240px;
      rotate: 0deg;
      right: 0;
    }
  }
}
.about-center__card--item-5 {
  height: 354px;
  justify-content: center;
  @include tablet {
    height: 365px;
  }
  :deep(.card__info) {
    @include tablet {
      width: 402px;
    }
  }
  :deep(.card__image) {
    width: 238px;
    height: 238px;
    bottom: 0;
    right: 0;
    @include tablet {
      width: 365px;
      height: 365px;
    }
  }
}
</style>