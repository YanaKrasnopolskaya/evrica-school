<script setup lang="ts">
import {BaseButton} from "~/shared/ui/button";
import ThePopup from "../../../popup/ui/ThePopup.vue";
import {useScrollLock} from "~/shared/utils/use-scroll";

const isOpenPopup = ref(false);
useScrollLock([isOpenPopup]);
</script>

<template>
  <div class="sign-up-wrapper">
    <div class="sign-up">
      <div class="sign-up__info">
        <div class="sign-up__info-title">Стоимость обучения</div>
        <div class="sign-up__info-price">26 000 ₽ в месяц</div>
      </div>
      <div class="sign-up__add-info">
        <span class="sign-up__add-info-text">Питание оплачивается дополнительно: 350&nbsp;₽ в&nbsp;день</span>
        <svg class="sign-up__icon" width="50" height="60" aria-hidden="true">
          <use href="/sprite/sprite.svg#icon_paper-clip-orange"></use>
        </svg>
      </div>
      <div class="sign-up__btn-wrapper">
        <base-button class="sign-up__btn" @click="isOpenPopup = true">Записаться на встречу</base-button>
        <span class="sign-up__btn-text">Перерасчёта по каникулам и больничным нет</span>
      </div>
    </div>
    <img class="sign-up__img" src="/images/desktop/34-image.webp" alt="Записаться на встречу изображение" loading="lazy" />
    <Teleport to="body">
      <the-popup :is-open="isOpenPopup" @close="isOpenPopup = false" />
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
.sign-up-wrapper {
  display: flex;
  margin-bottom: 138px;
  @include tablet {
    margin-bottom: 172px;
  }
  @include desktop {
    flex-direction: row;
    margin-bottom: 336px;
  }
}
.sign-up {
  width: 100%;
  position: relative;
  padding: 52.5px 0;
  border-radius: 24px;
  background: $red-light url("/images/mobile/card-bg-img-3.png") no-repeat center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @include tablet {
    padding: 55.5px 85px;
    background-image: url("/images/desktop/card-bg-img-4.png");
    background-position: right center;
  }
  @include desktop {
    padding: 55.5px 72px;
    z-index: 2;
    width: 702px;
    transform: translateY(19%);
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  &__info-title {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    color: $red-main;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__info-price {
    font-weight: 500;
    font-size: 2.25rem;
    line-height: 90%;
    letter-spacing: -0.02em;
    text-align: center;
    color: $red-main;
    @include tablet {
      font-size: 4rem;
    }
  }
  &__add-info {
    position: absolute;
    padding: 20px;
    width: 319px;
    border-radius: 20px;
    rotate: -1.7deg;
    background: $orange-light;
    bottom: -28%;
    right: 2%;
    display: flex;
    justify-content: center;
    @include tablet {
      padding: 40px;
      width: 385px;
      bottom: -22%;
      right: 1.5%;
    }
    @include desktop {
      bottom: -27%;
      right: -8%;
    }
  }
  &__add-info-text {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    color: $orange;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  &__btn {
    font-size: 1.25rem;
    padding: 14px;
    width: 263px;
    @include tablet {
      font-size: 1.375rem;
      padding: 29px;
      width: 419px;
    }
  }
  &__btn-text {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 120%;
    letter-spacing: 0;
    vertical-align: middle;
    @include tablet {
      font-size: 1rem;
    }
  }
  &__img {
    display: none;
    @include desktop {
      position: absolute;
      right: 59px;
      z-index: 1;
      display: block;
      border-radius: 20px;

    }
  }
  &__icon {
    position: absolute;
    top: -30%;
    right: -2%;
    rotate: -7deg;
    @include tablet {
      width: 60px;
      height: 70px;
      right: 8%;
      top: -25%;
    }
  }
}
</style>