<script setup lang="ts">
export interface TimeTableCard {
  id?: number;
  title?: string;
  description?: string;
  color: string;
}

defineProps<TimeTableCard>();
</script>

<template>
  <div class="card" :class="[`card--${color}`]">
    <h3 class="card__title" v-html="title"></h3>
    <p class="card__description" v-html="description"></p>
  </div>
</template>

<style scoped lang="scss">
.card {
  height: 117px;
  padding: 21px 16px;
  border-width: 4px;
  border-style: dashed;
  color: $azure-light;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 20px;
  @include tablet {
    padding: 11.5px 16px;
  }
  &__title {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $azure;
    @include tablet {
      font-size: 2.5rem;
    }
  }
  &__description {
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    vertical-align: middle;
    color: $brown;
    @include tablet {
      font-size: 1.25rem;
      letter-spacing: -0.35px;
    }
  }
}
.card--azure {
  border-color: $azure;
  .card__title {
    color: $azure;
  }
}
.card--green {
  border-color: $green-light;
  .card__title {
    color: $green;
  }
}
.card--orange {
  border-color: $orange-light;
  .card__title {
    color: $orange;
  }
}
.card--violet {
  border-color: $violet-light;
  .card__title {
    color: $violet;
  }
}
.card--red {
  border-color: $red-light;
  .card__title {
    color: $red-main;
  }
}
.card--blue {
  border-color: $blue-light;
  .card__title {
    color: $blue;
  }
}
</style>
