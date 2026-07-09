import styles from './PostsPage.module.css'
import { Header } from '../../../components/layout/Header/Header'
import { Footer } from '../../../components/layout/Footer/Footer'

export const PostsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>PostsPage</main>
      <Footer />
    </div>
  )
}
