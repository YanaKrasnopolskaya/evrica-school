import { object } from 'yup';
import { ageRule, nameRule, phoneRule, consentRule } from '~/shared/utils/validation';

// схема валидации
export const formSchema = object({
  name: nameRule,
  phone: phoneRule,
  age: ageRule,
  consent: consentRule,
});
