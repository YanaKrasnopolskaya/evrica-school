<script setup lang="ts">
import BaseDropdown from "~/shared/ui/dropdown/ui/BaseDropdown.vue";
import {INFO_DATA} from "~/widgets/information-page/info/model/INFO_DATA";
</script>

<template>
  <section class="info">
    <h2 class="info__title">Cведения об образовательной организации</h2>
    <p class="info__text">АНО ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ ЦЕНТР РАЗВИТИЯ ЭВРИКА,<br><span>Полное название организации</span><br>АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ "ЦЕНТР РАЗВИТИЯ "ЭВРИКА"<br><br><span>Адрес:</span> 650056, Кемеровская область&nbsp;&mdash; Кузбасс, г. Кемерово, бульвар Строителей, д. 25Г пом.&nbsp;108<br><span>Организация филиалов и&nbsp;структурных подразделений не&nbsp;имеет</span><br><span>зарегистрирована</span> 24.04.2017 <span><br>Учредитель</span>&nbsp;- Надцонов Денис Викторович<br><span>Директор</span>&nbsp;- Драгун Ольга Юрьевна</p>
    <ul class="info__list">
      <li v-for="item in INFO_DATA" :key="item.id" class="info__list-item" >
        <base-dropdown class="info__drop" :label="item.name">
          <template #dropdown-text>
            <p class="info__drop-text" v-html="item.description"></p>
          </template>
        </base-dropdown>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 60px;
  margin-bottom: 60px;
  @include tablet {
    margin-top: 80px;
    margin-bottom: 80px;
  }
  @include desktop {
    gap: 60px;
    margin-top: 120px;
    margin-bottom: 120px;
    padding: 0 220px;
  }
  &__text {
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 0;
  }
  &__text span {
    font-weight: 500;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__drop {
    display: flex;
    flex-direction: column;
    gap: 4px;
    :deep(.dropdown__btn) {
      padding: 7px 4px 12px 12px;
      @include tablet {
        padding: 10px 4px 12px 12px;
      }
    }
    :deep(.dropdown__content) {
      padding: 13px 12px 13px 13px;
    }
    :deep(.dropdown__icon) {
      width: 20px;
      height: 20px;
    }
  }
  &__drop-text {
    font-weight: 300;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0;
    color: $brown;
    @include tablet {
      font-size: 1.25rem;
    }
  }
  &__drop-text :deep(span) {
    font-weight: 500;
  }
}
</style>