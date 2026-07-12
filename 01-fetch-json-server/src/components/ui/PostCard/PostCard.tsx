import clsx from 'clsx'
import { CalendarDays, Eye, FileText, Pencil, Trash2, UserRound } from 'lucide-react'
import type { Post } from '@/api/types'
import { Title } from '@/components/ui/Title/Title'
import { Button } from '@/components/ui/Button/Button'
import styles from './PostCard.module.css'

interface PostCardProps {
  className?: string
  post: Post
  onView?: (post: Post) => void
  onEdit?: (post: Post) => void
  onDelete?: (post: Post) => void
}

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
})

export const PostCard = ({ className, post, onView, onEdit, onDelete }: PostCardProps) => {
  const { title, body, author, createdAt } = post

  const createdDate = new Date(createdAt)

  const formattedCreatedAt = Number.isNaN(createdDate.getTime())
    ? createdAt
    : dateFormatter.format(createdDate)

  return (
    <article className={clsx(styles.root, className)}>
      <div className={styles.icon}>
        <FileText />
      </div>

      <div className={styles.content}>
        <Title className={styles.title} as="h3" title={title}>
          {title}
        </Title>

        <p className={styles.body}>{body}</p>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <UserRound />
            <span className={styles.metaText}>{author}</span>
          </span>

          <time className={styles.metaItem} dateTime={createdAt}>
            <CalendarDays />
            <span className={styles.metaText}>{formattedCreatedAt}</span>
          </time>
        </div>
      </div>

      <div className={styles.actions}>
        <Button
          type="button"
          variant="primary"
          size="md"
          icon={<Eye />}
          className={styles.action}
          onClick={() => onView?.(post)}
        >
          Подробнее
        </Button>

        <Button
          type="button"
          variant="secondary"
          size="md"
          icon={<Pencil />}
          className={styles.action}
          onClick={() => onEdit?.(post)}
        >
          Редактировать
        </Button>

        <Button
          type="button"
          variant="danger"
          size="md"
          icon={<Trash2 />}
          className={styles.action}
          onClick={() => onDelete?.(post)}
        >
          Удалить
        </Button>
      </div>
    </article>
  )
}
