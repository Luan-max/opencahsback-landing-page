type BenefitsCardProps = {
  title: string
  icon: React.ReactNode
}

export function BenefitsCard({ icon, title }: BenefitsCardProps) {
  return (
    <div className="flex items-center mt-2 space-x-2">
      <div className="flex items-center justify-center">{icon}</div>
      <span className="text-base font-medium leading-6 text-neutral-900 opacity-[70%]">
        {title}
      </span>
    </div>
  )
}
