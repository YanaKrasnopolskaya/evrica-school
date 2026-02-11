<script setup lang="ts">
import { TheHero } from '~/widgets/hero';
import { HelpChildSection } from '~/widgets/home-page/help-child';
import { DevelopmentPathSection } from '~/widgets/home-page/development-path';
import {BoxForAnimationSection} from "~/widgets/box-for-animation-section";
import {AboutCenterSection} from "~/widgets/home-page/about-center";
</script>
<template>
  <h1 class="visually-hidden">Главная страница школа "Эврика"</h1>
  <div class="container">
    <the-hero
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
  </div>
</template>

<style scoped lang="scss"></style>
