<script setup lang="ts">
import {TheHero} from "~/widgets/hero";
import {BrightVacationSection} from "~/widgets/camp-page/bright-vacation";
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {ActiveDayForCampSection} from "~/widgets/camp-page/active-day";
import {BoxForForm} from "~/widgets/box-for-form";
import {TypesOfCampsSection} from "~/widgets/camp-page/types-of-camps";
import {DailyRoutineSection} from "~/widgets/camp-page/daily-routine";
import {SafetySection} from "~/widgets/camp-page/safety";
import {TARIFFS_FOR_CAMP_DATA, TariffsSection} from "~/widgets/tariffs";
import {ReviewsCard, TariffCard} from "~/entities/cards";
import {REVIEWS_FOR_CAMP_DATA, ReviewsSection} from "~/widgets/reviews";
import BaseDropdown from "~/shared/ui/dropdown/ui/BaseDropdown.vue";
import {AnswersSection} from "~/widgets/camp-page/answers";
</script>

<template>
  <h1 class="visually-hidden">Лагерь "Эврика"</h1>
  <div class="container">
    <the-hero title="Городские и&nbsp;загородные смены, где ребёнок насыщенно проводит каникулы"
              page="camp"
              class="hero"
              text-btn="Записаться в лагерь"
              additional-text="Для детей от 7 до 16 лет"
              img-mobile="/images/mobile/35-image.webp"
              img-desktop="/images/desktop/35-image.webp"
              img-alt="Лагерь изображение"
              page-name="Каникулярный лагерь"
    />
    <bright-vacation-section />
    <box-for-animation-section class="box-animate">
      <template #content>
        <active-day-for-camp-section />
      </template>
    </box-for-animation-section>
    <box-for-form class="form"
                  title="Хотите узнать больше о&nbsp;сменах?"
                  description="Оставьте заявку, и&nbsp;мы&nbsp;подберём нужную программу"
    />
    <types-of-camps-section />
    <daily-routine-section />
    <safety-section />
    <tariffs-section class="tariffs" title="Гибкие форматы и&nbsp;тарифы">
      <template #cards>
        <tariff-card v-for="card in TARIFFS_FOR_CAMP_DATA"
                     class="tariffs__card"
                     :class="[`tariffs__card--${card.id}`]"
                     :title="card.title"
                     :button-text="card.buttonText"
                     :description="card.description"
                     :price="card.price"
                     :color="card.color"
        />
      </template>
      <template #additional-content>
        <span class="tariffs__text">*Мы&nbsp;позаботились о&nbsp;гибкости оплаты: можно внести всю сумму сразу или оплачивать лагерь по&nbsp;дням</span>
      </template>
    </tariffs-section>
    <reviews-section class="reviews">
      <template #cards>
        <reviews-card v-for="(card, index) in REVIEWS_FOR_CAMP_DATA"
                      :key="index"
                      class="reviews__card"
                      :class="[ `reviews__card--${card.id}` ]"
                      :avatar="card.avatar"
                      :avatar-name="card.avatarName"
                      :rating-date="card.reviewDate"
                      :review="card.review"
        />
      </template>
    </reviews-section>
    <answers-section />
  </div>
</template>

<style scoped lang="scss">
.box-animate {
  @include tablet {
    margin-bottom: 100px;
  }
  @include desktop {
    height: 2766px;
    margin-bottom: 122px;
  }
}
.form {
  @include desktop {
    :deep(.box__info-description) {
      width: 380px;
    }
  }
}
.tariffs {
  gap: 36px;
  margin-bottom: 60px;
  &__text {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    color: $brown;
    margin-top: -18px;
    @include tablet {
      font-size: 1.25rem;
      margin-top: -14px;
    }
    @include desktop {
      margin-top: -36px;
      align-self: flex-start;
      letter-spacing: -0.3px;
    }
  }
  :deep(.card__title) {
    width: 270px;
  }
  @include tablet {
    gap: 54px;
    margin-bottom: 98px;
    &__card {
      width: 646px;
      height: 370px;
      padding: 35px 44px;
    }
    :deep(.card__title) {
      width: 100%;
    }
    :deep(.card__description) {
      width: 445px;
    }
    :deep(.tariffs__cards-wrapper) {
      gap: 20px;
    }
    :deep(.card__price) {
      margin-bottom: 10px;
    }
    :deep(.card__btn) {
      padding: 29px;
    }
    :deep(.tariffs__card--3 .card__description) {
      width: 460px;
    }
  }
  @include desktop {
    gap: 60px;
    margin-bottom: 158px;
    :deep(.tariffs__cards-wrapper) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 26px;
    }
  }
}
.reviews {
  margin-bottom: 62px;
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

  &__card--1 {
    :deep(.card__review) {
      transform: translateY(-7px);
    }
  }

  &__card--2 {
    :deep(.card__review) {
      transform: translateY(-16px);
      @include tablet {
        transform: translateY(-8px);
      }
    }
  }

  &__card--3 {
    display: none;
    :deep(.card__rating-wrapper) {
      justify-content: flex-start;
    }
    :deep(.card__review) {
      transform: translateY(-8px);
    }
    @include desktop {
      display: flex;
    }
  }
  @include tablet {
    margin-bottom: 82px;
    :deep(.reviews__title) {
      font-size: 4rem;
    }
  }
  @include desktop {
    margin-bottom: 120px;
  }
}
</style>