import { Check, X } from 'phosphor-react'

type BenefitsCardProps = {
  description: string
  type: 'benefit' | 'no-benefit'
}

export function BenefitsCard({ description, type }: BenefitsCardProps) {
  return (
    <div className="flex items-center gap-x-3 md:gap-x-4">
      <div className="flex items-center justify-center w-4 lg:w-8">
        {type === 'benefit' ? (
          <Check size="100%" color="#3E885B" weight="bold" />
        ) : (
          <X size="100%" color="#B91C1C" weight="bold" />
        )}
      </div>
      <span className="text-xs leading-[1.125rem] lg:text-sm font-medium opacity-70">
        {description}
      </span>
    </div>
  )
}
