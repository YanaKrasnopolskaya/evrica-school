<script setup lang="ts">
import {BaseForm} from "~/features/form";

defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div class="box">
    <div class="box__info">
      <h2 class="box__info-title" v-html="title"></h2>
      <p class="box__info-description" v-html="description"></p>
    </div>
    <base-form class="box__form" />
  </div>
</template>

<style scoped lang="scss">
.box {
  padding: 60px 16px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 38px;
  background: $red-light url("/images/mobile/form-bg-img.webp") no-repeat center bottom;
  margin-bottom: 60px;
  @include tablet {
    background-image: url('/images/tablet/tb-form-bg-img.webp');
    padding: 100px 104px;
    gap: 50px;
    margin-bottom: 100px;
  }
  @include desktop {
    background-image: url('/images/desktop/dt-form-bg-img.webp');
    background-position: center right;
  }
  @include desktop {
    padding: 120px;
    flex-direction: row;
    gap: 48px;
    margin-bottom: 120px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 19px;
    @include tablet {
      gap: 60px;
      padding-left: 6px;
    }
    @include desktop {
      padding-left: 0;
    }
  }
  &__info-title {
    text-align: left;
  }
  &__info-description {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.35px;
    }
  }
}
</style>