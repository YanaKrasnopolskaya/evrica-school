<script setup lang="ts">
import {DEVELOPMENT_PATH_DATA} from "~/widgets/home-page/development-path/model/DEVELOPMENT_PATH_DATA";
import {InfoCardWithImage} from "~/entities/cards";
import {ArrowButton} from "~/shared/button";
</script>

<template>
  <section class="dev-path">
    <h2 class="dev-path__title">Путь развития с&nbsp;нами</h2>
    <div class="dev-path__cards-wrapper" >
      <NuxtLink class="dev-path__link" v-for="(card) in DEVELOPMENT_PATH_DATA" :to="`/${card.page}`" :key="card.page">
        <info-card-with-image class="card"
                              :class="`card--${card.page}`"
                              :image-desktop="card.image.desktop.src"
                              :image-mobile="card.image.mobile.src"
                              :image-alt="card.image.mobile.alt"
                              :image-width="card.image.mobile.width"
                              :image-height="card.image.mobile.height"
                              :card-description="card.description">
          <template #card-feature>
            <arrow-button class="card__btn"/>
          </template>
          <template #card-title><h3 class="card__title">{{ card.title }}</h3></template>
        </info-card-with-image>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.dev-path {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 60px;
  @include tablet {
    gap: 60px;
    margin-bottom: 100px;
  }
  @include desktop {
    margin-bottom: 120px;
  }
  &__cards-wrapper {
    display: grid;
    gap: 20px;
    @include desktop {
      grid-template-columns: repeat(3, 1fr);
      gap: 22px 22.5px;
    }
  }
  &__link:last-child {
    @include desktop {
      grid-column: span 3;
      width: 100%;
    }
  }
}
.card {
  padding: 16px 16px 32px;
  gap: 24px;
  @include tablet {
    width: 476px;
  }
  @include desktop {
    width: 427px;
    height: 473px;
  }
  :deep(.card__info) {
    align-items: flex-start;
  }
  :deep(.card__description) {
    font-size: 1.25rem;
    text-align: left;
  }
  :deep(.card__img-wrapper) {
    width: 100%;
    height: 274px;
    @include tablet {
      width: 444px;
    }
    @include desktop {
      width: 393px;
      height: 297px;
    }
  }
  &__title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    @include desktop {
      font-size: 2.5rem;
    }
  }
  &__btn {
    position: absolute;
    top: -8px;
    right: 0;
    border: 2.35px solid $white;
    width: 40px;
    height: 40px;
    @include tablet {
      top: -5px;
    }
  }
}
.card--school {
  background: $azure;
  padding-bottom: 24px;
  :deep(.card__img) {
    object-position: right center;
  }
}
.card--after-school {
  background: $orange;
  padding-bottom: 24px;
}
.card--camp {
  background: $green;
  padding-bottom: 24px;
  @include desktop {
    height: 490px;
    width: 100%;
  }
  :deep(.card__description) {
    @include tablet {
      width: 380px;
    }
  }
}
</style>