<script setup lang="ts">
import {TheHero} from "~/widgets/hero";
import {ActiveDayForCampSection} from "~/widgets/camp-page/active-day";
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {ClassesSection} from "~/widgets/after-school-page/classes";
import {HomeWorkSection} from "~/widgets/after-school-page/home-work";
import {ActivitiesSection} from "~/widgets/after-school-page/activities";
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
</style>