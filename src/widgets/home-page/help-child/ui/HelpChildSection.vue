<script setup lang="ts">
import {InfoCardWithIcon} from "~/entities/cards";
</script>

<template>
  <section class="help">
    <h2 class="help__title">Помогаем ребёнку<br> понимать мир и&nbsp;себя</h2>
    <div class="help__cards-wrapper">
      <info-card-with-icon class="card"
                           icon="icon_globe"
                           description="Уже более 7&nbsp;лет мы&nbsp;рядом с&nbsp;детьми разных
                           возрастов&nbsp;&mdash; от&nbsp;первых шагов в&nbsp;детском саду до&nbsp;выпускных экзаменов">
        <template #title><h3 class="card__title">7&nbsp;лет вместе</h3></template>
      </info-card-with-icon>
      <info-card-with-icon class="card card--green-light"
                           icon="icon_film"
                           description="Современное пространство с&nbsp;оборудованием для&nbsp;творчества, науки и&nbsp;технологий">
      </info-card-with-icon>
      <div class="help__img-wrapper">
        <picture>
          <source
              srcset="/images/desktop/2-image.webp"
              type="image/webp"
              media="(min-width: 768px)"
          />
          <img
              class="help__img"
              src="/images/mobile/2-image.png"
              alt="Логотип Эврика"
              width="408"
              height="272"
          />
        </picture>
      </div>
      <info-card-with-icon class="card card--orange-light"
                           icon="icon_robot"
                           description="Мы&nbsp;учим через диалог&nbsp;&mdash;
                           вместе ищем ответы и&nbsp;помогаем ребёнку чувствовать уверенность и&nbsp;самостоятельность.">
        <template #title><h3 class="card__title">Поддерживаем</h3></template>
      </info-card-with-icon>
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 19px;
    justify-content: center;
    align-items: center;
    @include tablet {
      flex-direction: row;
      gap: 24px 20px;
    }
    @include desktop {
      gap: 24px;
    }
  }
  &__img-wrapper {
    overflow: hidden;
    border-radius: 16px;
    width: 100%;
    height: 272px;
    @include tablet {
      width: 279px;
    }
    @include desktop {
      width: 200px;
    }
  }
  &__img {
    width: 408px;
    height: 272px;
    @include tablet {
      object-position: -60px center;
    }
    @include tablet {
      object-position: center;
    }
  }
}
.card {
  width: 100%;
  height: 187px;
  border-color: $azure-light;
  @include tablet {
    width: 429px;
    height: 272px;
  }
  @include desktop {
    width: 424px;
  }
  &__title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $azure;
    @include tablet {
      font-size: 2.5rem;
    }
  }
}
.card--green-light {
  border-color: $green-light;
  height: 137px;
  :deep(.card__icon-wrapper) {
    padding: 0;
  }
  @include tablet {
    width: 279px;
    height: 272px;
  }
  @include desktop {
    width: 200px;
  }
}
.card--orange-light {
  border-color: $orange-light;
  @include desktop {
    padding-right: 20px;
  }
  .card__title {
    color: $orange;
  }
}
</style>
