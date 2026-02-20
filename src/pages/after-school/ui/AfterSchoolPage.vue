<script setup lang="ts">
import {TheHero} from "~/widgets/hero";
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {ClassesSection} from "~/widgets/after-school-page/classes";
import {HomeWorkSection} from "~/widgets/after-school-page/home-work";
import {ActivitiesSection} from "~/widgets/after-school-page/activities";
import {FoodSection} from "~/widgets/after-school-page/food";
import {BoxForForm} from "~/widgets/box-for-form";
import {TariffCard} from "~/entities/cards";
import {TARIFFS_FOR_AFTER_SCHOOL_DATA, TariffsSection} from "~/widgets/tariffs";
</script>

<template>
  <h1 class="visually-hidden">Продлёнка"Эврика"</h1>
  <div class="container">
    <the-hero title="Дети делают домашние задания с&nbsp;педагогом, посещают занятия, гуляют и&nbsp;отдыхают"
              page="after-school"
              class="hero"
              text-btn="Записаться на продлёнку"
              additional-text="Для детей с 1 по 5 класс"
              img-mobile="/images/mobile/47-image.webp"
              img-desktop="/images/desktop/47-image.webp"
              img-tablet="/images/tablet/47-image.webp"
              img-alt="Продлёнка изображение"
              page-name="Продлёнка"
    />
    <box-for-animation-section class="box-animate">
      <template #content>
        <classes-section />
      </template>
    </box-for-animation-section>
    <home-work-section />
    <activities-section />
    <food-section />
    <box-for-form class="form"
                  title="Поможем подобрать, что&nbsp;подойдёт вашему ребёнку"
                  description="Оставьте заявку&nbsp;&mdash; расскажем о&nbsp;продлёнке и&nbsp;поможем выбрать занятия"
    />
    <tariffs-section class="tariffs" title="Тарифы продлёнки">
      <template #cards>
        <tariff-card v-for="card in TARIFFS_FOR_AFTER_SCHOOL_DATA"
                     class="tariffs__card"
                     :class="[`tariffs__card--${card.id}`]"
                     :title="card.title"
                     :button-text="card.buttonText"
                     :description="card.description"
                     :price="card.price"
                     :color="card.color"
        />
      </template>
    </tariffs-section>
  </div>
</template>

<style scoped lang="scss">
.box-animate {
  margin-bottom: 58px;
  @include tablet {
    padding-bottom: 24px;
    margin-bottom: 100px;
  }
  @include desktop {
    height: 2865px;
    margin-bottom: 120px;
  }
}
.tariffs {
  @include tablet {
    padding: 0 41px;
    &__card {
      width: 100%;
      padding: 36px 32px 36px;
    }
    :deep(.tariffs__cards-wrapper) {
      gap: 20px;
      width: 100%;
    }
    :deep(.card__price) {
      margin-bottom: 10px;
    }
    :deep(.card__description) {
      width: 465px;
    }
    :deep(.card__btn) {
      padding: 29px;
    }
    .tariffs__card--3 {
      padding: 30px 32px 40px;
      :deep(.card__title) {
        width: 520px;
        margin-bottom: 10px;
      }
    }
  }
  @include desktop {
    padding: 0;
    :deep(.tariffs__cards-wrapper) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      width: 100%;
    }
    .tariffs__card--3 {
      grid-column: span 2;
      :deep(.card__title) {
        width: 900px;
        padding-top: 14px;
      }
    }
  }
}
</style>