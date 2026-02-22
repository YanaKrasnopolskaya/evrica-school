<script setup lang="ts">
import {TheHero} from "~/widgets/hero";
import {HelpChildSection} from "~/widgets/home-page/help-child";
import {DevelopmentPathSection} from "~/widgets/home-page/development-path";
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {AboutCenterSection} from "~/widgets/home-page/about-center";
import {DirectionsSection} from "~/widgets/home-page/directions";
import {BoxForForm} from "~/widgets/box-for-form";
import {FeaturesSection} from "~/widgets/home-page/features";
import {ReviewsSection} from "~/widgets/reviews";
import {TeachersSection} from "~/widgets/home-page/teachers";
import {ReviewsCard} from "~/entities/cards";
import {REVIEWS_FOR_HOME_DATA} from "~/widgets/reviews";
</script>
<template>
  <h1 class="visually-hidden">Главная страница школа "Эврика"</h1>
  <div class="container">
    <the-hero
        page="home"
      title="Центр развития<br> и&nbsp;открытий"
      text-btn="Записаться на пробный день"
      additional-text="Для детей от&nbsp;2&nbsp;до&nbsp;16&nbsp;лет"
      img-mobile="/images/mobile/1-image.webp"
      img-desktop="/images/desktop/1-image.webp"
      img-alt="Центр развития картинка"
    />
    <help-child-section />
    <development-path-section />
    <box-for-animation-section>
      <template #content>
        <about-center-section />
      </template>
    </box-for-animation-section>
    <directions-section />
    <box-for-form title="Первый шаг&nbsp;к&nbsp;открытиям вместе с&nbsp;нами"
                  description="Запишитесь на&nbsp;экскурсию по&nbsp;центру в&nbsp;формате дружеской встречи с&nbsp;директором"
    />
    <features-section />
    <reviews-section class="reviews">
      <template #cards>
        <reviews-card v-for="(card, index) in REVIEWS_FOR_HOME_DATA"
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
    <teachers-section />
    <box-for-form class="form__bottom" title="Начните открывать мир&nbsp;вместе&nbsp;с&nbsp;нами!"
                  description="Опишите пожелания&nbsp;&mdash; и&nbsp;мы&nbsp;предложим идеальную программу"
    />
  </div>
</template>

<style scoped lang="scss">
.form__bottom {
  @include tablet {
    gap: 48px;
  }
  @include desktop {
    gap: 54px;
    margin-bottom: 118px;
  }
  :deep(.box__info) {
    gap: 20px;
    @include tablet {
      gap: 40px;
    }
    @include desktop {
      gap: 60px;
    }
  }
}
.reviews {
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
  &__card--4 {
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
  &__card--5 {
    :deep(.card__review) {
      transform: translateY(-6px);
    }
  }
  &__card--6 {
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
}
</style>
