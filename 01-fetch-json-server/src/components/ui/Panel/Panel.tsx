import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './Panel.module.css'

interface PanelProps extends PropsWithChildren {
  className?: string
}

export const Panel = ({ children, className }: PanelProps) => {
  return <section className={clsx(styles.root, className)}>{children}</section>
}
