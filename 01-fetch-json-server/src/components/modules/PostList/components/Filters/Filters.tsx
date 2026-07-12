import clsx from 'clsx'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/Input/Input'
import { Select } from '@/components/ui/Select/Select'
import styles from './Filters.module.css'

interface FiltersProps {
  className?: string
  searchQuery: string
  selectedAuthor: string
  authorOptions: {
    value: string
    label: string
  }[]
  onSearchQueryChange: (value: string) => void
  onSelectedAuthorChange: (value: string) => void
}

export const Filters = ({
  className,
  searchQuery,
  selectedAuthor,
  authorOptions,
  onSearchQueryChange,
  onSelectedAuthorChange,
}: FiltersProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Input
        className={styles.search}
        type="search"
        value={searchQuery}
        startIcon={<Search />}
        placeholder="Поиск по заголовку или автору..."
        onChange={(event) => {
          onSearchQueryChange(event.target.value)
        }}
      />

      <Select
        className={styles.authorSelect}
        value={selectedAuthor}
        options={authorOptions}
        placeholder="Все авторы"
        onChange={onSelectedAuthorChange}
      />
    </div>
  )
}
