<script setup lang="ts">
import {
  CardRole,
  DEVELOPMENT_PATH_DATA,
} from '~/widgets/home-page/development-path/model/DEVELOPMENT_PATH_DATA';
import { InfoCardWithImage } from '~/entities/cards';
import { ArrowButton } from '~/shared/ui/button';
</script>

<template>
  <section class="dev-path">
    <h2 class="dev-path__title">Путь развития с&nbsp;нами</h2>
    <div class="dev-path__cards-wrapper">
      <NuxtLink
        class="dev-path__link"
        v-for="card in DEVELOPMENT_PATH_DATA"
        :to="`/${card.page.toLowerCase()}`"
        :key="card.page.toLowerCase()"
      >
        <info-card-with-image
          class="card"
          :class="`card--${card.page.toLowerCase()}`"
          :image-desktop="card.image.desktop.src"
          :image-mobile="card.image.mobile.src"
          :image-alt="card.image.mobile.alt"
          :image-width="card.image.mobile.width"
          :image-height="card.image.mobile.height"
          :card-description="card.description"
        >
          <template #image-left v-if="card.page === CardRole.Camp">
            <div class="card__additional-img-wrapper">
              <svg class="card__img-icon" width="43" height="64" aria-hidden="true">
                <use href="/sprite/sprite.svg#icon_paper-clip"></use>
              </svg>
              <img class="card__img" src="/images/desktop/6-image.webp" alt="лагерь изображение" />
            </div>
          </template>
          <template #image-right v-if="card.page === CardRole.Camp">
            <div class="card__additional-img-wrapper card__additional-img-wrapper--right">
              <svg
                class="card__img-icon card__img-icon--right"
                width="164"
                height="133"
                aria-hidden="true"
              >
                <use href="/sprite/sprite.svg#icon_film-white"></use>
              </svg>
              <img
                class="card__img card__img--right"
                src="/images/desktop/8-image.webp"
                alt="лагерь изображение"
              />
            </div>
          </template>
          <template #card-feature>
            <arrow-button class="card__btn" />
          </template>
          <template #card-title
            ><h3 class="card__title">{{ card.title }}</h3></template
          >
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
      gap: 22.5px 20px;
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
    padding: 16px 16px 28px;
    justify-content: flex-start;
    width: 427px;
    height: 473px;
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
    @include desktop {
      width: 52px;
      height: 52px;
      top: 2px;
      right: 9px;
    }
  }
  &__img-icon {
    position: absolute;
    z-index: 2;
    top: -33px;
    left: 26px;
    rotate: 7deg;
  }
  &__img-icon--right {
    left: auto;
    right: -117px;
    rotate: -7deg;
  }
  :deep(.card__images) {
    display: flex;
    align-items: flex-end;
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
  :deep(.card__img) {
    @include desktop {
      position: relative;
      object-position: -30px center;
      z-index: 1;
    }
  }
  :deep(.card__info) {
    align-items: flex-start;
    @include desktop {
      padding-left: 8px;
      gap: 14px;
    }
  }
  :deep(.card__description) {
    font-size: 1.25rem;
    text-align: left;
    @include desktop {
      font-size: 1.375rem;
    }
  }
}

.card--kids-club {
  :deep(.card__description) {
    @include desktop {
      width: 300px;
    }
  }
}

.card--school {
  background: $azure;
  padding-bottom: 24px;
  :deep(.card__img) {
    object-position: right center;
    @include desktop {
      object-position: center;
    }
  }
}

.card--after-school {
  background: $orange;
  padding-bottom: 24px;
  :deep(.card__img) {
    @include desktop {
      object-position: -50px center;
    }
  }
}

.card--camp {
  background: $green;
  padding-bottom: 24px;
  @include desktop {
    padding: 40px 16px;
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 60px;
    height: 490px;
    width: 100%;
    .card__btn {
      right: 0;
    }
  }
  :deep(.card__info) {
    @include desktop {
      gap: 18px;
      align-items: center;
    }
  }
  :deep(.card__description) {
    @include tablet {
      width: 380px;
    }
    @include desktop {
      width: 502px;
      text-align: center;
    }
  }
  :deep(.card__img-wrapper) {
    @include desktop {
      width: 300px;
      height: 221px;
    }
  }
}

.card__additional-img-wrapper {
  display: none;
  width: 232px;
  height: 194px;
  position: relative;
  rotate: -5.98deg;
  border-radius: 24px;
  @include desktop {
    display: block;
    top: 8px;
  }
  & .card__img {
    border-radius: 24px;
    object-position: center;
    height: 100%;
    z-index: 0;
  }
}
.card__additional-img-wrapper--right {
  rotate: 5.98deg;
}
</style>
