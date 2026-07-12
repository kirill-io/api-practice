import type { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './ScrollableList.module.css'

interface ScrollableListProps {
  className?: string
  children: ReactNode
  isEmpty: boolean
  emptyMessage: string
}

export const ScrollableList = ({
  children,
  className,
  isEmpty,
  emptyMessage,
}: ScrollableListProps) => {
  return (
    <div className={clsx(styles.root, 'scrollbar', className)}>
      {isEmpty ? <p className={styles.emptyMessage}>{emptyMessage}</p> : children}
    </div>
  )
}
