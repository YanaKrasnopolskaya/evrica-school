<script setup lang="ts">
import {TgButton} from "~/shared/ui/button";
</script>

<template>
  <div class="container">
    <section class="contacts-wrapper">
      <div class="contacts">
        <span class="contacts__section-name">Наши контакты</span>
        <div class="contacts__content">
          <a class="contacts__content-link" href="tel:+7384225-97-47">+7 3842 25-97-47</a>
          <a class="contacts__content-link" href="mailto:evrika.kemerovo@mail.ru">evrika.kemerovo@mail.ru</a>
          <tg-button />
        </div>
      </div>
      <div class="contacts__map-wrapper">
        <span class="contacts__section-name">Адрес</span>
        <div class="contacts__map">
          <span class="contacts__content-link">Проспект Химиков, 24в</span>
          <iframe
              src="https://yandex.ru/map-widget/v1/org/evrika/191457056492/?ll=86.174730%2C55.344403&z=16"
              width="100%"
              height="300"
              allowfullscreen
              title="Карта с адресом учебного центра Эврика"
              loading="lazy"
          >
          </iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.contacts-wrapper {
  border-radius: 32px;
  background: $green-light;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;
  @include tablet {
    padding: 100px 40px;
    gap: 50px;
    margin-bottom: 100px;
  }
  @include desktop {
    flex-direction: row;
    align-items: flex-start;
    padding: 60px;
    gap: 76px;
    margin-bottom: 120px;
  }
}
.contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  @include tablet {
    gap: 40px;
  }
  @include desktop {
    width: 476px;
  }
  &__section-name {
    padding: 8px 16px;
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    border-radius: 32px;
    background: $white;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.35px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  &__content-link {
    display: block;
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $brown;
    @include tablet {
      font-size: 2.5rem;
    }
  }
  &__map-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    @include tablet {
      gap: 40px;
    }
    @include desktop {
      flex: 1;
    }
  }
  &__map {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
}
iframe {
  border: none;
  border-radius: 24px;
}
</style>