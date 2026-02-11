<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <section class="box">
    <img class="box__logo" src="/images/mobile/logo-absolute.png" alt="логотип" width="375" height="151" />
    <div class="box__content">
      <slot name="content"></slot>
    </div>

  </section>
</template>

<style scoped lang="scss">
.box {
  background: rgba(255, 246, 247, 1);
  margin-left: -16px;
  margin-right: -16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding-top: 144px;
  @include tablet {
    padding-top: 276px;
    margin-left: -20px;
    margin-right: -20px;
  }
  @include desktop {
    margin-left: -60px;
    margin-right: -60px;
  }
  &__logo {
    position: sticky;
    top: 144px;
    z-index: 1;
    width: 100%;
    height: auto;
  }
  &__content {
    width: 100%;
    padding: 0 16px 60px;
    position: relative;
    z-index: 2;
    background: transparent;
    margin-top: -73.5%;
    @include tablet {
      margin-top: -74%;
      padding: 0 18px 100px;
    }
    @include desktop {
      margin-top: -53.6%;
      padding: 0 60px 132px;
    }
  }
}
</style>