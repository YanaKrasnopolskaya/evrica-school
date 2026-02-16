<script setup lang="ts">
import {TheHero} from "~/widgets/hero";
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {ActiveDaySection} from "~/widgets/kids-club-page/active-day";
import {BoxForForm} from "~/widgets/box-for-form";
import {AgeGroupsSection} from "~/widgets/kids-club-page/age-groups";
import {FoodSection} from "~/widgets/kids-club-page/food";
import {RhythmSection} from "~/widgets/kids-club-page/rhythm";
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
    <age-groups-section />
    <food-section />
    <rhythm-section />
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
</style>