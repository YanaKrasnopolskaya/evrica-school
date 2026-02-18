<script setup lang="ts">
import InfoCardWithBgAndIcon from "~/entities/cards/ui/InfoCardWithBgAndIcon.vue";
import {PROGRAM_DATA} from "~/widgets/school-page/program";
</script>

<template>
  <section class="program">
    <h2 class="program__title">Академическая программа</h2>
    <div class="program__cards-wrapper">
      <info-card-with-bg-and-icon v-for="(card, index) in PROGRAM_DATA"
                                  :class="[`card--${card.id}`]"
                                  :key="index"
                                  :title="card.title"
                                  :description="card.description"
                                  :background="card.background"
                                  :icon="card.icon"
                                  :icon-width="card.iconWidth"
                                  :icon-height="card.iconHeight"
      />
      <div class="program__img-wrapper">
        <img class="program__img" src="/images/mobile/32-image.webp" alt="Академическая программа изображение" loading="lazy" width="328" height="384">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.program {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 46px;
  @include tablet {
    gap: 85px;
    margin-bottom: 110px;
  }
  @include desktop {
    gap: 86px;
    margin-bottom: 120px;
  }
  &__title {
    @include desktop {
      width: 958px;
    }
  }
  &__cards-wrapper {
    position: relative;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 0;
    grid-template-columns: repeat(1, 1fr);

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }
    @include desktop {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  &__img-wrapper {
    position: relative;
    width: 328px;
    height: 384px;
    border-radius: 20px;
    overflow: hidden;
    rotate: 3deg;
    grid-row: 2;
    transform: translateY(-2%);
    @include tablet {
      grid-row: 1;
      grid-column: 2;
      width: 348px;
      height: 400px;
      transform: translateY(0);
      z-index: -1;
    }
    @include desktop {
      transform: translate(-2%, -9%);
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-position: 68% center;
  }
}
.card--1,
.card--2 {
  :deep(.card__icon-wrapper) {
    transform: translate(13%, -38%);
  }
}
.card--1 {
  @include tablet {
    z-index: 1;
    transform: translateX(1%);
    :deep(.card__icon-wrapper) {
      rotate: 14.87deg;
      transform: translate(-30%, -33%);
    }
    :deep(.card__icon) {
      width: 148px;
      height: 112px;
    }
  }
  @include desktop {
    transform: translateX(-2%);
  }
}
.card--2 {
  rotate: -3deg;
  z-index: 1;
  transform: translateY(-2%);
  @include tablet {
    transform: translate(1%, -1%);
    :deep(.card__description) {
      width: 250px;
    }
    :deep(.card__icon-wrapper) {
      z-index: 3;
      rotate: -13deg;
      transform: translate(210%, 10%);
    }
    :deep(.card__icon) {
      width: 115px;
      height: 110px;
    }
  }
  @include desktop {
    transform: translate(-11%, -9%);
    z-index: 1;
    :deep(.card__icon-wrapper) {

      rotate: -13deg;
      transform: translate(-40%, -45%);
    }
    :deep(.card__icon) {
      z-index: 3;
    }
  }
}
.card--3 {
  z-index: 1;
  transform: translateY(-4%);
  @include tablet {
    z-index: 0;
    transform: translate(-2%, -2%);
  }
  @include desktop {
    grid-column: 3;
    grid-row: 1;
    transform: translate(-7%, 0.5%);
    z-index: 2;
  }
}
</style>