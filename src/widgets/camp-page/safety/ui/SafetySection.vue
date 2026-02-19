<script setup lang="ts">
import InfoCardWithBgAndIcon from "~/entities/cards/ui/InfoCardWithBgAndIcon.vue";
import {SAFETY_DATA} from "~/widgets/camp-page/safety";
</script>

<template>
  <section class="safety">
    <h2 class="safety__title">Безопасность ребёнка</h2>
    <div class="safety__cards-wrapper">
      <info-card-with-bg-and-icon v-for="card in SAFETY_DATA"
                                  :class="[`card--${card.id}`]"
                                  :key="card.id"
                                  :title="card.title"
                                  :description="card.description"
                                  :background="card.background"
                                  :icon="card.icon"
                                  :icon-width="card.iconWidth"
                                  :icon-height="card.iconHeight"
                                  :content="false"
      />
      <div class="safety__img-wrapper safety__img-wrapper--top">
        <img class="safety__img" src="/images/mobile/45-image.webp" alt="присмотр изображение" loading="lazy" width="363" height="430">
      </div>
      <div class="safety__img-wrapper safety__img-wrapper--bottom">
        <img class="safety__img" src="/images/mobile/46-image.webp" alt="правила изображение" loading="lazy" width="386" height="415">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.safety {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
  @include tablet {
    gap: 85px;
    margin-bottom: 100px;
  }
  @include desktop {
    gap: 86px;
    margin-bottom: 120px;
  }
  &__title {
    @include desktop {
      width: 958px;
    }
    @include desktop {
      width: fit-content;
    }
  }
  &__cards-wrapper {
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
    @include tablet {
      width: 348px;
      height: 400px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
  }
}
.card--1,
.card--2 {
  :deep(.card__icon-wrapper) {
    transform: translate(13%, -38%);
  }
  @include tablet {
    :deep(.card__icon-wrapper) {
      transform: translate(-30%, -33%);
    }
  }
}
.card--1 {
  @include tablet {
    z-index: 1;
    transform: translateX(1%);
    :deep(.card__icon-wrapper) {
      rotate: 14.87deg;
    }
    :deep(.card__icon) {
      width: 119px;
      height: 128px;
    }
  }
  @include desktop {
    transform: translateX(-2%);
  }
}
.card--2 {
  transform: translateY(-4.5%);
  grid-row: 3;
  z-index: 1;
  @include tablet {
    grid-row: 2;
    grid-column: 2;
    z-index: 2;
    transform: translate(-2%, -2%);
    :deep(.card__icon-wrapper) {
      rotate: 14.87deg;
    }
    :deep(.card__icon) {
      width: 115px;
      height: 110px;
    }
  }
  @include desktop {
    grid-row: 1;
    grid-column: 3;
    transform: translate(-7%, 0);
  }
}
.safety__img-wrapper--top {
  rotate: 3deg;
  transform: translateY(-2.5%);
  grid-row: 2;
  .safety__img {
    transform: scale(1.06);
    object-position: center top;
  }
  @include tablet {
    z-index: 0;
    grid-row: 1;
    grid-column: 2;
    transform: translateY(0);
  }
  @include desktop {
    transform: translate(-2%, -9%);
  }
}
.safety__img-wrapper--bottom {
  rotate: -3deg;
  transform: translateY(-6.5%);
  z-index: 2;
  .safety__img {
    transform: scale(1.25) translate(-10%, 10%);
  }
  @include tablet {
    grid-row: 2;
    grid-column: 1;
    z-index: 0;
    transform: translate(3%, 0);
  }
  @include desktop {
    grid-row: 1;
    grid-column: 4;
    transform: translate(-14%, -9%);
    .safety__img {
      object-position: center 70%;
    }
  }
}
</style>