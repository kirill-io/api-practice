import { PROJECT_CONFIG } from '@/config/project-config'
import styles from './Header.module.css'

const { projectNumber, title, subtitle } = PROJECT_CONFIG

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.brand}>
        <div className={styles.projectBadge}>{projectNumber}</div>
        <div className={styles.heading}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
      <div>Обновить</div>
    </header>
  )
}
