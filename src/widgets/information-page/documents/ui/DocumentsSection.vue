<script setup lang="ts">
import {CardWithDocument} from "~/entities/cards";
import {DOCUMENTS_DATA} from "~/widgets/information-page/documents";
</script>

<template>
  <section class="documents">
    <div class="cards-wrapper">
      <card-with-document v-for="card in DOCUMENTS_DATA"
                          class="card"
                          :class="[`card--${card.id}`]"
                          :title="card.title"
                          :link="card.link"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.documents {
  margin-bottom: 56px;
  @include tablet {
    padding: 0 60px;
    margin-bottom: 79px;
  }
  @include desktop {
    padding: 0;
    margin-bottom: 120px;
  }
}
.cards-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @include tablet {
    gap: 32px;
  }
  @include desktop {
    flex-direction: row;
    gap: 24px;
  }
}
.card {
  height: 270px;
  @include desktop {
    height: 420px;
  }
}
</style>