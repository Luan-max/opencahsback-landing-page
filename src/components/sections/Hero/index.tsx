import Image from 'next/image'
import { motion } from 'framer-motion'

import refund from '@/assets/icons/refund.svg'

import { SectionLayout } from '@/components/SectionLayout'

import { getVariants } from '@/constants/animation-variants'

export function Hero() {
  return (
    <SectionLayout
      className="
        bg-gradient-radial bg-neutral-900 flex flex-col lg:flex-row py-16 
        px-[1.625rem] sm:px-20 lg:px-12 lg:gap-20 xl:px-16 xl:py-32 xl:gap-32 
        2xl:px-[7.5rem] 2xl:py-40 2xl:gap-[16rem]
      "
    >
      <motion.div className="flex flex-col sm:py-0" variants={getVariants()}>
        <div className="max-w-2xl">
          <h1
            className="
          text-2xl md:text-2xl leading-9 font-semibold text-white 
          lg:text-[2.375rem] xl:text-[2.375rem] lg:leading-[2.563rem]
          xl:leading-[3.563rem]"
          >
            A solução de <a className="text-brand-main">cashback</a> mais
            simples, completa e inteligente.
          </h1>
          <p
            className="
              py-3 md:text-base text-sm leading-[1,3125rem] font-medium 
              text-white lg:text-[1.25rem] xl:text-[1.25rem] xl:leading-[1.875rem] 
              lg:leading-[1.875rem] opacity-70
            "
          >
            Desconto é coisa do passado, e recorrência é só o começo do futuro.
            Estratégias de recompensapara clientes para <br /> todas as etapas
            do funil de vendas.
          </p>
        </div>
      </motion.div>

      <div className="animate-float p-2 flex items-center justify-center 2xl:mt-[-102px] 2xl:ml-[58px]">
        <Image src={refund} alt="Imagem Cashback" />
      </div>
    </SectionLayout>
  )
}
