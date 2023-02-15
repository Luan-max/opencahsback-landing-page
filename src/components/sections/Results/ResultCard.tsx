import { getVariants } from '@/constants/animation-variants'
import { motion } from 'framer-motion'

type ResultCardProps = {
  index: number
  title: string
  description: string
}

export function ResultCard({ index, title, description }: ResultCardProps) {
  return (
    <motion.div
      className="flex flex-col"
      variants={getVariants({ delay: index * 0.08 })}
    >
      <span
        className="
        text-brand-main text-center sm:text-start font-bold text-2xl xl:text-3xl 2xl:text-[2rem]
        "
      >
        {title}
      </span>
      <span
        className="
          text-sm text-center sm:text-start font-medium opacity-70 2xl:text-base
        "
      >
        {description}
      </span>
    </motion.div>
  )
}
