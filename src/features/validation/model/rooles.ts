import { string, number, boolean } from 'yup';

// правила валидации

const nameRule = string().required('Заполните это поле');

const phoneRule = string()
  .required('Заполните это поле')
  .test('len', 'Поле заполнено некорректно', value => {
    if (!value) return true;
    const digits = value.replace(/\D/g, '');
    // формат 11 цифр
    return digits.length === 11;
  });

const ageRule = number()
  .transform((value, originalValue) => {
    // если '' — возвращаем undefined, чтобы сработал required(), а не typeError()
    return originalValue === '' ? undefined : value;
  })
  .required('Заполните это поле')
  .typeError('Возраст должен быть числом');

const consentRule = boolean().oneOf([true], 'Необходимо согласие').required('Необходимо согласие');

export { nameRule, phoneRule, ageRule, consentRule };
