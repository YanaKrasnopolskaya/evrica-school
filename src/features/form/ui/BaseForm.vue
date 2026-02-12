<script setup lang="ts">
import { BaseInput } from '~/shared/ui/input';
import { BaseButton, BaseCheck } from '~/shared/ui/button';
import { vMaska } from 'maska/vue';
import { useFormSubmit } from '~/features/form';
import { validateField } from '~/features/validation';
import type { FormData } from '~/features/form';

const consent = ref<boolean>(false);
const name = ref<string>('');
const phone = ref<string>('');
const age = ref<string>('');

const isBtnDisabled = ref<boolean>(false);
const buttonState = ref<'default' | 'success' | 'invalid' | 'server-error'>('default');

// меняем текст кнопки в зависимости от состояния
const buttonText = computed(() => {
  if (loading.value) {
    return 'Отправка...';
  }
  switch (buttonState.value) {
    case 'success':
      return 'Заявка отправлена';
    case 'invalid':
      return 'Заполните поля';
    case 'server-error':
      return 'Повторите попытку позже';
    default:
      return 'Оставить заявку';
  }
});

// сбрасываем кнопку до дефолта через 3сек
function resetButton(delay = 3000) {
  setTimeout(() => {
    buttonState.value = 'default';
    isBtnDisabled.value = false;
  }, delay);
}

const { submitForm, loading, success, serverError, errors } = useFormSubmit();

const handleSubmit = async () => {
  // перед отправкой сбрасываем состояние кнопки до дефолтного
  isBtnDisabled.value = false;
  buttonState.value = 'default';

  // отправляем форму
  await submitForm({
    name: name.value,
    phone: phone.value,
    age: age.value,
    consent: consent.value,
  });
  // состояние кнопки
  // если в массиве хоть одна ошибка - "invalid", если проблема на сервере - "server-error", если успешная отправка - "success"
  if (Object.values(errors.value).some(Boolean)) {
    buttonState.value = 'invalid';
  } else if (serverError.value) {
    isBtnDisabled.value = true;
    buttonState.value = 'server-error';
    resetButton();
  } else if (success.value) {
    isBtnDisabled.value = true;
    buttonState.value = 'success';
    name.value = '';
    phone.value = '';
    age.value = '';
    consent.value = false;
    resetButton();
  } else {
    buttonState.value = 'default';
  }
};

// функция для проверки одного поля на валидность при @blur
const handleValidate = async <K extends keyof FormData>(key: K, value: FormData[K]) => {
  errors.value[key] = await validateField(key, value);
};
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <base-input
      v-model="name"
      placeholder="Ваше имя"
      :required="true"
      :invalid="!!errors.name"
      :error-text="errors.name"
      @blur="handleValidate('name', name)"
    />
    <base-input
      v-model="phone"
      placeholder="+7 000 000 0000"
      v-maska="`+7 (###) ###-##-##`"
      :required="true"
      :invalid="!!errors.phone"
      :error-text="errors.phone"
      @blur="handleValidate('phone', phone)"
    />
    <base-input
      v-model="age"
      placeholder="Возраст ребёнка"
      :required="true"
      :invalid="!!errors.age"
      :error-text="errors.age"
      @blur="handleValidate('age', age)"
    />
    <base-check class="form__check" v-model="consent" :invalid="!!errors.consent" :required="true">
      <template #check-text>
        <span class="form__consent-text">Я согласен с политикой конфиденциальности</span>
      </template>
    </base-check>
    <base-button
      class="form__btn"
      v-model:state="buttonState"
      type="submit"
      :disabled="isBtnDisabled || loading"
      >{{ buttonText }}</base-button
    >
  </form>
</template>

<style scoped lang="scss">
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: transparent;
  &__consent-text {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 120%;
    letter-spacing: 0;
    vertical-align: middle;
    color: $brown;
    opacity: 46%;
    @include tablet {
      font-size: 1rem;
    }
  }
  &__btn {
    width: 280px;
    padding: 14px;
    margin-top: 8px;
    font-size: 1.25rem;
    @include tablet {
      width: 100%;
      height: 84px;
      margin-top: 14px;
      font-size: 1.375rem;
    }
    @include desktop {
      margin-top: 12px;
    }
  }
}
</style>
