// components/Profile/Profile.tsx
import { LogoutIcon } from '~/assets/icons';
import { logout } from '~/shared/api/auth';
import { Input } from '~/shared/ui';
import { Textarea } from '~/shared/ui/TextArea/TextArea';

import styles from '../ui/ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Профиль</h1>
        <LogoutIcon className={styles.logouticon} onClick={logout} />
      </div>
      <div className={styles.profile}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarPlaceholder}>AO</div>
          <button className={styles.changeAvatarButton}>Сменить аватар</button>
        </div>
      </div>{' '}
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
        <h3 className={styles.sectionTitle}>Редактирование данных</h3>

        <div className={styles.inputsBlock}>
          <Input label='ФИО' defaultValue='ИМЯ' className={styles.inputInline} />
          <Input
            label='Email'
            type='email'
            defaultValue='example@mail.com'
            className={styles.inputInline}
          />
        </div>
      </div>
      <div className='aboutBlock'>
        <h5 className='aboutTitle'>О себе</h5>
        {/* <Textarea name='about' label='' /> */}
      </div>
    </div>
  );
};
export { ProfilePage };
