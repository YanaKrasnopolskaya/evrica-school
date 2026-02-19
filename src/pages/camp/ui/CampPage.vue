<script setup lang="ts">
import {TheHero} from "~/widgets/hero";
import {BrightVacationSection} from "~/widgets/camp-page/bright-vacation";
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {ActiveDayForCampSection} from "~/widgets/camp-page/active-day";
import {BoxForForm} from "~/widgets/box-for-form";
import {TypesOfCampsSection} from "~/widgets/camp-page/types-of-camps";
import {DailyRoutineSection} from "~/widgets/camp-page/daily-routine";
import {SafetySection} from "~/widgets/camp-page/safety";
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
</style>