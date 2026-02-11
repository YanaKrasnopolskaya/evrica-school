<script setup lang="ts">
interface Card {
  title?: string;
  description?: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  background: string;
  imageDesktop: string;
  imageMobile: string;
  imageAlt: string;
  imageWidth: string;
  imageHeight: string;
}

defineProps<Card>();
</script>

<template>
  <div class="card">
    <svg v-if="icon" class="card__icon" :width="iconWidth" :height="iconHeight" aria-hidden="true">
      <use :href="`/sprite/sprite.svg#${ icon }`"></use>
    </svg>
    <div class="card__info" :class="[ `card__info--${background}` ]">
      <h3 v-if="title" class="card__info-title" v-html="title"></h3>
      <p v-if="description" class="card__info-description" v-html="description"></p>
    </div>
    <picture class="card__picture">
      <source
          :srcset="imageDesktop"
          type="image/webp"
          media="(min-width: 768px)"
      />
      <img
          class="card__image"
          :src="imageMobile"
          :alt="imageAlt"
          :width="imageWidth"
          :height="imageHeight"
          loading="lazy"
      />
    </picture>
    <slot name="additional-content"></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
  &__icon {
    position: absolute;
  }
  &__info {
    padding: 24px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 20px;
    align-items: flex-start;
    @include tablet {
      padding: 40px;
      gap: 24px;
    }
  }
  &__info-title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: left;
    @include tablet {
      font-size: 2.5rem;
    }
  }
  &__info-description {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__image {
    position: absolute;
  }
}
.card__info--violet {
  background: $violet;
  color: $white;
}
.card__info--violet-light {
  background: $violet-light;
  color: $violet;
}
.card__info--blue {
  background: $blue;
  color: $white;
}
.card__info--green {
  background: $green-extra-light;
  color: $green-dark;
}
.card__info--red {
  background: $red-main;
  color: $white;
}
.card__info--orange-light {
  background: $orange-light;
  color: $orange;
}
.card__info--blue-light {
  background: $blue-light;
  color: $blue;
}
.card__info--orange {
  background: $orange;
  color: $white;
}
</style>