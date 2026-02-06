<template>
  <button class="arrow-btn" type="button">
    <svg class="arrow-btn__icon" width="18" height="15" aria-hidden="true">
      <use href="/sprite/sprite.svg#icon_arrow"></use>
    </svg>
  </button>
</template>

<style scoped lang="scss">
.arrow-btn {
  width: 52px;
  height: 52px;
  border: 3px solid $white;
  border-radius: 50%;
  background: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    border-color: rgba(255, 255, 255, 0.7);
    .arrow-btn__icon {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  &__icon {
    width: 18px;
    height: 15px;
    color: $white;
  }
}
</style>
<script setup lang="ts">
</script>