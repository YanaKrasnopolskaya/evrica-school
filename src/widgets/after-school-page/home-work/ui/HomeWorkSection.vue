<script setup lang="ts">
</script>

<template>
  <section class="home-work">
    <div class="home-work__info">
      <h3 class="home-work__title">Домашние задания с&nbsp;педагогом</h3>
      <div class="home-work__description">
        <span class="home-work__text">На&nbsp;продлёнке дети выполняют домашние задания независимо от&nbsp;школы, где&nbsp;они&nbsp;учатся<br><br>Мы&nbsp;объясняем сложные темы, помогаем разобраться и&nbsp;следим, чтобы&nbsp;ребёнок уходил домой с&nbsp;готовой работой</span>
        <span class="home-work__add-content">Дома остаётся только отдых&nbsp;&mdash; время для семьи</span>
      </div>
    </div>
    <div class="home-work__img-wrapper">
      <picture>
        <source srcset="/images/desktop/53-image.webp" type="" media="(min-width: 768px)" />
        <img class="home-work__img" src="/images/mobile/53-image.webp" alt="Домашние задания" width="275" height="389" loading="lazy"/>
      </picture>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-work {
  padding: 24px 16px 0;
  border-radius: 24px;
  background: $green-extra-light url("/images/mobile/card-bg-img-4.png") no-repeat left bottom;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 60px;
  @include tablet {
    background-image: url("/images/tablet/card-bg-img-4.png");
    padding: 94.5px 60px 0;
    gap: 30.5px;
    margin-bottom: 100px;
  }
  @include desktop {
    padding: 0 52px 0 60px;
    flex-direction: row;
    gap: 0;
    background-image: url("/images/desktop/card-bg-img-5.png");
    background-position: right center;
    margin-bottom: 120px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    @include tablet {
      gap: 40px;
    }
    @include desktop {
      width: 649px;
    }
  }
  &__title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $green-dark;
    @include tablet {
      font-size: 4rem;
      line-height: 90%;
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @include tablet {
      gap: 24px;
    }
    @include desktop {
      width: 436px;
    }
  }
  &__text {
    display: block;
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    color: $brown;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.02em;
    }
  }
  &__add-content {
    display: block;
    padding: 11.5px 16px;
    border-radius: 16px;
    background: $white;
    color: $green-dark;
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 1.25rem;
      padding: 12px 16px;
      border-radius: 32px;
      letter-spacing: -0.02em;
    }
  }
  &__img-wrapper {
    width: 343px;
    height: 274px;
    overflow: hidden;
    @include tablet {
      width: 476px;
      height: 503px;
    }
    @include desktop {
      width: 565px;
      height: 597px;
    }
  }
  &__img {
    transform: translateX(25%);
    @include tablet {
      width: 380px;
      height: 538px;
      transform: translateX(29%);
    }
    @include desktop {
      width: 451px;
      height: 638px;
      transform: translateX(17%);
    }
  }
}
</style>