<script setup lang="ts">
import InfoCardWithBgAndIcon from "~/entities/cards/ui/InfoCardWithBgAndIcon.vue";
import {RHYTHM_DATA} from "~/widgets/kids-club-page/rhythm";
</script>

<template>
  <section class="rhythm">
    <h2 class="rhythm__title">Свой ритм отдыха&nbsp;&mdash; без&nbsp;принуждения</h2>
    <div class="rhythm__cards-wrapper">
      <info-card-with-bg-and-icon v-for="(card, index) in RHYTHM_DATA"
                                  :class="[`card--${card.id}`]"
                                  :key="index"
                                  :title="card.title"
                                  :description="card.description"
                                  :background="card.background"
                                  :icon="card.icon"
                                  :icon-width="card.iconWidth"
                                  :icon-height="card.iconHeight"
                                  :content="false"
      />
      <div class="rhythm__img-wrapper rhythm__img-wrapper--top">
        <img class="rhythm__img" src="/images/mobile/24-image.png" alt="малыши изображение" loading="lazy" width="328" height="384">
      </div>
      <div class="rhythm__img-wrapper rhythm__img-wrapper--bottom">
        <img class="rhythm__img" src="/images/mobile/25-image.png" alt="ребята изображение" loading="lazy" width="328" height="384">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.rhythm {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 4px;
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
      width: 162px;
      height: 126px;
    }
  }
  @include desktop {
    transform: translateX(-2%);
  }
}
.card--2 {
  transform: translateY(-4.5%);
  @include tablet {
    z-index: 2;
    transform: translate(-2%, -2%);
    :deep(.card__icon-wrapper) {
      rotate: 14.87deg;
    }
    :deep(.card__icon) {
      width: 140px;
      height: 135px;
    }
  }
  @include desktop {
    transform: translate(-7%, 0);
  }
}
.rhythm__img-wrapper--top {
  rotate: 3deg;
  transform: translateY(-6.5%);
  .rhythm__img {
    transform: scale(1.06);
    object-position: left top;
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
.rhythm__img-wrapper--bottom {
  rotate: -3deg;
  transform: translateY(-6.5%);
  .rhythm__img {
    object-position: center 70%;
  }
  @include tablet {
    grid-row: 2;
    grid-column: 1;
    transform: translate(3%, 0);
    .rhythm__img {
      transform: scale(1.1);
    }
  }
  @include desktop {
    grid-row: 1;
    grid-column: 4;
    transform: translate(-14%, -9%);
    .rhythm__img {
      object-position: center 70%;
    }
  }
}
</style>