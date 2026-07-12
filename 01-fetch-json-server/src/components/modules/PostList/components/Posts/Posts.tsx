import type { Post } from '@/api/types'
import { ScrollableList } from '@/components/ui/ScrollableList/ScrollableList'
import { ListItem } from '@/components/ui/ListItem/ListItem'
import { PostCard } from '@/components/ui/PostCard/PostCard'
import styles from './Posts.module.css'

interface PostsProps {
  className?: string
  posts: Post[]
  isEmpty: boolean
  emptyMessage: string
}

export const Posts = ({ posts, ...scrollableListProps }: PostsProps) => {
  return (
    <ScrollableList {...scrollableListProps}>
      <ul className={styles.root}>
        {posts.map((post) => (
          <ListItem key={post.id} density="comfortable">
            <PostCard post={post} />
          </ListItem>
        ))}
      </ul>
    </ScrollableList>
  )
}
