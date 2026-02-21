<script setup lang="ts">
import {ArrowButton} from "~/shared/ui/button";

export interface DocumentCard {
  id?: number;
  title?: string;
  link?: string;
}

defineProps<DocumentCard>();
</script>

<template>
  <a class="card" :href="link" target="_blank" rel="noopener noreferrer">
    <h3 class="card__title" v-html="title"></h3>
    <svg class="card__icon" width="120" height="140" aria-hidden="true">
      <use href="/sprite/sprite.svg#icon_pdf-blue"></use>
    </svg>
    <arrow-button class="card__btn"/>
  </a>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  position: relative;
  padding: 28px 20px 36px;
  border-radius: 24px;
  background: $blue-light url("/images/mobile/card-bg-img-6.png") right bottom no-repeat;
  background-size: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  @include tablet {
    padding: 40px 32px;
  }
  &__title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $blue;
    @include tablet {
      font-size: 2.5rem;
    }
  }
  &__icon {
    position: absolute;
    bottom: -10px;
    left: 0;
    color: $blue;
    rotate: -18.93deg;
    @include tablet {
      width: 140px;
      height: 162px;
    }
    @include desktop {
      width: 170px;
      height: 203px;
    }
  }
  &__btn {
    margin-left: auto;
    margin-top: auto;
    width: 52px;
    height: 52px;
    border-color: $blue;
    :deep(.arrow-btn__icon) {
      color: $blue;
    }
  }
}
</style>