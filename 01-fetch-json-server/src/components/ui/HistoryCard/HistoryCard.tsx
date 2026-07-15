import clsx from 'clsx'
import { Badge } from '../Badge/Badge'
import styles from './HistoryCard.module.css'
import type { RequestHistoryItem } from '@/mocks/history'

interface HistoryCardProps {
  className?: string
  historyItem: RequestHistoryItem
}

export const HistoryCard = ({ className, historyItem }: HistoryCardProps) => {
  const { method, endpoint, result, statusCode, message, createdAt } = historyItem

  const formattedTime = new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(createdAt))

  return (
    <article className={clsx(styles.root, className)}>
      <Badge className={styles.method} variant={method}>
        {method}
      </Badge>

      <span className={styles.endpoint}>{endpoint}</span>

      <Badge className={styles.status} variant={result}>
        {statusCode}
      </Badge>

      <span className={styles.message} title={message}>
        {message}
      </span>

      <time className={styles.time} dateTime={createdAt}>
        {formattedTime}
      </time>
    </article>
  )
}
