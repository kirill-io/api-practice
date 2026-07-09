import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import styles from './PostsPage.module.css'

export const PostsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>PostsPage</main>
      <Footer />
    </div>
  )
}
