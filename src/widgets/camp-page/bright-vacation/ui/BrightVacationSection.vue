<script setup lang="ts">
import {InfoCardWithImage} from "~/entities/cards";
import {ArrowButton} from "~/shared/ui/button";
import {BRIGHT_VACATION_DATA} from "~/widgets/camp-page/bright-vacation";
</script>

<template>
  <section class="bright-vacation">
    <h2 class="bright-vacation__title">Для тех, кто хочет яркие&nbsp;каникулы</h2>
    <div class="bright-vacation__cards-wrapper bright-vacation__cards-wrapper--top">
      <NuxtLink
          class="bright-vacation__link"
          v-for="card in BRIGHT_VACATION_DATA.slice(0, 4)"
      >
        <info-card-with-image
            class="card"
            :class="`card--${card.id}`"
            :image-mobile="card.imageMobile"
            :image-alt="card.imageAlt"
            :image-width="card.imageWidth"
            :image-height="card.imageHeight"
            :description="card.description"
            :title="card.title"
            :add-text="card.addText"
        >
          <template #card-feature>
            <arrow-button class="card__btn" />
          </template>
        </info-card-with-image>
      </NuxtLink>
    </div>
    <div class="bright-vacation__cards-wrapper bright-vacation__cards-wrapper--bottom">
      <info-card-with-image v-for="card in BRIGHT_VACATION_DATA.slice(4)"
          class="card"
          :class="`card--${card.id}`"
          :image-desktop="card.imageDesktop"
          :image-mobile="card.imageMobile"
          :image-alt="card.imageAlt"
          :image-width="card.imageWidth"
          :image-height="card.imageHeight"
          :description="card.description"
          :title="card.title"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.bright-vacation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  margin-bottom: 60px;
  @include tablet {
    gap: 60px;
    margin-bottom: 128px;
  }
  @include desktop {
    margin-bottom: 115px;
  }
  &__title {
    color: $blue;
    @include tablet {
      color: $red-main;
    }
  }
  &__cards-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @include tablet {
      width: 445px;
      padding: 0 10px;
      gap: 24px;
    }
    @include desktop {
      width: 100%;
      flex-direction: row;
      gap: 22.5px;
    }
  }
  &__cards-wrapper--top {
    @include tablet {
      display: none;
    }
  }
  &__cards-wrapper--bottom {
    display: none;
    @include tablet {
      display: flex;
    }
  }
}
.card {
  padding: 16px 16px 32px;
  gap: 24px;
  :deep(.card__info) {
    align-items: flex-start;
  }
  :deep(.card__description) {
    text-align: left;
    font-size: 1.25rem;
  }
  :deep(.card__title) {
    text-align: left;
  }
  :deep(.card__img-wrapper) {
    width: 311px;
    height: 274px;
  }
  &__btn {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
  }
  @include tablet {
    :deep(.card__img-wrapper) {
      width: 393px;
      height: 297px;
    }
    :deep(.card__info) {
      padding-left: 8px;
    }
    :deep(.card__description) {
      font-size: 1.375rem;
    }
  }
}
.card--1 {
  background: $blue;
  :deep(.card__add-text) {
    color: $blue-light;
  }
}
.card--2 {
  background: $orange;
  :deep(.card__add-text) {
    color: $orange-light;
  }
}
.card--3 {
  background: $green;
  :deep(.card__add-text) {
    color: $green-light;
  }
}
.card--4 {
  background: $azure;
  :deep(.card__add-text) {
    color: $azure-light;
  }
}
.card--5 {
  background: $violet;
  @include tablet {
    :deep(.card__img) {
      transform: scale(1.15) translateY(-4%);
      object-position: -52% center;
    }
  }
}
.card--6 {
  background: $azure;
  @include tablet {
    padding-bottom: 20px;
    :deep(.card__img) {
      transform: scale(1);
      object-position: left center;
    }
  }
  @include desktop {
    padding-bottom: 32px;
  }
}
.card--7 {
  background: $red-main;
  @include tablet {
    padding-bottom: 20px;
  }
  @include desktop {
    padding-bottom: 32px;
  }
}
</style>