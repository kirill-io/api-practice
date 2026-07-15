import { ScrollableList } from '@/components/ui/ScrollableList/ScrollableList'
import { ListItem } from '@/components/ui/ListItem/ListItem'
import { HistoryCard } from '@/components/ui/HistoryCard/HistoryCard'
import styles from './History.module.css'
import type { RequestHistoryItem } from '@/mocks/history'

interface HistoryProps {
  history: RequestHistoryItem[]
  isEmpty: boolean
  emptyMessage: string
}

export const History = ({ history, ...scrollableListProps }: HistoryProps) => {
  return (
    <ScrollableList {...scrollableListProps}>
      <ul className={styles.root}>
        {history.map((historyItem) => (
          <ListItem key={historyItem.id} density="compact">
            <HistoryCard historyItem={historyItem} />
          </ListItem>
        ))}
      </ul>
    </ScrollableList>
  )
}
