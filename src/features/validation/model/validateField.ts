import { formSchema } from '~/features/validation';
import type { FormData } from '~/features/form';

// функция проверки поля(для фокуса и др.).
export async function validateField<T extends keyof FormData>(
  key: T,
  value: FormData[T]
): Promise<string | null> {
  try {
    // передаём в yup на проверку временный объект с названием поля и значением из FormData. Если валидно возвращаем null, иначе ntrcn jib,rb
    await formSchema.validateAt(key, { [key]: value });
    return null;
  } catch (err: any) {
    return err.message;
  }
}
