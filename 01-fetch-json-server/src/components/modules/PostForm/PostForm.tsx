import clsx from 'clsx'
import { SquarePlus } from 'lucide-react'
import { Title } from '@/components/ui/Title/Title'
import { Form } from './components/Form/Form'
import styles from './PostForm.module.css'

interface PostFormProps {
  className?: string
}

export const PostForm = ({ className }: PostFormProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Title as="h2" icon={<SquarePlus />} className={styles.title}>
        Создать пост
      </Title>

      <Form />
    </div>
  )
}
