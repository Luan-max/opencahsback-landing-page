import { InputHTMLAttributes } from 'react'

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className="
        w-full h-11 px-4 text-sm font-medium bg-grey-700 rounded 
        text-neutral-400 border border-transparent outline-none 
        focus:border-brand-main/50 transition-colors ease-in delay-75
      "
    />
  )
}
