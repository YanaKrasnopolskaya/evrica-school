<script setup lang="ts">
import {groupCardsByColor} from "~/shared/utils/group-cards/groupCardsByColor";
import {TIMETABLE_DATA} from "~/widgets/kids-club-page/timetable";
import {TimeTableCard} from "~/entities/cards";

const colorGroups = groupCardsByColor(TIMETABLE_DATA);
</script>

<template>
  <section class="timetable">
    <div class="timetable__info">
      <h2 class="timetable__title">Баланс между&nbsp;активностью и&nbsp;отдыхом</h2>
      <span class="timetable__text">Мы&nbsp;работаем по&nbsp;будням с&nbsp;8:00&nbsp;до&nbsp;18:00</span>
    </div>
    <div class="timetable__card-box">
      <div v-for="group in colorGroups"
           :key="group.color"
           class="timetable__cards-wrapper"
      >
        <time-table-card v-for="card in group.cards"
                         class="timetable__card"
                         :class="[`card--${card.id}`]"
                         :key="card.id"
                         :title="card.title"
                         :description="card.description"
                         :color="card.color"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.timetable {
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-bottom: 60px;
  @include tablet {
    gap: 60px;
    margin-bottom: 102px;
  }
  @include desktop {
    margin-bottom: 122px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    @include tablet {
      gap: 28px;
    }
    @include desktop {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  &__title {
    @include desktop {
      width: 650px;
      text-align: left;
    }
  }
  &__text {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    @include tablet {
      font-size: 1.375rem;
    }
  }
  &__card-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__cards-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include desktop {
      flex-direction: row;
    }
  }
  &__card {
    @include desktop {
      flex: 1;
    }
  }
}
.card--2,
.card--3 {
  padding: 11.5px 16px;
}
</style>