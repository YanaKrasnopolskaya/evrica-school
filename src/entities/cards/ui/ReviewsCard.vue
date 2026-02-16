<script setup lang="ts">
interface Card {
  avatar: string;
  avatarName: string;
  ratingDate: string;
  review: string;
}

defineProps<Card>();
</script>

<template>
  <div class="card">
    <div class="card__rating-wrapper">
      <img class="card__avatar" :src="avatar" alt="аватар" width="80" height="80" />
      <div class="card__rating-data">
        <span class="card__avatar-name">{{ avatarName }}</span>
        <img class="card__rating" src="/images/mobile/stars.webp" alt="рейтинг" width="120" height="24" />
        <span class="card__rating-date">{{ ratingDate }}</span>
      </div>
    </div>
    <p class="card__review" v-html="review"></p>
    <NuxtLink class="card__review-link" to="https://2gis.ru/kemerovo/firm/70000001103541145/tab/reviews?m=86.174921%2C55.344504%2F16" target="_blank" rel="noopener noreferrer">Перейти к отзыву</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 20px 20px 22px 22px;
  border-radius: 20px;
  border: 4px dashed $green-light;
  background: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  @include tablet {
    padding: 20px 20px 22px 20px;
  }
  &__rating-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  &__rating-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  &__avatar-name {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    color: $brown;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__rating-date {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 120%;
    letter-spacing: 0;
    @include tablet {
      font-size: 1rem;
    }
  }
  &__review {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    color: $brown;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @include tablet {
      -webkit-line-clamp: 8;
      line-clamp: 8;
      font-size: 1.25rem;
      font-weight: 300;
    }
  }
  &__review-link {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    color: rgba(62, 39, 39, 0.6);
    @include tablet {
      font-size: 1.375rem;
    }
  }
}
</style>