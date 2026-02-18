<script setup lang="ts">
import {ArrowButton} from "~/shared/ui/button";
import {TEACHERS} from "~/widgets/home-page/teachers";
import { useHorizontalScroll } from "~/features/horizontal-scroll";

const scrollStep = 322;
const { container: cards, showLeftBtn, scrollLeft, scrollRight } = useHorizontalScroll(scrollStep);

</script>

<template>
  <section class="teachers">
    <h2 class="teachers__title">Команда, которой доверяют</h2>
    <div class="teachers__cards-wrapper">
      <transition name="fade">
        <arrow-button class="card__btn card__btn--left" v-show="showLeftBtn" @click="scrollLeft"/>
      </transition>
      <div class="teachers__cards" ref="cards">
        <div class="card" v-for="(teacher, index) in TEACHERS" :key="index" :class="[ `card--${teacher.id}` ]">
          <picture>
            <source
                :srcset="teacher.photoDesktop"
                type="image/webp"
                media="(min-width: 768px)"
            />
            <img
                class="card__img"
                :src="teacher.photoMobile"
                alt="Логотип Эврика"
                width="314"
                height="393"
                loading="lazy"
            />
          </picture>
          <div class="card__info">
            <h3 class="card__info-name">{{ teacher.name }}</h3>
            <span class="card__info-prof">{{ teacher.profession }}</span>
          </div>
        </div>
      </div>
      <arrow-button class="card__btn card__btn--right" @click="scrollRight"/>
    </div>
  </section>
</template>

<style scoped lang="scss">
.teachers {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  @include tablet {
    gap: 60px;
    margin-bottom: 40px;
  }
  @include desktop {
    margin-bottom: 62px;
  }
  &__title {
    text-align: left;
  }
  &__cards-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 100%
  }
  &__cards {
    margin: 0 -16px 60px -16px;
    padding: 0 16px;
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;
    overflow: hidden; // обрезаем лишние карточки
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none; // скрывает полосу прокрутки в Firefox
    &::-webkit-scrollbar {
      display: none; // скрывает полосу прокрутки в Chrome/Safari
    }
    @include tablet {
      margin: 0 -20px 60px -16px;
      gap: 24px;
    }
    @include desktop {
      margin: 0 -60px 60px -60px;
      padding: 0 60px;
    }
  }
}
.card {
  flex: 0 0 auto;
  width: 310px;
  height: 382px;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  @include tablet {
    width: 420px;
    height: 468px;
  }
  &__img {
    position: relative;
    z-index: 1;
    @include tablet {
      width: 420px;
      height: 525px;
      object-fit: contain;
      object-position: center top;
    }
  }
  &__info {
    position: relative;
    z-index: 2;
    transform: translateY(-80px);
    padding: 17px 21px;
    border-radius: 24px;
    border: 2px solid $red-light;
    background: $white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    @include tablet {
      transform: translateY(-155px);
    }
    @include desktop {
      transform: translateY(-154px);
    }
  }
  &__info-name {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__info-prof {
    display: block;
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.3px;
    }
  }
  &__btn {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-124%);
    z-index: 3;
    border-color: $red-main;
    background: $white;
    :deep(.arrow-btn__icon) {
      color: $red-main;
    }
    @include tablet {
      width: 68px;
      height: 68px;
      transform: translateY(-93%);
    }
    @include desktop {
      transform: translate(88%, -117%);
    }
  }
  &__btn--left {
    left: 0;
    transform: translateY(-124%);
    :deep(.arrow-btn__icon) {
      rotate: 180deg;
    }
    @include tablet {
      transform: translateY(-93%);
    }
    @include desktop {
      transform: translate(-88%,-117%);
    }
  }
  &__btn--right {
    right: 0;
  }
}
.card--1 .card__info,
.card--2 .card__info,
.card--3 .card__info {
  transform: translateY(-120px);
  @include tablet {
    transform: translateY(-155px);
  }
}
.card--6 .card__info {
  height: 117px;
  @include tablet {
    height: 100px;
  }
}
.card--7 .card__info {
  height: 130px;
  transform: translateY(-93px);
  @include tablet {
    transform: translateY(-187px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>