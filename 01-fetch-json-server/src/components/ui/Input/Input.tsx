import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Input.module.css'

type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'className'> & {
  className?: string
  startIcon?: ReactNode
}

export const Input = ({ className, startIcon, ...restProps }: InputProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}

      <input
        className={clsx(styles.input, startIcon && styles.inputWithStartIcon)}
        {...restProps}
      />
    </div>
  )
}
