<script setup lang="ts">
import {TheHero} from "~/widgets/hero";
import {BrightVacationSection} from "~/widgets/camp-page/bright-vacation";
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {ActiveDayForCampSection} from "~/widgets/camp-page/active-day";
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
  </div>
</template>

<style scoped lang="scss">
.box-animate {
  height: 2766px;
}
</style>