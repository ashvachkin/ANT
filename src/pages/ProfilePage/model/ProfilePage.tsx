import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { LogoutIcon } from '~/assets/icons';
import { api } from '~/shared/api';
import { logout } from '~/shared/api/auth';
import { profileEditSchema, profileEditValues } from '~/shared/schemas/profileEditSchema';
import { Input } from '~/shared/ui';
import { Textarea } from '~/shared/ui/TextArea/TextArea';
import { Sidebar } from '~/widgets/Sidebar';

import styles from '../ui/ProfilePage.module.css';

const ProfilePage = () => {
  const methods = useForm<profileEditValues>({
    resolver: zodResolver(profileEditSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const onSubmit = (data: profileEditValues) => {
    console.log('Данные профиля:', data);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);

    if (!file.type.startsWith('image/')) {
      setUploadError('Неверный формат файла');
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);

    const formData = new FormData();
    formData.append('file', file);

    try {
      await api.users.usersControllerUploadPicture({ file });
      console.log('Фото успешно загружено');
    } catch (error) {
      console.error('Ошибка загрузки:', error);
      setUploadError('Ошибка при загрузке фотографии');
    }
  };

  return (
    <FormProvider {...methods}>
      <Sidebar />

      <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.header}>
          <h1>Профиль</h1>
          <LogoutIcon className={styles.logouticon} onClick={logout} />
        </div>

        <div className={styles.profile}>
          <div className={styles.avatarWrapper}>
            {selectedImage ? (
              <img src={selectedImage} alt='avatar' className={styles.avatarImage} />
            ) : (
              <div className={styles.avatarPlaceholder} />
            )}

            <label htmlFor='avatar-upload' className={styles.changeAvatarButton}>
              {t('profile.changeAvatar')}
            </label>
            <input
              id='avatar-upload'
              type='file'
              accept='image/*'
              onChange={handleFileChange}
              className={styles.hiddenInput}
            />

            {uploadError && <p className={styles.errorText}>{uploadError}</p>}
          </div>
        </div>

        <div className={styles.nameBlock}>
          <h4 className={styles.fullName}>Елена Хиллз</h4>
          <span className={styles.username}>@username</span>
        </div>

        <div className={styles.description}>
          Я дизайнер из Филадельфии, создаю крутой софт в Figma.
        </div>

        <div className={styles.linksBlock}>
          <a href='https://website.com' className={styles.linkItem}>
            website.com
          </a>
          <a href='https://github.com' className={styles.linkItem}>
            github.com
          </a>
          <a href='https://t.me/username' className={styles.linkItem}>
            @telegram
          </a>
          <a href='https://vk.com' className={styles.linkItem}>
            vk.com
          </a>
        </div>

        <div className={styles.editSection}>
          <h3 className={styles.sectionTitle}>{t('profile.editData')}</h3>

          <div className={styles.inputsBlock}>
            <Input
              label='ФИО'
              {...register('name')}
              error={errors.name?.message}
              className={styles.inputInline}
            />
            <Input
              label='Login'
              type='login'
              {...register('login')}
              error={errors.login?.message}
              className={styles.inputInline}
            />
          </div>
        </div>

        <div className='aboutBlock'>
          <h5 className='aboutTitle'>{t('profile.about')}</h5>
          <Textarea label='О себе' {...register('about')} error={errors.about?.message} />
        </div>

        <button type='submit' disabled={isSubmitting}>
          Сохранить
        </button>
      </form>
    </FormProvider>
  );
};

export { ProfilePage };
