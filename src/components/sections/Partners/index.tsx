import { motion } from 'framer-motion'

import { PARTNERS } from '@/constants/partners'
import { getVariants } from '@/constants/animation-variants'

import { SectionLayout } from '@/components/SectionLayout'
import { PartnerCard } from './PartnerCard'

export function Partners() {
  return (
    <SectionLayout className="w-full py-16 lg:py-20 flex flex-col items-center justify-center">
      <div className="px-5 sm:px-0 flex flex-col gap-2">
        <h1 className="text-2xl text-center md:text-4xl">
          Empresas revolucionando conosco
        </h1>
        <span className="text-sm sm:text-sm font-semibold opacity-50 text-center md:text-base">
          Opencashback é uma solução para uso de cashback de maneira inovadora
          <br /> - Conheça alguns de nossos parceiros.
        </span>
      </div>

      <motion.div
        className="mt-12 lg:mt-20 px-4 flex flex-wrap max-w-6xl justify-center gap-x-5 gap-y-5"
        variants={getVariants()}
      >
        {PARTNERS.map(partner => (
          <PartnerCard
            key={partner.company}
            company={partner.company}
            logo={partner.logo}
            link={partner.link}
          />
        ))}
      </motion.div>
    </SectionLayout>
  )
}
