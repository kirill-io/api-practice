import { Header } from '@/components/layout/Header/Header'
import { Panel } from '@/components/ui/Panel/Panel'
import { Footer } from '@/components/layout/Footer/Footer'
import styles from './PostsPage.module.css'

export const PostsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <Panel className={styles.posts}>Список постов</Panel>
        <Panel className={styles.createPost}>Создать пост</Panel>
        <Panel className={styles.operations}>История операций</Panel>
      </main>
      <Footer />
    </div>
  )
}
