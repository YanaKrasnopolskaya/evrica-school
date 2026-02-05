<script setup lang="ts">
import {BaseButton} from "~/shared/button";

interface HeroInfo {
  pageName?: string;
  title: string;
  textBtn: string;
  additionalText: string;
  imgMobile: string;
  imgDesktop: string;
  imgAlt: string;
}

defineProps<HeroInfo>();
</script>

<template>
  <section class="hero">
    <div class="hero__info-wrapper">
      <div class="info">
        <slot name="page-name">{{ pageName }}</slot>
        <picture>
          <source srcset="/images/desktop/dt-hero-logo.webp" type="image/webp" media="(min-width: 768px)"/>
          <img class="info__img" src="/images/mobile/mb-hero-logo.png" alt="Логотип Эврика" width="303" height="106" />
        </picture>
        <span class="info__text" v-html="title"></span>
      </div>
      <div class="hero__button-wrapper">
        <base-button class="hero__btn">{{ textBtn }}</base-button>
        <span class="hero__additional-text">{{ additionalText }}</span>
      </div>
    </div>
    <div class="hero__img-wrapper">
      <picture>
        <source :srcset="imgDesktop" type="" media="(min-width: 768px)"/>
        <img class="hero__img" :src="imgMobile" :alt="imgAlt" width="367" height="245" />
      </picture>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;
  @include tablet {
    gap: 24px;
    margin-top: 34px;
  }
  @include desktop {
    flex-direction: row;
    margin-top: 28px;
  }
  &__info-wrapper {
    padding: 32px 20px 28px;
    width: 100%;
    height: 418px;
    flex-shrink: 0;
    border-radius: 24px;
    background: $red-light url("/images/mobile/mb-hero-bg-img.png") no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @include tablet {
      padding: 60px;
      height: 580px;
      gap: 67px;
      background-image: url("/images/desktop/dt-hero-bg-img.png");
    }
    @include desktop {
      width: auto;
      flex: 1 1 50%;
      padding: 80px 60px;
      background-image: url("/images/desktop/dt-hero-bg-img.png");
    }
  }
  &__img-wrapper {
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
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
    width: 367px;
    height: 245px;
    object-position: -20px -20px;
    @include tablet {
      width: 870px;
      height: 580px;
      object-position: -110px 0;
    }
    @include desktop {

    }
  }
}
.info {
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
</style>