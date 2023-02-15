import Image from 'next/image'
import { motion } from 'framer-motion'

import arrow from '@/assets/icons/arrow.svg'
import logo from '@/assets/icons/logo.svg'
import { BENEFITS, NO_BENEFITS } from '@/constants/benefits'

import { SectionLayout } from '@/components/SectionLayout'
import { BenefitsCard } from './BenefitsCard'
import { getVariants } from '@/constants/animation-variants'

export function Benefits() {
  return (
    <SectionLayout className="py-16 lg:py-[5.125rem] px-[1.625rem] sm:px-12 xl:px-16 2xl:px-[7.5rem]">
      <motion.div
        className="flex flex-col gap-y-2 min-[812px]:items-center"
        variants={getVariants()}
      >
        <h1 className="text-2xl leading-9 xl:text-[2.375rem] xl:leading-[3.625rem]">
          Esqueça o velho desconto, e venha já para o cashback!
        </h1>
        <span className="text-sm xl:text-base font-semibold opacity-50">
          Veja as diferenças entre os dois - conheça as vantagens de nossos
          serviços.
        </span>
      </motion.div>

      <div
        className="
          flex flex-col xl:items-center min-[812px]:flex-row w-full justify-between 
          gap-y-8 mt-10 lg:mt-[3.875rem]
        "
      >
        <motion.div
          variants={{
            offscreen: {
              y: 100,
              opacity: 0
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.1,
                type: 'spring',
                bounce: 0.4,
                duration: 0.8
              }
            }
          }}
        >
          <div className="flex flex-col">
            <span className="text-neutral-900 text-2xl font-semibold">
              Desconto
            </span>
            <span className="opacity-80 text-sm font-medium">sem inovação</span>
          </div>
          <div className="flex flex-col gap-y-[0.625rem] mt-3 lg:mt-6">
            {NO_BENEFITS.map((description, index) => (
              <BenefitsCard
                description={description}
                type="no-benefit"
                key={`no-benefit-${index}`}
              />
            ))}
          </div>
        </motion.div>

        <div className="hidden xl:block">
          <Image src={arrow} alt="Arrow" />
        </div>

        <motion.div variants={getVariants({ delay: 0.2 })}>
          <div>
            <span className="text-neutral-900 text-2xl font-semibold">
              Cashback
            </span>
            <div className="flex gap-x-1">
              <span className="opacity-80 text-sm font-medium">com</span>
              <Image src={logo} alt="Opencashback Logo" />
            </div>
          </div>
          <div className="flex flex-col gap-y-[0.625rem] mt-3 lg:mt-6">
            {BENEFITS.map((description, index) => (
              <BenefitsCard
                description={description}
                type="benefit"
                key={`benefit-${index}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  )
}
