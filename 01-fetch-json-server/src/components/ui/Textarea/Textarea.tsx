import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { X } from 'lucide-react'
import styles from './Textarea.module.css'

type TextareaProps = Omit<ComponentPropsWithoutRef<'textarea'>, 'className'> & {
  className?: string
  onClear?: () => void
}

export const Textarea = ({ className, onClear, value, disabled, ...restProps }: TextareaProps) => {
  const hasValue = value !== undefined && value !== null && String(value).length > 0

  const showClearButton = Boolean(onClear && hasValue)

  return (
    <div className={clsx(styles.root, className)}>
      <textarea
        className={clsx(styles.textarea, 'scrollbar', showClearButton && styles.textareaWithClear)}
        value={value}
        disabled={disabled}
        {...restProps}
      />

      {showClearButton && (
        <button
          type="button"
          className={styles.clear}
          title="Очистить"
          disabled={disabled}
          onMouseDown={(event) => event.preventDefault()}
          onClick={onClear}
        >
          <X />
        </button>
      )}
    </div>
  )
}
