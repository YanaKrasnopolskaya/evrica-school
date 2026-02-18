<script setup lang="ts">

import {TheHero} from "~/widgets/hero";
import {ActiveDaySection} from "~/widgets/kids-club-page/active-day";
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {SchoolDaySection} from "~/widgets/school-page/school-day";
import {BoxForForm} from "~/widgets/box-for-form";
import {ProgramSection} from "~/widgets/school-page/program";
import {AdmissionSection} from "~/widgets/school-page/admission";
import {SignUpSection} from "~/widgets/school-page/sing-up";
</script>

<template>
  <h1 class="visually-hidden">Школа "Эврика"</h1>
  <div class="container">
    <the-hero title="Пространство для&nbsp;спокойного и&nbsp;уверенного обучения&nbsp;ребёнка"
              page="school"
              class="hero"
              text-btn="Записаться на пробный день"
              additional-text="Для детей с 1 по 9 класс"
              img-mobile="/images/mobile/26-image.webp"
              img-desktop="/images/desktop/dt-hero-img-school.webp"
              img-alt="Школа изображение"
              page-name="Школа"
    />
    <box-for-animation-section class="box-animate">
      <template #content>
        <school-day-section />
      </template>
    </box-for-animation-section>
    <box-for-form class="form"
                  title="Хотите узнать, подойдёт&nbsp;ли школа&nbsp;вашему ребёнку?"
                  description="Оставьте заявку&nbsp;&mdash; мы&nbsp;расскажем о&nbsp;программе, познакомим с&nbsp;педагогами и&nbsp;запишем ребёнка на&nbsp;пробный день"
    />
    <program-section />
    <admission-section />
    <sign-up-section />
  </div>
</template>

<style scoped lang="scss">
.box-animate {
  height: fit-content;
  padding-bottom: 93px;
  @include tablet {
    padding-bottom: 210px;
    margin-bottom: 100px;
  }
  @include desktop {
    padding-bottom: 56px;
    margin-bottom: 120px;
  }
}
.form {
  margin-bottom: 61px;
  @include tablet {
    margin-bottom: 100px;
  }
  @include desktop {
    margin-bottom: 121px;
    :deep(.box__info-description) {
      width: 380px;
    }
  }
}
</style>