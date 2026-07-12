import clsx from 'clsx'
import { FileText } from 'lucide-react'
import { Title } from '@/components/ui/Title/Title'
import styles from './PostList.module.css'
import { mockPosts } from '@/mocks/posts'

interface PostListProps {
  className?: string
}

export const PostList = ({ className }: PostListProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.heading}>
        <Title as="h2" icon={<FileText />} className={styles.title}>
          Список постов
        </Title>
        <span className={styles.count}>{mockPosts.length}</span>
      </div>
      <div className={styles.filters}></div>
    </div>
  )
}
