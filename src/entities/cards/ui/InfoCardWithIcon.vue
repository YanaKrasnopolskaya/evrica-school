<script setup lang="ts">
export interface IconCard {
  id?: number;
  title?: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  description?: string;
  color?: string;
}

defineProps<IconCard>();
</script>

<template>
  <div class="card" :class="[`card--${color}`]">
    <div class="card__icon-wrapper">
      <svg class="card__icon" aria-hidden="true" :width="iconWidth" :height="iconHeight" >
        <use :href="`/sprite/sprite.svg#${icon}`"></use>
      </svg>
    </div>
    <h3 v-if="title" class="card__title" v-html="title"></h3>
    <p class="card__description" v-html="description"></p>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  border-radius: 16px;
  padding: 36px 16px;
  border-width: 4px;
  border-style: dashed;
  color: $azure-light;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  @include tablet {
    padding: 38px 10px 34px 16px;
    justify-content: flex-end;
  }
  &__icon-wrapper {
    position: absolute;
    top: -50px;
    right: -16px;
    width: 99px;
    height: 114px;
    rotate: 19.17deg;
    display: flex;
    align-items: center;
    justify-content: center;
    @include tablet {
      top: -72px;
      right: -36px;
      width: 140px;
      height: 162px;
    }
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
  &__description {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    vertical-align: middle;
    color: $brown;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.3px;
    }
  }
}
.card--azure {
  border-color: $azure-light;
  .card__title {
    color: $azure;
  }
}
.card--green {
  border-color: $green-light;
  .card__title {
    color: $green-dark;
  }
}
.card--orange {
  border-color: $orange-light;
  .card__title {
    color: $orange;
  }
}
.card--violet{
  border-color: $violet-light;
  .card__title {
    color: $violet;
  }
}
</style>
