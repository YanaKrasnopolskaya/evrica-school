<script setup lang="ts">
import {TheHero} from "~/widgets/hero";
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {ActiveDaySection} from "~/widgets/kids-club-page/active-day";
import {BoxForForm} from "~/widgets/box-for-form";
import {AgeGroupsSection} from "~/widgets/kids-club-page/age-groups";
import {FoodSection} from "~/widgets/kids-club-page/food";
import {RhythmSection} from "~/widgets/kids-club-page/rhythm";
import {TimetableSection} from "~/widgets/kids-club-page/timetable";
import {TARIFFS_FOR_KIDS_CLUB_DATA, TariffsSection} from "~/widgets/tariffs";
import {TariffCard} from "~/entities/cards";
</script>

<template>
  <h1 class="visually-hidden">Детский клуб школа "Эврика"</h1>
  <div class="container">
    <the-hero
        page="kids-club"
        class="hero"
        page-name="Детский клуб"
        title="Место, где ребёнку спокойно<br> и интересно"
        text-btn="Записаться на пробный день"
        additional-text="Для детей от 2 до 7 лет"
        img-mobile="/images/mobile/mb-hero-img-kids-club.png"
        img-desktop="/images/desktop/dt-hero-img-kids-club.webp"
        img-alt="Центр развития картинка"
    >
    </the-hero>
    <box-for-animation-section>
      <template #content>
        <active-day-section/>
      </template>
    </box-for-animation-section>
    <box-for-form class="form"
                  title="Хотите&nbsp;увидеть <br> всё сами?"
                  description="Приходите на&nbsp;дружескую экскурсию: познакомимся, покажем занятия и&nbsp;атмосферу"
    />
    <age-groups-section/>
    <food-section/>
    <rhythm-section/>
    <timetable-section/>
    <tariffs-section title="Гибкие форматы и&nbsp;тарифы">
      <template #cards>
        <tariff-card v-for="card in TARIFFS_FOR_KIDS_CLUB_DATA"
                     class="card"
                     :class="[`card--${card.id}`]"
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
.form {
  margin-bottom: 61px;
  @include tablet {
    margin-bottom: 98px;
  }
  @include desktop {
    margin-top: -7px;
    margin-bottom: 120px;
    :deep(.box__info-description) {
      width: 380px;
    }
  }
}

.card {
  width: 100%;

  :deep(.card__btn) {
    @include tablet {
      width: 360px;
    }
  }

  @include tablet {
    width: 424px;
    height: 408px;
    :deep(.card__description) {
      margin-bottom: 10px;
      width: 295px;
    }
    :deep(.card__price) {
      margin-bottom: 8px;
    }
  }
}

.card--3 {
  @include tablet {
    :deep(.card__description) {
      margin-bottom: 34px;
    }
  }
}
</style>