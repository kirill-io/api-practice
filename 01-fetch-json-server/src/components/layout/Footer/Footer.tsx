import clsx from 'clsx'
import { PROJECT_CONFIG } from '@/config/project-config'
import styles from './Footer.module.css'

const { slug, footerDescription } = PROJECT_CONFIG

interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={clsx(styles.root, className)}>
      <span className={styles.slug}>{slug}</span>
      <span className={styles.description}>{footerDescription}</span>
    </footer>
  )
}
