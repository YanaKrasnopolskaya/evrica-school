<script setup lang="ts">
interface Card {
  icon: string;
  description: string;
}

defineProps<Card>();
</script>

<template>
  <div class="card">
    <div class="card__icon-wrapper">
      <svg class="card__icon" aria-hidden="true">
        <use :href="`/sprite/sprite.svg#${ icon }`"></use>
      </svg>
    </div>
    <slot name="title"></slot>
    <p class="card__description">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  border-radius: 16px;
  padding: 38px 16px;
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
    rotate: (19.17deg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    @include tablet {
      top: -72px;
      right: -36px;
      width: 140px;
      height: 162px;
      padding: 14px;
    }
  }
  &__icon {
    width: 100%;
    height: auto;
    object-fit: cover;
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
</style>