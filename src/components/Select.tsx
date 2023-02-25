import { SelectHTMLAttributes } from 'react'

import { AVERAGE_TICKET_OPTIONS } from '@/constants/average-ticket'

type SeleectProps = {
  error: string | null
} & SelectHTMLAttributes<HTMLSelectElement>

export function Select({ error, ...rest }: SeleectProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <select
        className="
        w-full h-11 px-4 bg-grey-700 text-neutral-400 rounded appearance-none
        text-sm font-medium border border-transparent outline-none
      focus:border-brand-main/50 transition-colors ease-in delay-75
      "
        {...rest}
      >
        <option value="">Ticket médio *</option>
        {AVERAGE_TICKET_OPTIONS.map(ticket => (
          <option key={ticket.key} value={ticket.value}>
            {ticket.value}
          </option>
        ))}
      </select>

      {error && <small className="text-red-700 font-medium">{error}</small>}
    </div>
  )
}
