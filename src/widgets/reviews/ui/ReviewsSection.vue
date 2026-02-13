<script setup lang="ts">
import {BaseButton} from "~/shared/ui/button";
import {ReviewsCard} from "~/entities/cards";
import {REVIEWS_DATA} from "~/widgets/reviews";
</script>

<template>
  <section class="reviews">
    <div class="reviews__info">
      <h2 class="reviews__title">Наши истории успеха</h2>
      <div class="reviews__btn-wrapper">
        <img src="/images/mobile/2gis.webp" alt="2Гис" class="reviews__2gis-logo" width="182" height="67">
        <base-button class="reviews__btn">Оставить отзыв</base-button>
      </div>
    </div>
    <div class="reviews__card-wrapper">
      <reviews-card v-for="(card, index) in REVIEWS_DATA"
                    :key="index"
                    class="reviews__card"
                    :class="[ `card--${card.id}` ]"
                    :avatar="card.avatar"
                    :avatar-name="card.avatarName"
                    :rating-date="card.reviewDate"
                    :review="card.review"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.reviews {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 64px;
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
  &__card {
    width: 100%;
    height: 399px;
    @include tablet {
      width: 354px;
      height: 402px;
    }
    @include desktop {
      width: 420px;
    }
  }
}
.card--1 {
  :deep(.card__review) {
    transform: translateY(-7px);
  }
}
.card--2 {
  :deep(.card__review) {
    transform: translateY(-16px);
    @include tablet {
      transform: translateY(-8px);
    }
  }
}
.card--3 {
  :deep(.card__review) {
    transform: translateY(-36px);
    @include tablet {
      transform: translateY(-8px);
    }
    @include desktop {
      transform: translateY(-18px);
    }
  }
}
.card--4 {
  height: 389px;
  padding-bottom: 10px;
  @include tablet {
    height: 402px;
    padding-bottom: 20px;
  }
  :deep(.card__review) {
    transform: translateY(-36px);
    @include tablet {
      transform: translateY(4px);
    }
    @include desktop {
      transform: translateY(-18px);
    }
  }
}
.card--5 {
 :deep(.card__review) {
   transform: translateY(-6px);
 }
}
.card--6 {
  :deep(.card__review) {
    transform: translateY(-74px);
    @include tablet {
      transform: translateY(-56px);
    }
    @include desktop {
      transform: translateY(-68px);
    }
  }
}
</style>