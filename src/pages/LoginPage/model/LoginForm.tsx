import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { EyeClosedIcon } from '~/assets/icons/EyeClosedIcon';
import { EyeIcon } from '~/assets/icons/EyeIcon';
import { ROUTES } from '~/shared/constants/routes';

import { login } from '../../../shared/api/auth';
import { loginSchema, type LoginFormValues } from '../../../shared/schemas/loginSchema';
import { Button } from '../../../shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';
import styles from '../ui/LoginForm.module.css';

export const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data);
      window.location.href = ROUTES.PROFILE;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError('password', {
          type: 'manual',
          message: error.message || 'Неверный логин или пароль',
        });
      } else {
        setError('password', {
          type: 'manual',
          message: 'Неверный логин или пароль',
        });
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('auth.title')}</h1>
      <p className={styles.subtitle}>{t('auth.subtitle')}</p>

      <form className={styles.fields} onSubmit={handleSubmit(onSubmit)}>
        <Input label='Email' type='email' {...register('email')} error={errors.email?.message} />

        <Input
          label='Пароль'
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          error={errors.password?.message}
          rightIcon={
            showPassword ? (
              <EyeIcon onClick={() => setShowPassword(false)} style={{ cursor: 'pointer' }} />
            ) : (
              <EyeClosedIcon onClick={() => setShowPassword(true)} style={{ cursor: 'pointer' }} />
            )
          }
        />

        <Button className={styles.button} type='submit' disabled={isSubmitting}>
          {t('auth.login')}
        </Button>
      </form>

      <button type='button' className={styles.forgot}>
        {t('auth.forgotPassword')}
      </button>
    </div>
  );
};
