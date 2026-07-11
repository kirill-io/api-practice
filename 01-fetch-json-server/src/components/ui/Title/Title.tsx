import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Title.module.css'

interface TitleProps extends Omit<ComponentPropsWithoutRef<'h2'>, 'children'> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  icon?: ReactNode
  className?: string
}

export const Title = ({ as: Tag = 'h2', icon, children, className, ...restProps }: TitleProps) => {
  return (
    <Tag className={clsx(styles.root, styles[Tag], className)} {...restProps}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </Tag>
  )
}
