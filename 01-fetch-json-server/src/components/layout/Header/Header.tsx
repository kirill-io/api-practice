import clsx from 'clsx'
import { RefreshCw } from 'lucide-react'
import { Title } from '@/components/ui/Title/Title'
import { Button } from '@/components/ui/Button/Button'
import { PROJECT_CONFIG } from '@/config/project-config'
import styles from './Header.module.css'

const { projectNumber, title, subtitle } = PROJECT_CONFIG

interface HeaderProps {
  className?: string
  onRefresh?: () => void
  isRefreshLoading?: boolean
}

export const Header = ({ className, onRefresh, isRefreshLoading = false }: HeaderProps) => {
  return (
    <header className={clsx(styles.root, className)}>
      <div className={styles.brand}>
        <div className={styles.projectBadge}>{projectNumber}</div>
        <div className={styles.heading}>
          <Title as="h1" className={styles.title}>
            {title}
          </Title>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
      <Button
        variant="secondary"
        size="md"
        icon={<RefreshCw size={16} />}
        onClick={onRefresh}
        isLoading={isRefreshLoading}
      >
        Обновить список
      </Button>
    </header>
  )
}
