<script setup lang="ts">
interface Card {
  imageDesktop: string;
  imageMobile: string;
  imageAlt: string;
  imageWidth: string;
  imageHeight: string;
  cardDescription: string;
}

defineProps<Card>();
</script>

<template>
  <div class="card">
    <div class="card__img-wrapper">
      <picture>
        <source
            :srcset="imageDesktop"
            type="image/webp"
            media="(min-width: 768px)"
        />
        <img
            class="card__img"
            :src="imageMobile"
            :alt="imageAlt"
            :width="imageWidth"
            :height="imageHeight"
        />
      </picture>
      <slot name="more-images"></slot>
    </div>
    <div class="card__info">
      <slot name="card-feature"></slot>
      <slot name="card-title"></slot>
      <p class="card__description" v-html="cardDescription"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  padding: 8px 8px 20px;
  background: $red-main;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @include tablet {
    padding: 10px 16px 22px;
    gap: 20px;
  }
  @include desktop {
    padding: 16px 16px 28px;
  }
  &__img-wrapper {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__info {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  &__description {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    color: $white;
    @include tablet {
      font-size: 1.375rem;
    }
  }
}
</style>