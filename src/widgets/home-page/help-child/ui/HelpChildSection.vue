<script setup lang="ts">
import { InfoCardWithIcon } from '~/entities/cards';
import {HELP_CHILD_DATA} from "~/widgets/home-page/help-child";
</script>

<template>
  <section class="help">
    <h2 class="help__title">
      Помогаем ребёнку<br />
      понимать мир и&nbsp;себя
    </h2>
    <div class="help__cards-wrapper">
      <info-card-with-icon v-for="card in HELP_CHILD_DATA"
                           class="card"
                           :class="[`card--${card.id}`]"
                           :icon="card.icon"
                           :icon-width="card.iconWidth"
                           :icon-height="card.iconHeight"
                           :description="card.description"
                           :color="card.color"
                           :title="card.title"
      />
      <div class="help__img-wrapper">
        <picture>
          <source
            srcset="/images/desktop/2-image.webp"
            type="image/webp"
            media="(min-width: 768px)"
          />
          <img
            class="help__img"
            src="/images/mobile/2-image.webp"
            alt="Логотип Эврика"
            width="408"
            height="272"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.help {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  margin-bottom: 60px;
  @include tablet {
    gap: 80px;
    margin-bottom: 100px;
  }
  @include desktop {
    margin-bottom: 120px;
  }
  &__cards-wrapper {
    display: grid;
    grid-template-columns: repeat(1, auto);
    gap: 20px;
    @include tablet {
      grid-template-columns: 429px 279px;
      grid-template-rows: repeat(2, auto);
      gap: 24px 20px;
    }
    @include desktop {
      grid-template-columns: 424px 200px 200px 424px;
      grid-template-rows: repeat(1, auto);
      gap: 24px;
    }
  }
  &__img-wrapper {
    overflow: hidden;
    border-radius: 16px;
    width: 100%;
    height: 272px;
    grid-row: 3;
    @include tablet {
      width: 279px;
      grid-row: 2;
      grid-column: 1;
    }
    @include desktop {
      width: 200px;
      grid-row: 1;
      grid-column: 3;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
  }
}
.card {
  width: 100%;
  @include tablet {
    height: 272px;
  }
}
.card--1 {
  @include tablet {
    grid-row: 1;
    grid-column: 1;
    :deep(.card__icon) {
      width: 115px;
      height: 142px;
    }
  }
}
.card--2 {
  @include tablet {
    grid-row: 1;
    grid-column: 2;
    :deep(.card__icon) {
      width: 148px;
      height: 112px;
    }
  }
}
.card--3 {
  @include tablet {
    grid-row: 2;
    grid-column: 2;
    width: 429px;
    transform: translateX(-35%);
    :deep(.card__icon) {
      width: 119px;
      height: 140px;
    }
  }
  @include desktop {
    grid-row: 1;
    grid-column: 4;
    transform: translateX(0);
  }
}
</style>
