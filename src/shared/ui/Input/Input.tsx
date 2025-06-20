import clsx from 'clsx';
import { forwardRef, useState, FocusEvent, InputHTMLAttributes, ChangeEvent } from 'react';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  rightIcon?: React.ReactNode;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, rightIcon, error, value, defaultValue, onBlur, onFocus, onChange, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(
      value !== undefined ? Boolean(value) : Boolean(defaultValue),
    );

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(Boolean(e.target.value));
      if (onBlur) onBlur(e);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setHasValue(Boolean(e.target.value));
      if (onChange) onChange(e);
    };

    const isActive = isFocused || hasValue;

    return (
      <div className={styles.inputWrapper}>
        <label className={clsx(styles.label, isActive && styles.labelActive)}>{label}</label>
        <div className={clsx(styles.inputInner, error && styles.inputError)}>
          <input
            className={styles.input}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
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
