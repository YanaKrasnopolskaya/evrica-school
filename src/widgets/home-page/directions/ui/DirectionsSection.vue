<script setup lang="ts">
import {InfoCardWithList} from "~/entities/cards";
import {DIRECTION_DATA} from "~/widgets/home-page/directions";
</script>

<template>
  <div class="directions">
    <h2 class="directions__title">Направления, расширяющие кругозор и&nbsp;навыки</h2>
    <div class="directions__cards-wrapper">
      <info-card-with-list v-for="(card, index) in DIRECTION_DATA"
                           :key="index"
                           :title="card.title"
                           :color="card.color"
                           :description="card.description"
                           :icon="card.icon"
                           :icon-width="card.iconWidth"
                           :icon-height="card.iconHeight"
                           :items="card.items"
                           :page="card.page"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.directions {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  @include tablet {
    gap: 60px;
    margin-bottom: 100px;
  }
  @include desktop {
    margin-bottom: 120px;
  }
  &__title {
    @include desktop {
      width: 686px;
    }
  }
  &__cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include tablet {
      gap: 47px;
    }
    @include desktop {
      flex-direction: row;
      gap: 24px;
    }
  }
}
</style>