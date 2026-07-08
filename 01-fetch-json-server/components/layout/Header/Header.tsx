import { PROJECT_CONFIG } from '../../../src/config/project-config'
import styles from './Header.module.css'

const { projectNumber, title, subtitle } = PROJECT_CONFIG

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.brand}>
        <div className={styles.projectBadge}>{projectNumber}</div>
        <div className={styles.heading}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>
      <div>Обновить</div>
    </header>
  )
}
