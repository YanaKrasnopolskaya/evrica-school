import { formSchema } from '~/features/validation';
import axios from 'axios';
import type { FormData } from '~/features/form';

export const useFormSubmit = () => {
  const loading = ref(false);
  const success = ref(false);
  const serverError = ref(false);
  // храним ошибки каждого поля
  const errors = ref<Record<string, string | null>>({
    name: null,
    phone: null,
    age: null,
    consent: null,
  });

  const submitForm = async (data: FormData) => {
    try {
      // актуальное состояние процесса отправки
      loading.value = true;
      success.value = false;
      serverError.value = false;
      // очищаем старые ошибки
      Object.keys(errors.value).forEach(key => (errors.value[key] = null));

      // проверяем валидность. abortEarly: false - Не останавливается на первом err-поле, проверяет до конца
      await formSchema.validate(data, { abortEarly: false });

      // если валидация успешна, отправляем
      const response = await axios.post('https://httpbin.org/post', data);
      success.value = true;
    } catch (err: any) {
      // в yup ошибки лежат в массиве err.inner. Если массив есть, перебираем массив, записываем ошибки в невалидные поля
      if (err.inner && Array.isArray(err.inner)) {
        err.inner.forEach((e: any) => {
          errors.value[e.path] = e.message;
        });
      } else {
        // иначе ошибка с сервера
        console.error(err.message);
        serverError.value = true;
      }
    } finally {
      // сбрасываем состояние отправки
      loading.value = false;
    }
  };

  return {
    loading,
    errors,
    success,
    serverError,
    submitForm,
  };
};
