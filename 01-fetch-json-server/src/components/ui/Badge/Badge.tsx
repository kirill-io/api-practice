import clsx from 'clsx'
import styles from './Badge.module.css'
import type { PropsWithChildren } from 'react'

const BADGE_STYLES = {
  GET: styles.get,
  POST: styles.post,
  PUT: styles.patch,
  PATCH: styles.patch,
  DELETE: styles.delete,
  success: styles.success,
  error: styles.error,
} as const

interface BadgeProps extends PropsWithChildren {
  className?: string
  variant: keyof typeof BADGE_STYLES
}

export const Badge = ({ className, variant, children }: BadgeProps) => {
  return <span className={clsx(styles.root, BADGE_STYLES[variant], className)}>{children}</span>
}
