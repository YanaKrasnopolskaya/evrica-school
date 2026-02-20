<script setup lang="ts">
export interface ActivitiesCard {
  id: number;
  title: string;
  text: string;
  icon: string;
  color: string;
}

defineProps<ActivitiesCard>();
</script>

<template>
  <div class="card" :class="[`card--${color}`]">
    <h3 class="card__title" v-html="title"></h3>
    <p class="card__text" v-html="text"></p>
    <svg class="card__icon" width="48" height="65" aria-hidden="true">
      <use :href="`/sprite/sprite.svg#${ icon }`"></use>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  padding: 40px 32px;
  background: url("/images/mobile/card-bg-img-3.png") no-repeat center center;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  @include tablet {
    padding: 40px 20px 40px 30px;
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
  &__text {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    color: $brown;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.02em;
    }
  }
  &__icon {
    position: absolute;
    top: -28px;
    right: 0;
    width: 54px;
    height: 70px;
    rotate: -8deg;
    @include tablet {
      right: 25px;
    }
  }
}
.card--orange {
  background-color: $orange-light;
  .card__title {
    color: $orange;
  }
}
.card--azure {
  background-color: $azure-extra-light;
  .card__title {
    color: $azure;
  }
}
.card--green {
  background-color: $green-extra-light;
  .card__title {
    color: $green-dark;
  }
}
</style>