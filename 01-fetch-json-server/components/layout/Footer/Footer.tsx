import { PROJECT_CONFIG } from '../../../src/config/project-config'
import styles from './Footer.module.css'

const { slug, footerDescription } = PROJECT_CONFIG

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <span className={styles.slug}>{slug}</span>
      <span className={styles.description}>{footerDescription}</span>
    </footer>
  )
}
