<script setup lang="ts">
import { InfoCardWithIcon } from '~/entities/cards';
import {ADMISSION_DATA} from "~/widgets/school-page/admission";
</script>

<template>
  <section class="admission">
    <h2 class="admission__title admission__title--mb">
      Помогаем ребёнку<br />
      понимать мир и&nbsp;себя
    </h2>
    <h2 class="admission__title admission__title--dt">Поступление в несколько шагов</h2>
    <div class="admission__cards-wrapper">
      <info-card-with-icon v-for="card in ADMISSION_DATA"
                           class="card"
                           :class="[`card--${card.id}`]"
                           :icon="card.icon"
                           :icon-width="card.iconWidth"
                           :icon-height="card.iconHeight"
                           :description="card.description"
                           :color="card.color"
                           :title="card.title"
      />
      <div class="admission__img-wrapper">
        <picture>
          <source
              srcset="/images/desktop/33-image.webp"
              type="image/webp"
              media="(min-width: 768px)"
          />
          <img
              class="admission__img"
              src="/images/mobile/33-image.webp"
              alt="Логотип Эврика"
              width="408"
              height="272"
              loading="lazy"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.admission {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 58px;
  @include tablet {
    gap: 80px;
    margin-bottom: 100px;
  }
  @include desktop {
    margin-bottom: 120px;
  }
  &__title--mb {
    @include desktop {
      display: none;
    }
  }
  &__title--dt {
    display: none;
    @include desktop {
      display: block;
    }
  }
  &__cards-wrapper {
    display: grid;
    grid-template-columns: repeat(1, auto);
    gap: 40px;
    @include tablet {
      grid-template-columns: 279px 429px;
      grid-template-rows: repeat(2, auto);
      gap: 24px 20px;
      align-items: center;
    }
    @include desktop {
      grid-template-columns: repeat(4, 312px);
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
      width: 429px;
      height: 201px;
      grid-row: 2;
      grid-column: 1;
    }
    @include desktop {
      width: 312px;
      height: 272px;
      grid-row: 1;
      grid-column: 3;
    }
  }
  &__img {
    transform: scale(1.1);
    width: 100%;
    height: 100%;
    @include tablet {
      transform: scale(1);
      object-position: center 68%;
    }
    @include desktop {
      transform: scale(1.1);
    }
  }
}
.card {
  width: 100%;
  @include tablet {
    height: 188px;
  }
  @include desktop {
    width: 100%;
    height: 272px;
  }
}
.card--1 {
  @include tablet {
    grid-row: 1;
    grid-column: 1;
    :deep(.card__icon) {
      width: 119px;
      height: 140px;
    }
  }
}
.card--2 {
  @include tablet {
    grid-row: 1;
    grid-column: 2;
    :deep(.card__icon) {
      width: 115px;
      height: 110px;
    }
  }
}
.card--3 {
  @include tablet {
    grid-row: 2;
    grid-column: 2;
    width: 279px;
    transform: translateX(54%);
    height: 212px;
    :deep(.card__icon) {
      width: 115px;
      height: 142px;
    }
  }
  @include desktop {
    grid-row: 1;
    grid-column: 4;
    transform: translateX(0);
    width: 100%;
    height: 272px;
  }
}
</style>
