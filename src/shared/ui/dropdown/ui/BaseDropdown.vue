<script setup lang="ts">
defineProps({
  label: String,
})
const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="dropdown">
    <button class="dropdown__btn" @click="toggle" type="button">
      <span class="dropdown__text" v-html="label"></span>
      <span class="dropdown__icon-wrapper">
        <svg class="dropdown__icon" :class="{'dropdown__icon-rotated': isOpen}" width="25" height="25" aria-hidden="true">
          <use href="/sprite/sprite.svg#icon_open"></use>
        </svg>
      </span>
    </button>
    <Transition name="dropdown-transition">
      <div class="dropdown__content" v-if="isOpen">
        <slot name="dropdown-text"></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  width: 100%;
  border-radius: 20px;
  border: 8px solid $red-light;
  background: $red-light;
  overflow: hidden;
  &__btn {
    width: 100%;
    border-radius: 20px;
    background: $red-light;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    padding: 2px;
    @include tablet {
      padding: 12px;
    }
  }
  &__text {
    display: block;
    color: $red-main;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__icon-wrapper {
    width: 43px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__icon {
    width: 25px;
    height: 25px;
    transition: transform .2s;
    color: $red-main;
  }
  &__icon-rotated {
    transform: rotate(45deg);
  }
  &__content {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    color: $brown;
    background: $white;
    padding: 18px 12px 16px;
    text-align: left;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.35px;
      padding-bottom: 12px;
    }
  }
}

.dropdown-transition-enter-active,
.dropdown-transition-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.dropdown-transition-enter-from,
.dropdown-transition-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
}

.dropdown-transition-enter-to,
.dropdown-transition-leave-from {
  opacity: 1;
  max-height: 400px;
}
</style>