import React, { ComponentProps } from 'react'
import { Icon } from './Icon';
// extends React.ComponentProps<'button'>
interface CtaButtonProps  {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'large';
    text?: string;
    children: React.ReactNode
    className?: string
}


export const CtaRoot = ({
  // variant = 'primary',
  // size = 'medium',
  children,
  className,
  ...props
}: CtaButtonProps) => {

  // const classes = `btn${variant} ${size} ${className}`
  return (
    <button className={className} {...props} >
        {children}
    </button>
  )
}

export const CtaIcon: React.FC<ComponentProps<typeof Icon>> = (props) => {
  return <Icon {...props} />
};

export const CtaText: React.FC<ComponentProps<'span'>> = ({
  children,
  ...props
}) => {
  return <span {...props}>{children}</span>
}

export const Cta = {
  Root: CtaRoot,
  Icon: CtaIcon,
  Text: CtaText
}