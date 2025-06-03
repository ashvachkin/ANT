// Input.tsx
import clsx from 'clsx';
import { forwardRef, useState, FocusEvent, InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  rightIcon?: React.ReactNode;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, rightIcon, error, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const isActive = isFocused || rest.value;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (!e.target.value) setIsFocused(false);
      if (rest.onBlur) rest.onBlur(e);
    };

    return (
      <div className={styles.inputWrapper}>
        <label className={clsx(styles.label, isActive && styles.labelActive)}>{label}</label>
        <div className={styles.inputInner}>
          <input
            className={clsx(styles.input, error && styles.inputError)}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
          {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  },
);

Input.displayName = 'Input';
