<script setup lang="ts">

import {TheHero} from "~/widgets/hero";
import {ActiveDaySection} from "~/widgets/kids-club-page/active-day";
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {SchoolDaySection} from "~/widgets/school-page/school-day";
</script>

<template>
  <h1 class="visually-hidden">Школа "Эврика"</h1>
  <div class="container">
    <the-hero title="Пространство для&nbsp;спокойного и&nbsp;уверенного обучения&nbsp;ребёнка"
              page="school"
              class="hero"
              text-btn="Записаться на пробный день"
              additional-text="Для детей с 1 по 9 класс"
              img-mobile="/images/mobile/mb-hero-img-school.png"
              img-desktop="/images/desktop/dt-hero-img-school.webp"
              img-alt="Школа изображение"
              page-name="Школа"
    />
    <box-for-animation-section>
      <template #content>
        <school-day-section />
      </template>
    </box-for-animation-section>
  </div>
</template>

<style scoped lang="scss">

</style>