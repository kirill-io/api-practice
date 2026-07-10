import clsx from 'clsx'
import { RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/Button/Button'
import { PROJECT_CONFIG } from '@/config/project-config'
import styles from './Header.module.css'

const { projectNumber, title, subtitle } = PROJECT_CONFIG

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={clsx(styles.root, className)}>
      <div className={styles.brand}>
        <div className={styles.projectBadge}>{projectNumber}</div>
        <div className={styles.heading}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
      <Button variant="secondary" size="md" icon={<RefreshCw size={16} />}>
        Обновить
      </Button>
    </header>
  )
}
