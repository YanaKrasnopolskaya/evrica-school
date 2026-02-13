<script setup lang="ts">
interface Card {
  title?: string;
  description: string;
}

defineProps<Card>();
</script>

<template>
  <div class="card">
    <h3 v-if="title" class="card__title" v-html="title"></h3>
    <p class="card__description" v-html="description"></p>
    <slot name="icon"></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  width: 100%;
  border: 8px solid $white;
  border-radius: 24px;
  padding: 24px 16px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 120%;
  letter-spacing: 0;
  color: $brown;
  background: $white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  @include tablet {
    font-size: 1.25rem;
  }
  &__title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    @include tablet {
      font-size: 2.5rem;
    }
  }
  &__description {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.3px;
    }
  }
}
</style>