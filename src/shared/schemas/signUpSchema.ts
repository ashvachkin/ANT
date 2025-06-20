import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email('Некорректный email'),
  password: z.string().min(6, 'Пароль должен быть не менее 6 символов'),
  role: z.string(),
  firstName: z.string().min(2, 'Укажите имя'),
  secondName: z.string(),
});

export type SignUpFromValues = z.infer<typeof signUpSchema>;
