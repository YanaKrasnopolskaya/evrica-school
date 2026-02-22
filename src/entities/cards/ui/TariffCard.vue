<script setup lang="ts">
import {BaseButton} from "~/shared/ui/button";
import {useScrollLock} from "~/shared/utils/use-scroll";

const LazyThePopup = defineAsyncComponent(() =>
    import('~/widgets/popup').then(m => m.ThePopup)
)

export interface TariffCard {
  id: number;
  title: string;
  buttonText: string;
  color?: string;
  description?: string;
  price?: string;
}
defineProps<TariffCard>();

const isOpenPopup = ref(false);
useScrollLock([isOpenPopup]);
</script>

<template>
  <div class="card" :class="[`card--${color}`]">
    <h3 class="card__title" v-html="title"></h3>
    <p v-if="description" class="card__description" v-html="description"></p>
    <span v-if="price" class="card__price" v-html="price"></span>
    <base-button class="card__btn" @click="isOpenPopup = true">{{ buttonText }}</base-button>
    <slot name="additional-content"></slot>
    <Teleport to="body">
      <transition name="fade">
        <LazyThePopup v-if="isOpenPopup" :is-open="isOpenPopup" @close="isOpenPopup = false" />
      </transition>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 60px 24px;
  border-radius: 24px;
  background: $azure-extra-light url("/images/mobile/card-bg-img-2.png") no-repeat left top;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  @include tablet {
    padding: 40px 32px 32px;
    gap: 20px;
  }
  &__title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: $azure;
    @include tablet {
      font-size: 2.5rem;
    }
  }
  &__description {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    color: $brown;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.35px;
    }
  }
  &__price {
    display: block;
    font-weight: 500;
    font-size: 2.25rem;
    line-height: 90%;
    letter-spacing: -0.02em;
    text-align: center;
    color: $azure;
    @include tablet {
      font-size: 4rem;
    }
  }
  &__btn {
    width: 263px;
    padding: 14px;
    font-size: 1.25rem;
    @include tablet {
      width: 419px;
      padding: 23px;
      font-size: 1.375rem;
    }
  }
}
.card--azure {
  background-color: $azure-extra-light;
  .card__title,
  .card__price {
    color: $azure;
  }
}
.card--violet {
  background-color: $violet-light;
  .card__title,
  .card__price {
    color: $violet;
  }
}
.card--blue {
  background-color: $blue-light;
  .card__title,
  .card__price {
    color: $blue;
  }
}
.card--red {
  background-color: $red-light;
  .card__title,
  .card__price {
    color: $red-main;
  }
}
.card--green {
  background-color: $green-light;
  .card__title,
  .card__price {
    color: $green-dark;
  }
}
// анимация появления попапа
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>