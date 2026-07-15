import { Header } from '@/components/layout/Header/Header'
import { Panel } from '@/components/ui/Panel/Panel'
import { PostList } from '@/components/modules/PostList/PostList'
import { PostForm } from '@/components/modules/PostForm/PostForm'
import { PostHistory } from '@/components/modules/PostHistory/PostHistory'
import { Footer } from '@/components/layout/Footer/Footer'
import styles from './PostsPage.module.css'
import { mockPosts } from '@/mocks/posts'
import { requestHistoryMock } from '@/mocks/history'

export const PostsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <Panel className={styles.posts}>
          <PostList posts={mockPosts} />
        </Panel>

        <Panel className={styles.createPost}>
          <PostForm />
        </Panel>

        <Panel className={styles.operations}>
          <PostHistory history={requestHistoryMock} />
        </Panel>
      </main>
      <Footer />
    </div>
  )
}
