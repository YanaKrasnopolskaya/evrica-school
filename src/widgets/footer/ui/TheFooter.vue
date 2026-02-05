<script setup lang="ts">
import {BaseButton} from "~/shared/button";
</script>

<template>
  <div class="container">
    <footer class="footer">
      <picture>
        <source srcset="/images/tablet/tb-footer-logo.webp" type="image/webp" media="(min-width: 768px)"/>
        <source srcset="/images/desktop/dt-footer-logo.webp" type="image/webp" media="(min-width: 1024px)"/>
        <img class="footer__logo" src="/images/mobile/mb-footer-logo.png" alt="Логотив Эврика" width="290" height="144">
      </picture>
      <div class="footer__socials-wrapper">
        <span class="footer__text">Мы в соцсетях</span>
        <div class="socials">
          <a href="" class="socials__item">
            <svg class="footer__icon" width="38" height="38" aria-hidden="true">
              <use href="/sprite/sprite.svg#icon_tg"></use>
            </svg>
          </a>
          <a href="" class="socials__item">
            <svg class="footer__icon" width="38" height="38" aria-hidden="true">
              <use href="/sprite/sprite.svg#icon_vk"></use>
            </svg>
          </a>
          <a href="" class="socials__item">
            <svg class="footer__icon" width="38" height="38" aria-hidden="true">
              <use href="/sprite/sprite.svg#icon_instagram"></use>
            </svg>
            <svg class="footer__icon footer__icon--star" width="10" height="9" aria-hidden="true">
              <use href="/sprite/sprite.svg#icon_star"></use>
            </svg>
          </a>
        </div>
        <span class="footer__disclaimer">*Instagram — продукт компании Meta Platforms Inc., деятельность которой запрещена на территории РФ</span>
      </div>
      <div class="footer__info">
        <div class="footer__documents">
          <a href="/files/privacy-policy.pdf" target="_blank" rel="noopener">Политика конфиденциальности</a>
          <NuxtLink to="/information">Сведения об образовательной организации</NuxtLink>
          <span>2025</span>
        </div>
        <div class="developer">
          <div class="developer__info">
            <span>Разработано командой</span>

          </div>
          <base-button class="developer__btn">
            <span>Узнать подробнее</span>
            <svg class="footer__icon footer__icon--arrow" width="18" height="15" aria-hidden="true">
              <use href="/sprite/sprite.svg#icon_arrow"></use>
            </svg>
          </base-button>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  &__logo {
    width: 290px;
    height: 144px;
    @include tablet {
      width: 423px;
      height: 209px;
    }
  }
  &__text {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -2%;
    text-align: center;
    color: $red-main;
    @include tablet {
      grid-column: span 2;
      font-size: 2.5rem;
    }
  }
  &__socials-wrapper {
    display: grid;
    gap: 20px;
    justify-content: center;
    align-items: center;
    @include tablet {
      grid-template-columns: repeat(2, 1fr);
      gap: 26px 48px;
      margin: 0 43.5px;
    }
  }
  &__icon {
    width: 38px;
    height: 38px;
    @include tablet {
      width: 48px;
      height: 48px;
    }
  }
  &__disclaimer {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    color: $red-main;
    @include tablet {
      font-size: 1rem;
      text-align: start;
    }
  }
  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;
    justify-content: center;
  }
  &__documents {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @include tablet {
      flex-direction: row;
      justify-content: flex-start;
      gap: 32px;
    }
  }
  &__documents span {
    @include tablet {
      margin-left: auto;
    }
  }
  &__documents a,
  &__documents span {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    color: $green;
  }
}
.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  &__item {
    position: relative;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    background: $white;
    border: 0.8px solid $brown;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -10px;
    z-index: 1;
    @include tablet {
      width: 120px;
      height: 120px;
      margin-left: -20px;
    }
    &:first-child {
      margin-left: 0;
    }
  }
}
.footer__icon--star {
  position: absolute;
  top: 16px;
  right: 16px;
  color: $red-main;
  width: 10px;
  height: 9px;
  @include tablet {
    top: 30px;
    right: 22px;
    width: 12px;
    height: 11px;
  }
}
.developer {
  margin: 16px;
  padding: 32px 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 2px solid rgba(131, 217, 227, 0.4);
    border-radius: 60px;
  }
  &:hover .developer__btn{
    background: radial-gradient(64.96% 259.75% at 50% 50%, #03A5C9 0%, #005D83 67.44%, #002C3E 100%);
    color: $white;
  }
  &:hover .developer svg{
    color: $white;
  }
  @include tablet {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    & span {
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 120%;
      letter-spacing: 0;
      color: rgba(0, 0, 0, 1);
    }
  }
  &__btn {
    width: 264px;
    height: 60px;
    border-radius: 60px;
    padding: 6px;
    background: rgba(25, 202, 228, 0.08);
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 120%;
    letter-spacing: 0;
    color: rgba(0, 44, 62, 1);
    gap: 10px;
  }
}
</style>