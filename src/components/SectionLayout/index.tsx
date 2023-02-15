import { motion } from 'framer-motion'

type SectionLayoutProps = {
  children: React.ReactNode
  className: string
}

export function SectionLayout({ children, className }: SectionLayoutProps) {
  return (
    <motion.section
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.section>
  )
}
