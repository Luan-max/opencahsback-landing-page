type ResultCardProps = {
  title: string
  description: string
}

export function ResultCard({ title, description }: ResultCardProps) {
  return (
    <div className="flex flex-col">
      <span className="text-brand-main font-bold text-2xl xl:text-3xl 2xl:text-[2rem]">
        {title}
      </span>
      <span className="text-sm font-medium opacity-70 2xl:text-base">
        {description}
      </span>
    </div>
  )
}
