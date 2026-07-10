import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  icon?: ReactNode
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled,
  isLoading = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        isLoading && styles.loading,
        className,
      )}
    >
      <span className={styles.content}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
      </span>

      {isLoading && <span className={styles.spinner} />}
    </button>
  )
}
