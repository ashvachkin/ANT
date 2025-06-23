import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { Error403Picture } from '~/assets/images/Error403Picture';
import { ROUTES } from '~/shared/constants/routes';
import { Button } from '~/shared/ui';

import styles from './Error403.module.css';

export const Error403Page = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className={styles.section}>
      <div className={styles.contentContainer}>
        <Error403Picture className={styles.image} />
        <div>{t('errors.noAccess')}</div>
        <div className={styles.buttonContainer}>
          <Button onClick={handleBack}>{t('errors.back')}</Button>
        </div>
      </div>
    </div>
  );
};
