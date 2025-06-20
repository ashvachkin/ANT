import clsx from 'clsx';
import { ComponentPropsWithRef, ReactNode } from 'react';

import './Typography.module.css';

type TextElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'strong'
  | 'em'
  | 'small'
  | 'label';
type TextStyle =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'paragraph1'
  | 'paragraph2'
  | 'paragraph3'
  | 'paragraph1Bold'
  | 'paragraph2Bold'
  | 'paragraph3Bold'
  | 'caption1'
  | 'caption2'
  | 'button1'
  | 'button2';
type TextProps<C extends TextElement> = {
  component?: C;
  variant?: TextStyle;
  children?: ReactNode;
  className?: string;
  compact?: boolean;
  bold?: boolean;
  centered?: boolean;
  value?: string;
  loading?: boolean;
  width?: number;
} & Omit<ComponentPropsWithRef<C>, 'className' | 'children'>;

export function Typography<C extends TextElement>({
  component,
  children,
  variant,
  compact = false,
  bold = false,
  centered = false,
  className = '',
  value = '',
  loading = false,
  width = 0,
  ...rest
}: TextProps<C>) {
  const Component = component || 'span';
  const classes = clsx(
    variant,
    {
      compact: compact,
      centered: centered,
      bold: bold,
      regular: !bold,
      skeleton: loading,
    },
    className,
  );
  if (loading) return <div className={classes} style={{ maxInlineSize: `${width}ch` }} />;
  return (
    <Component className={classes} {...rest}>
      {children ?? value}
    </Component>
  );
}
