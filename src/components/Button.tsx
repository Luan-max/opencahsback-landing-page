import { ButtonHTMLAttributes, ReactNode } from 'react'
import cslx, { ClassValue } from 'clsx'

type ButtonProps = {
  label: string
  children?: ReactNode
  additionalClasses?: ClassValue[]
  size?: 'medium' | 'large' | 'full'
} & ButtonHTMLAttributes<HTMLButtonElement>

const BUTTON_SIZES_CLASSES = {
  medium: 'w-[10.5rem] h-[2.5rem] text-sm',
  large: 'w-[13.125rem] h-[3.75rem] text-base',
  full: 'h-[3.75rem]'
}

export function Button({
  label,
  size = 'full',
  additionalClasses,
  children
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cslx(
        `
        w-full flex justify-center text-brand-secondary bg-brand-main
        font-semibold hover:brightness-90 rounded-lg text-center  
        transition-all ease-in delay-75 items-center gap-2
      `,
        additionalClasses,
        BUTTON_SIZES_CLASSES[size]
      )}
    >
      <span>{label}</span>

      {children}
    </button>
  )
}
