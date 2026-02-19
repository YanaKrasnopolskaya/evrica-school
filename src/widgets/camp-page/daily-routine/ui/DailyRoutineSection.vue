<script setup lang="ts">
import {TimeTableCard} from "~/entities/cards";
import {DAILY_ROUTINE_COUNTRY_DATA, DAILY_ROUTINE_URBAN_DATA} from "~/widgets/camp-page/daily-routine";
</script>

<template>
  <section class="daily-routine-wrapper">
    <h2 class="daily-routine-wrapper__title">Режим дня в&nbsp;наших лагерях</h2>
    <div class="daily-routine">
      <div class="daily-routine__cards-wrapper">
        <span class="daily-routine__camp-name daily-routine__camp-name--urban">Городской лагерь</span>
        <time-table-card v-for="card in DAILY_ROUTINE_URBAN_DATA"
                         class="daily-routine__card"
                         :title="card.title"
                         :description="card.description"
                         :color="card.color" />
      </div>
      <div class="daily-routine__cards-wrapper">
        <span class="daily-routine__camp-name daily-routine__camp-name--country">Загородный лагерь</span>
        <time-table-card v-for="card in DAILY_ROUTINE_COUNTRY_DATA"
                         class="daily-routine__card"
                         :title="card.title"
                         :description="card.description"
                         :color="card.color" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.daily-routine-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 60px;
  @include tablet {
    gap: 60px;
    margin-bottom: 100px;
  }
  @include desktop {
    align-items: flex-start;
    margin-bottom: 120px;
  }
  &__title {
    @include desktop {
      text-align: left;
    }
  }
}
.daily-routine {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @include tablet {
    gap: 50px;
  }
  @include desktop {
    flex-direction: row;
    gap: 20px;
  }
  &__cards-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__camp-name {
    display: block;
    border-radius: 16px;
    padding: 31px;
    background: $azure-extra-light url("/images/mobile/card-bg-img.webp") no-repeat left bottom;
    width: 100%;
    color: $azure;
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 10px;
    @include tablet {
      font-size: 2.5rem;
      margin-bottom: 20px;
      padding: 38.5px;
    }
  }
  &__camp-name--country {
    color: $green-dark;
    background-color: $green-extra-light;
  }
  &__card {
    justify-content: center;
    @include desktop {
      padding-right: 0;
    }
  }
}
</style>