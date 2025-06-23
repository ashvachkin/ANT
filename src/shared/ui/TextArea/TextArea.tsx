import clsx from 'clsx';
import {
  forwardRef,
  useState,
  useRef,
  TextareaHTMLAttributes,
  MouseEvent as ReactMouseEvent,
} from 'react';

import { Typography } from '../Typography/Typography';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  loading?: boolean;
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, loading = false, className, value, defaultValue, ...rest }, ref) => {
    const minWidth = 300;
    const minHeight = 150;
    const [size, setSize] = useState({ width: minWidth, height: minHeight });

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const combinedRef = (el: HTMLTextAreaElement | null) => {
      textareaRef.current = el;
      if (typeof ref === 'function') {
        ref(el);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = el;
      }
    };

    const startResize = (e: ReactMouseEvent<HTMLDivElement>) => {
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

    if (loading) {
      return (
        <>
          <Typography
            component='label'
            variant='h5'
            compact
            bold
            value={label}
            loading
            width={10}
          />
          <div className='textareaWrapper skeleton' />
        </>
      );
    }

    return (
      <>
        {label && (
          <Typography component='label' variant='h5' compact bold>
            {label}
          </Typography>
        )}
        <div className={clsx('textareaWrapper', className, { 'is-error': !!error })}>
          <textarea
            ref={combinedRef}
            className='customTextarea'
            rows={4}
            style={{
              width: size.width,
              height: size.height,
              minWidth,
              minHeight,
            }}
            value={value}
            defaultValue={defaultValue}
            {...rest}
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
        {error && <div className='message'>{error}</div>}
      </>
    );
  },
);

Textarea.displayName = 'Textarea';
