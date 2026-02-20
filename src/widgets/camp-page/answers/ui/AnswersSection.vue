<script setup lang="ts">
import BaseDropdown from "~/shared/ui/dropdown/ui/BaseDropdown.vue";
import {ANSWERS_DATA} from "~/widgets/camp-page/answers";
</script>

<template>
  <section class="answers">
    <h2 class="answers__title">Отвечаем на&nbsp;частые вопросы</h2>
    <div class="answers__cards-wrapper">
      <div class="answers__cards">
        <base-dropdown v-for="item in ANSWERS_DATA.slice(0, 3)" :label="item.question">
          <template #dropdown-text>
            <span v-html="item.answer"></span>
          </template>
        </base-dropdown>
      </div>
      <div class="answers__cards">
        <base-dropdown v-for="item in ANSWERS_DATA.slice(3)" :label="item.question">
          <template #dropdown-text>
            <span v-html="item.answer"></span>
          </template>
        </base-dropdown>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.answers {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 60px;
  @include tablet {
    gap: 60px;
    margin-bottom: 100px;
  }
  @include desktop {
    margin-bottom: 118px;
  }
  &__title {
    text-align: left;
  }
  &__cards-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include desktop {
      flex-direction: row;
      gap: 24px;
    }
  }
  &__cards {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>