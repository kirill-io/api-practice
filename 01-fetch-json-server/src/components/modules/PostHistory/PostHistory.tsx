import clsx from 'clsx'
import { History as HistoryIcon } from 'lucide-react'
import { Title } from '@/components/ui/Title/Title'
import { History } from './components/History/History'
import styles from './PostHistory.module.css'
import type { RequestHistoryItem } from '@/mocks/history'

interface PostHistoryProps {
  className?: string
  history: RequestHistoryItem[]
}

export const PostHistory = ({ className, history }: PostHistoryProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Title as="h2" icon={<HistoryIcon />} className={styles.title}>
        История операций
      </Title>

      <History
        history={history}
        isEmpty={history.length === 0}
        emptyMessage="Истории операций пока нет"
      />
    </div>
  )
}
