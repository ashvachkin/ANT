import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({ fullWidth, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, className, {
        [styles.fullWidth]: fullWidth,
      })}
    />
  );
};
