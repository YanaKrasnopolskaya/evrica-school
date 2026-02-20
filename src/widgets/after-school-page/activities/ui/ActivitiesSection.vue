<script setup lang="ts">
import {InfoCardWithActivities} from "~/entities/cards";
import {CREATIVE_DATA, EDUCATIONAL_DATA, TECHNICAL_DATA} from "~/widgets/after-school-page/activities";
</script>

<template>
  <section class="activities">
    <h2 class="activities__title">Пространство кружков на&nbsp;выбор</h2>
    <div class="activities__cards-wrapper">
      <h3 class="activities__name">Технические и&nbsp;инженерные направления</h3>
      <div class="activities__cards">
        <info-card-with-activities v-for="card in TECHNICAL_DATA"
                                   class="card"
                                   :class="[`card--${card.id}`]"
                                   :key="card.id"
                                   :id="card.id"
                                   :title="card.title"
                                   :text="card.text"
                                   :icon="card.icon"
                                   :color="card.color" />
      </div>
    </div>
    <div class="activities__cards-wrapper activities__cards-wrapper--azure">
      <h3 class="activities__name">Образовательные и&nbsp;развивающие направления</h3>
      <div class="activities__cards">
        <info-card-with-activities v-for="card in EDUCATIONAL_DATA"
                                   class="card"
                                   :class="[`card--${card.id}`]"
                                   :key="card.id"
                                   :id="card.id"
                                   :title="card.title"
                                   :text="card.text"
                                   :icon="card.icon"
                                   :color="card.color" />
      </div>
    </div>
    <div class="activities__cards-wrapper activities__cards-wrapper--green">
      <h3 class="activities__name">Творческие и&nbsp;коммуникативные направления</h3>
      <div class="activities__cards">
        <info-card-with-activities v-for="card in CREATIVE_DATA"
                                   class="card"
                                   :class="[`card--${card.id}`]"
                                   :key="card.id"
                                   :id="card.id"
                                   :title="card.title"
                                   :text="card.text"
                                   :icon="card.icon"
                                   :color="card.color" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.activities {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
  margin-bottom: 60px;
  @include tablet {
    gap: 60px;
    margin-bottom: 100px;
  }
  @include desktop {
    gap: 56px;
    margin-bottom: 120px;
  }
  &__cards-wrapper {
    width: 100%;
    padding: 16px 10px 8px;
    border-radius: 24px;
    border: 4px dashed $orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @include tablet {
      padding: 58px 96px;
      gap: 40px;
    }
    @include desktop {
      padding: 60px 74px 76px 36px;
      gap: 60px;
      align-items: flex-start;
    }
  }
  &__name {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: $orange;
    @include tablet {
      font-size: 2.5rem;
    }
    @include desktop {
      width: 617px;
      text-align: left;
    }
  }
  &__cards {
    width: 100%;
    display: grid;
    gap: 12px;
    @include tablet {
      gap: 40px;
    }
    @include desktop {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      justify-items: center;
      .card--1 {
        transform: translate(5%, -8%);
      }
      .card--2 {
        transform: translate(-5%, 8%);
      }
    }
  }
}
.card {
  @include tablet {
    width: 535px;
    height: 236px;
  }
}
.activities__cards-wrapper--azure {
  border-color: $azure;
  .activities__name {
    color: $azure;
  }
  @include tablet {
    padding: 60px 27px;
    .activities__cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 20px;
    }
    .card {
      padding: 40px 25px 13px 32px;
      width: 326px;
      height: 249px;
      justify-content: flex-start;
    }
    .card--5 {
      grid-column: span 2;
      justify-self: center;
    }
  }
  @include desktop {
    width: 100%;
    padding: 60px 34px 84px;
    .activities__cards {
      width: 100%;
      grid-template-columns: repeat(6, 1fr);
      justify-items: flex-start;
    }
    .card {
      width: 400px;
      height: 217px;
    }
    .card--1 {
      grid-row: 1;
      grid-column: 1 / span 2;
      transform: translate(0.5%, -9%);
    }
    .card--2 {
      grid-row: 1;
      grid-column: 3 / span 4;
      transform: translate(0.5%, 9%);
      :deep(.card__title) {
        width: 100px;
      }
    }
    .card--3 {
      grid-row: 1;
      grid-column: 5 / span 6;
      transform: translate(10%, -9%);
    }
    .card--4 {
      grid-row: 2;
      grid-column: 2 / span 3;
      transform: translate(0, 9%);
    }
    .card--5 {
      grid-row: 2;
      grid-column: 4 / span 5;
      transform: translate(-19%, 9%);
      padding-right: 30px;
    }
  }
}
.activities__cards-wrapper--green {
  border-color: $green-light;
  .activities__name {
    color: $green;
  }
  @include tablet {
    padding: 58px 54px 98px;
    .activities__cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 49px 20px;
    }
    .card {
      width: 295px;
      height: 308px;
    }
    .card--1,
    .card--3 {
      transform: translate(-2%, 13%);
    }
    .card--2,
    .card--4{
      padding-left: 24px;
    }
  }
  @include desktop {
    padding: 59px 37px 98px;
    .card {
      padding: 41px 30px 40px 32px;
    }
    .activities__cards {
      grid-template-columns: repeat(4, 1fr);
      gap: 49px 20px;
    }
    .card--1 {
      transform: translate(-1%, 13%);
    }
    .card--2 {
      transform: translate(0, 0);
    }
    .card--3 {
      transform: translate(0, 6%);
    }
    .card--4 {
      transform: translate(0, -7%);
      padding-right: 20px;
    }
  }
}
.activities__cards-wrapper--azure,
.activities__cards-wrapper--green {
  @include tablet {
    margin-top: -26px;
  }
  @include desktop {
    margin-top: 0;
  }
}
</style>