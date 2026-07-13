import type { ComponentPropsWithoutRef, ReactElement } from 'react'
import clsx from 'clsx'
import { Input } from '@/components/ui/Input/Input'
import type { Textarea } from '@/components/ui/Textarea/Textarea'
import styles from './FormField.module.css'

type FormControl =
  | ReactElement<ComponentPropsWithoutRef<typeof Input>, typeof Input>
  | ReactElement<ComponentPropsWithoutRef<typeof Textarea>, typeof Textarea>

interface FormFieldProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  className?: string
  children: FormControl
  label: string
  htmlFor: string
  hasError?: boolean
  errorMessage?: string
  numberOfCharacters: number
  totalCharacters: number
}

export const FormField = ({
  children,
  className,
  label,
  htmlFor,
  hasError = false,
  errorMessage,
  numberOfCharacters,
  totalCharacters,
  ...restProps
}: FormFieldProps) => {
  return (
    <div {...restProps} className={clsx(styles.root, hasError && styles.hasError, className)}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor={htmlFor}>
          {label}
        </label>

        <div className={styles.control}>{children}</div>
      </div>

      <div className={styles.meta}>
        <span className={styles.error} title={errorMessage}>
          {errorMessage}
        </span>

        <span className={styles.counter}>
          {numberOfCharacters} / {totalCharacters}
        </span>
      </div>
    </div>
  )
}
