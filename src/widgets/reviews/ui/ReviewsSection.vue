<script setup lang="ts">
import {BaseButton} from "~/shared/ui/button";
</script>

<template>
  <section class="reviews">
    <div class="reviews__info">
      <h2 class="reviews__title">Наши истории успеха</h2>
      <div class="reviews__btn-wrapper">
        <img src="/images/mobile/2gis.webp" alt="2Гис" class="reviews__2gis-logo" width="182" height="67">
        <NuxtLink class="card__review-link" to="https://2gis.ru/kemerovo/firm/70000001103541145/tab/reviews?m=86.174921%2C55.344504%2F16" target="_blank" rel="noopener noreferrer">
          <base-button class="reviews__btn">Оставить отзыв</base-button>
        </NuxtLink>
      </div>
    </div>
    <div class="reviews__card-wrapper">
      <slot name="cards"></slot>
    </div>
  </section>
</template>

<style scoped lang="scss">
.reviews {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 66px;
  @include tablet {
    gap: 60px;
    margin-bottom: 110px;
  }
  @include desktop {
    margin-top: -36px;
    margin-bottom: 120px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 17px;
    @include tablet {
      gap: 40px;
    }
    @include desktop {
      flex-direction: row;
      gap: 20px;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__title {
    @include tablet {
      font-size: 2.25rem;
    }
    @include desktop {
      width: fit-content;
      font-size: 4rem;
    }
  }
  &__btn-wrapper {
    padding: 24px 54px;
    border-radius: 16px;
    background: $green-extra-light;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    @include tablet {
      width: 100%;
      padding: 24px;
      flex-direction: row;
      justify-content: space-between;

    }
    @include desktop {
      width: 648px;
    }
  }
  &__2gis-logo {
    @include tablet {
      width: 212px;
      height: 80px;
    }
  }
  &__btn {
    width: 234px;
    padding: 14px;
    font-size: 1.25rem;
    @include tablet {
      width: 248px;
      padding: 29px;
      font-size: 1.375rem;
    }
  }
  &__card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    @include tablet {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 7px 20px;
    }
    @include desktop {
      gap: 30px;
    }
  }
}
</style>