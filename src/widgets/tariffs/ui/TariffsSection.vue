<script setup lang="ts">

defineProps({
  title: String,
})
</script>

<template>
  <section class="tariffs">
    <h2 class="tariffs__title" v-html="title"></h2>
    <div class="tariffs__cards-wrapper">
      <slot name="cards"></slot>
    </div>
    <slot name="additional-content"></slot>
  </section>
</template>

<style scoped lang="scss">
.tariffs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  margin-bottom: 58px;
  @include tablet {
    gap: 58px;
    margin-bottom: 100px;
  }
  @include desktop {
    margin-bottom: 120px;
  }
  &__cards-wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    align-items: center;
    justify-items: flex-start;
    @include tablet {
      gap: 24px;
    }
    @include desktop {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>