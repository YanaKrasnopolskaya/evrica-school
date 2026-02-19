<script setup lang="ts">
import { BaseButton } from '~/shared/ui/button';
import ThePopup from "../../popup/ui/ThePopup.vue";
import {useScrollLock} from "~/features/use-scroll";

interface HeroInfo {
  page: string;
  pageName?: string;
  title: string;
  textBtn: string;
  additionalText: string;
  imgMobile: string;
  imgDesktop: string;
  imgAlt: string;
}

defineProps<HeroInfo>();

const isOpenPopup = ref(false);
useScrollLock([isOpenPopup]);
</script>

<template>
  <section class="hero" :class="[ `hero--${ page }` ]">
    <div class="hero__info-wrapper">
      <picture class="hero__picture">
        <source
            srcset="/images/desktop/dt-hero-bg-img.webp"
            type="image/webp"
            media="(min-width: 768px)"
        />
        <img
            class="hero__bg-img"
            src="/images/desktop/dt-hero-bg-img.webp"
            alt="Логотип Эврика"
            width="649"
            height="580"
            fetchpriority="high"
        />
      </picture>
      <div class="info">
        <span v-if="pageName" class="hero__page-name">{{ pageName }}</span>
        <picture>
          <source
            srcset="/images/desktop/dt-hero-logo.webp"
            type="image/webp"
            media="(min-width: 768px)"
          />
          <img
            class="info__img"
            src="/images/mobile/mb-hero-logo.png"
            alt="Логотип Эврика"
            width="303"
            height="106"
            fetchpriority="high"
            decoding="async"
            loading="eager"
          />
        </picture>
        <span class="info__text" v-html="title"></span>
      </div>
      <div class="hero__button-wrapper">
        <base-button class="hero__btn" @click="isOpenPopup = true">{{ textBtn }}</base-button>
        <span class="hero__additional-text">{{ additionalText }}</span>
      </div>
    </div>
    <div class="hero__img-wrapper">
      <picture>
        <source :srcset="imgDesktop" type="" media="(min-width: 768px)" />
        <!-- decoding="async" - распаковка картинки не блочит рендер, fetchpriority="high" - приоритет загрузки -->
        <img class="hero__img" :src="imgMobile" :alt="imgAlt" width="367" height="245" decoding="async" fetchpriority="high"/>
      </picture>
    </div>
  </section>
  <Teleport to="body">
    <the-popup :is-open="isOpenPopup" @close="isOpenPopup = false" />
  </Teleport>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;
  margin-bottom: 60px;
  @include tablet {
    gap: 24px;
    margin-top: 34px;
    margin-bottom: 100px;
  }
  @include desktop {
    flex-direction: row;
    margin-top: 28px;
    margin-bottom: 120px;
  }
  &__info-wrapper {
    position: relative;
    overflow: hidden;
    padding: 32px 20px 28px;
    width: 100%;
    height: 418px;
    flex-shrink: 0;
    border-radius: 24px;
    background: $red-light;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @include tablet {
      padding: 60px;
      height: 580px;
      gap: 67px;
    }
    @include desktop {
      width: auto;
      flex: 1 1 50%;
      padding: 80px 60px;
    }
  }
  &__picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__bg-img {
    transform: scale(1.1);
    object-position: 68% center;
    width: 100%;
    height: 100%;
    @include tablet {
      transform: scale(1);
    }
  }
  &__page-name {
    padding: 8px 16px;
    border-radius: 32px;
    background: $blue-light;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    color: $blue;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__img-wrapper {
    width: 100%;
    height: 203px;
    border-radius: 24px;
    overflow: hidden;
    @include tablet {
      height: 580px;
      border-radius: 36px;
    }
    @include desktop {
      flex: 1 1 50%;
    }
  }
  &__button-wrapper {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    margin-top: auto;
    @include tablet {
      gap: 12px;
    }
    @include desktop {
      gap: 11px;
    }
  }
  &__btn {
    width: 100%;
    padding: 14px;
    font-size: 1.25rem;
    border-radius: 12px;
    @include tablet {
      width: 370px;
      padding: 19px;
      font-size: 1.375rem;
      border-radius: 16px;
    }
    @include desktop {
      padding: 23px;
    }
  }
  &__additional-text {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 120%;
    letter-spacing: 0;
    vertical-align: middle;
    color: rgb(62, 39, 39, 0.5);
    @include tablet {
      font-size: 1rem;
      padding-left: 8px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
  }
}
.info {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  @include tablet {
    gap: 32px;
  }
  &__img {
    width: 303px;
    @include tablet {
      width: 402px;
    }
  }
  &__text {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    vertical-align: middle;
    color: $red-main;
    @include tablet {
      font-size: 1.375rem;
    }
  }
}
.hero--home{
  .hero__img {
    transform: scale(1.05);
    object-position: -10px center;
  }
  @include tablet {
    .hero__img {
      transform: scale(1);
      object-position: 80% center;
    }
  }
  @include desktop {
    .hero__img {
      object-position: 50% center;
    }
  }
}
.hero--kids-club {
  @include desktop {
    .hero__info-wrapper {
      gap: 19px;
    }
    .hero__img {
      object-position: -10px center;
    }
  }
}
.hero--school {
  .hero__page-name {
    background: $azure-extra-light;
    color: $azure;
  }
  @include tablet {
    .info__text {
      width: 440px;
    }
    .hero__img {
      object-position: center top;
    }
  }
  @include desktop {
    .hero__info-wrapper {
      gap: 19px;
    }
    .hero__img {
      object-position: center center;
    }
  }
}
.hero--camp {
  .hero__page-name {
    background: $green-extra-light;
    color: $green;
  }
  .hero__img {
    transform: scale(1.35) translate(-12%, 12%);
  }
  @include tablet {
    .info__text {
      width: 440px;
    }
    .hero__img {
      transform: scale(1);
      object-position: center top;
    }
  }
  @include desktop {
    .hero__info-wrapper {
      gap: 19px;
    }
    .hero__img {
      object-position: center center;
    }
  }
}
</style>
