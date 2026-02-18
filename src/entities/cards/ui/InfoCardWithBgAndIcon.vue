<script setup lang="ts">
interface Card {
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  background: string;
  title: string;
  description?: string;
  content?: boolean;
  leftContent?: string;
  rightContent?: string;
}

defineProps<Card>();
</script>

<template>
  <div class="card" :class="[`card--${background}`]">
    <div v-if="icon" class="card__icon-wrapper">
      <svg class="card__icon" :width="iconWidth" :height="iconHeight" aria-hidden="true">
        <use :href="`/sprite/sprite.svg#${icon}`"></use>
      </svg>
    </div>
    <div class="card__content">
      <h3 class="card__title" v-html="title"></h3>
      <p v-if="description" class="card__description" v-html="description"></p>
      <div v-if="content" class="card__content-wrapper">
        <span class="card__add-content" v-html="leftContent"></span>
        <span class="card__add-content" v-html="rightContent"></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  width: 328px;
  height: 384px;
  padding: 40px 16.5px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url("/images/mobile/card-bg-img-1.webp") center bottom no-repeat;
  @include tablet {
    padding: 40px 26px;
    width: 348px;
    height: 400px;
  }
  &__icon-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 114px;
    display: flex;
    justify-content: center;
    align-items: center;
    rotate: -7.5deg;
    @include tablet {
      width: 140px;
      height: 162px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
  &__title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    @include tablet {
      font-size: 2.5rem;
    }
  }
  &__description {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__content-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  &__add-content {
    display: block;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    @include tablet {
      font-size: 1.375rem;
    }
  }
}
.card--green {
  background-color: $green-light;
  .card__title,
  .card__description,
  .card__add-content {
    color: $green-dark;
  }
}
.card--green-light {
  background-color: $green-extra-light;
  .card__title,
  .card__description,
  .card__add-content {
    color: $green-dark;
  }
}
.card--violet-light {
  background-color: $violet-light;
  .card__title,
  .card__description,
  .card__add-content {
    color: $violet;
  }
}
.card--blue {
  background-color: $blue-light;
  .card__title,
  .card__description,
  .card__add-content {
    color: $blue;
  }
}
.card--azure {
  background-color: $azure-extra-light;
  .card__title,
  .card__description,
  .card__add-content {
    color: $azure;
  }
}
.card--red {
  background-color: $red-light;
  .card__title,
  .card__description,
  .card__add-content {
    color: $red-main;
  }
}
.card--violet {
  background-color: $violet;
  .card__title,
  .card__description,
  .card__add-content {
    color: $white;
  }
}
</style>