import clsx from 'clsx';
import { Form } from 'radix-ui';
import { FC, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Typography } from '../Typography/Typography';

type TextareaProps = {
  name: string;
  loading?: boolean;
  label?: string;
  className?: string;
};
export const Textarea: FC<TextareaProps> = ({ name, loading = false, label = '' }) => {
  const context = useFormContext();
  if (!context) throw new Error('TextField must be used within a FormProvider');
  const {
    register,
    watch,
    formState: { errors },
  } = context;
  const value = watch(name);
  const error = errors[name]?.message as string | undefined;

  const { ref: rhfRef, ...restRegister } = register(name);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const setRefs = (el: HTMLTextAreaElement | null) => {
    textareaRef.current = el;
    rhfRef(el);
  };

  const minWidth = 300;
  const minHeight = 150;
  const [size, setSize] = useState({ width: minWidth, height: minHeight });

  const startResize = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.width;
    const startHeight = size.height;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);
      const newHeight = startHeight + (moveEvent.clientY - startY);
      setSize({
        width: Math.max(newWidth, minWidth),
        height: Math.max(newHeight, minHeight),
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  if (loading)
    return (
      <>
        <Typography
          component='label'
          variant='h5'
          compact
          bold
          value={label}
          loading={loading}
          width={10}
        />
        <div className='textareaWrapper skeleton' />
      </>
    );
  return (
    <>
      <Typography
        component='label'
        variant='h5'
        compact
        bold
        value={label}
        loading={loading}
        width={10}
      />
      <Form.Field
        name={name}
        className={clsx({
          'is-error': !!error,
        })}
      >
        <div className='textareaWrapper'>
          <textarea
            ref={setRefs}
            {...restRegister}
            className='customTextarea'
            rows={4}
            value={value}
            style={{
              width: size.width,
              height: size.height,
              minWidth: minWidth,
              minHeight: minHeight,
            }}
          />
          <div
            className='resizeHandle'
            role='button'
            tabIndex={0}
            aria-label='Изменить размер'
            onMouseDown={startResize}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
              }
            }}
          />
        </div>
        {error && <Form.Message className='message'>{error}</Form.Message>}
      </Form.Field>
    </>
  );
};
