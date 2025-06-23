import { z } from 'zod';

export const profileEditSchema = z.object({
  login: z.string().min(4, 'Укажите логин'),
  name: z.string().min(2, 'Укажите имя'),
  about: z.string().min(5, 'Укажите информацию'),
});

export type profileEditValues = z.infer<typeof profileEditSchema>;
