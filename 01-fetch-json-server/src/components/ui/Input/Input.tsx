import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import clsx from 'clsx'
import { X } from 'lucide-react'
import styles from './Input.module.css'

type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'className'> & {
  className?: string
  startIcon?: ReactNode
  onClear?: () => void
}

export const Input = ({
  className,
  startIcon,
  onClear,
  value,
  disabled,
  ...restProps
}: InputProps) => {
  const hasValue = value !== undefined && value !== null && String(value).length > 0

  const showClearButton = Boolean(onClear && hasValue)

  return (
    <div className={clsx(styles.root, className)}>
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}

      <input
        className={clsx(
          styles.input,
          startIcon && styles.inputWithStartIcon,
          showClearButton && styles.inputWithClear,
        )}
        value={value}
        disabled={disabled}
        {...restProps}
      />

      {showClearButton && (
        <button
          type="button"
          className={styles.clear}
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
