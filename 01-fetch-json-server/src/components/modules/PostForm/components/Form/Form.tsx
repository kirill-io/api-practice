import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { Plus, Trash2 } from 'lucide-react'
import { ScrollableList } from '@/components/ui/ScrollableList/ScrollableList'
import { FormField } from '@/components/ui/FormField/FormField'
import { Input } from '@/components/ui/Input/Input'
import { Textarea } from '@/components/ui/Textarea/Textarea'
import { Button } from '@/components/ui/Button/Button'
import styles from './Form.module.css'

interface FormProps extends ComponentPropsWithoutRef<'form'> {
  className?: string
}

export const Form = ({ className, ...restProps }: FormProps) => {
  return (
    <form {...restProps} className={clsx(styles.root, className)} noValidate>
      <ScrollableList className={styles.scrollable}>
        <div className={styles.fields}>
          <FormField
            label="Заголовок"
            htmlFor="post-title"
            errorMessage="Введите заголовок поста"
            numberOfCharacters={0}
            totalCharacters={120}
          >
            <Input
              id="post-title"
              name="title"
              maxLength={120}
              placeholder="Введите заголовок поста..."
            />
          </FormField>

          <FormField
            label="Автор"
            htmlFor="post-author"
            errorMessage="Введите имя автора"
            numberOfCharacters={0}
            totalCharacters={40}
          >
            <Input
              id="post-author"
              name="author"
              maxLength={40}
              placeholder="Введите имя автора..."
            />
          </FormField>

          <FormField
            label="Содержание поста"
            htmlFor="post-body"
            errorMessage="Введите содержание поста"
            numberOfCharacters={0}
            totalCharacters={1000}
          >
            <Textarea
              id="post-body"
              name="body"
              maxLength={1000}
              placeholder="Введите содержание поста..."
            />
          </FormField>
        </div>
      </ScrollableList>

      <div className={styles.actions}>
        <Button
          type="reset"
          variant="secondary"
          size="md"
          icon={<Trash2 />}
          className={styles.action}
        >
          Очистить
        </Button>

        <Button type="submit" variant="primary" size="md" icon={<Plus />} className={styles.action}>
          Добавить пост
        </Button>
      </div>
    </form>
  )
}
