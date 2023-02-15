import { Variants } from 'framer-motion'

type VariantsProps = {
  delay?: number
}

export const getVariants = (
  { delay }: VariantsProps = { delay: 0 }
): Variants => {
  const variants = {
    offscreen: {
      y: 150,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  return variants
}
