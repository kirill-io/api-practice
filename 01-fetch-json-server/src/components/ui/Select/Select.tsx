import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Check, ChevronDown, X } from 'lucide-react'
import styles from './Select.module.css'

interface SelectProps {
  className?: string
  options: {
    value: string
    label: string
  }[]
  value: string
  placeholder?: string
  emptyMessage?: string
  disabled?: boolean
  onChange: (value: string) => void
}

export const Select = ({
  className,
  options,
  value,
  placeholder = 'Выберите значение',
  emptyMessage = 'Список пуст',
  disabled = false,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((option) => option.value === value)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node

      if (!rootRef.current?.contains(target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  const handleClear = () => {
    onChange('')
    setIsOpen(false)
  }

  return (
    <div ref={rootRef} className={clsx(styles.root, className)}>
      <button
        type="button"
        className={clsx(
          styles.control,
          isOpen && styles.controlOpen,
          !selectedOption && styles.placeholder,
          selectedOption && styles.controlWithClear,
        )}
        disabled={disabled}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={styles.value}>{selectedOption?.label ?? placeholder}</span>
      </button>

      {selectedOption && (
        <button type="button" className={styles.clear} disabled={disabled} onClick={handleClear}>
          <X />
        </button>
      )}

      <ChevronDown className={clsx(styles.chevron, isOpen && styles.chevronOpen)} />

      {isOpen && (
        <div className={styles.dropdown}>
          <ul className={clsx(styles.options, 'scrollbar')}>
            {options.length > 0 ? (
              options.map((option) => {
                const isSelected = option.value === value

                return (
                  <li key={option.value}>
                    <button
                      type="button"
                      className={clsx(styles.option, isSelected && styles.optionSelected)}
                      onClick={() => handleSelect(option.value)}
                    >
                      <span>{option.label}</span>

                      {isSelected && <Check className={styles.check} />}
                    </button>
                  </li>
                )
              })
            ) : (
              <li className={styles.empty}>{emptyMessage}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
