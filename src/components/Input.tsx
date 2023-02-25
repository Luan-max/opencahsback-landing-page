import { InputHTMLAttributes } from 'react'

type InputProps = {
  error: string | null
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ error, ...rest }: InputProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <input
        {...rest}
        className="
        w-full h-11 px-4 text-sm font-medium bg-grey-700 rounded 
        text-neutral-400 border border-transparent outline-none 
        focus:border-brand-main/50 transition-colors ease-in delay-75
      "
      />

      {error && <small className="text-red-700 font-medium">{error}</small>}
    </div>
  )
}
