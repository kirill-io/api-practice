import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { FormField } from '@/components/ui/FormField/FormField'
import { Input } from '@/components/ui/Input/Input'
import { Textarea } from '@/components/ui/Textarea/Textarea'
import styles from './Form.module.css'

interface FormProps extends ComponentPropsWithoutRef<'form'> {
  className?: string
}

export const Form = ({ className, ...restProps }: FormProps) => {
  return (
    <form {...restProps} className={clsx(styles.root, className)} noValidate>
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
      <div className={styles.actions}></div>
    </form>
  )
}
