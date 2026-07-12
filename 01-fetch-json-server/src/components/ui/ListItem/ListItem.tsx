import type { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './ListItem.module.css'

interface ListItemProps {
  className?: string
  children: ReactNode
  density: 'comfortable' | 'compact'
}

export const ListItem = ({ children, className, density }: ListItemProps) => {
  return <li className={clsx(styles.root, styles[density], className)}>{children}</li>
}
