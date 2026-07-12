import { useState } from 'react'
import clsx from 'clsx'
import { FileText } from 'lucide-react'
import type { Post } from '@/api/types'
import { Title } from '@/components/ui/Title/Title'
import { Filters } from './components/Filters/Filters'
import { Posts } from './components/Posts/Posts'
import styles from './PostList.module.css'

interface PostListProps {
  className?: string
  posts: Post[]
}

export const PostList = ({ className, posts }: PostListProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAuthor, setSelectedAuthor] = useState('')

  const authorOptions = Array.from(new Set(posts.map((post) => post.author))).map((author) => ({
    value: author,
    label: author,
  }))

  const normalizedSearchQuery = searchQuery.trim().toLowerCase()

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(normalizedSearchQuery) ||
      post.author.toLowerCase().includes(normalizedSearchQuery)

    const matchesAuthor = selectedAuthor === '' || post.author === selectedAuthor

    return matchesSearch && matchesAuthor
  })

  const isPostsEmpty = posts.length === 0
  const isFilteredPostsEmpty = filteredPosts.length === 0

  const emptyMessage = isPostsEmpty ? 'Постов пока нет' : 'По заданным фильтрам ничего не найдено'

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.heading}>
        <Title as="h2" icon={<FileText />} className={styles.title}>
          Список постов
        </Title>

        <span className={styles.count}>{filteredPosts.length}</span>
      </div>

      <Filters
        className={styles.filters}
        searchQuery={searchQuery}
        selectedAuthor={selectedAuthor}
        authorOptions={authorOptions}
        onSearchQueryChange={setSearchQuery}
        onSelectedAuthorChange={setSelectedAuthor}
      />

      <Posts
        className={styles.list}
        posts={filteredPosts}
        isEmpty={isFilteredPostsEmpty}
        emptyMessage={emptyMessage}
      />
    </div>
  )
}
