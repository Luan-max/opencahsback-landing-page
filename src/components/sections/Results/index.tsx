import Link from 'next/link'
import { motion } from 'framer-motion'

import { SectionLayout } from '@/components/SectionLayout'
import { ResultCard } from './ResultCard'
import { Button } from '@/components/Button'

import { getVariants } from '@/constants/animation-variants'

export function Results() {
  return (
    <SectionLayout
      className="
        py-16 px-[1.625rem] sm:px-11 md:px-12 xl:px-16 xl:py-32 2xl:px-[7.5rem] 2xl:py-40
        flex flex-col items-center xl:items-start
      "
    >
      <div className="flex flex-col xl:flex-row xl:gap-24 2xl:gap-32">
        <div className="flex flex-col">
          <motion.h1
            className="
              text-2xl text-center xl:text-left xl:text-4xl xl:leading-[2.75rem] 2xl:text-[2.375rem] 
              2xl:leading-[3.75rem]
            "
            variants={getVariants()}
          >
            Potencialize seus resultados com nossa plataforma!
          </motion.h1>
          <motion.span
            className="text-sm text-center xl:text-left font-medium opacity-50 xl:text-base mt-3"
            variants={getVariants({ delay: 0.1 })}
          >
            Conheça alguns resultados de nossos parceiros utilizando nossa
            solução.
          </motion.span>

          <motion.div
            className="hidden xl:block xl:mt-10"
            variants={getVariants({ delay: 0.2 })}
          >
            <Link href="#contact-us">
              <Button type="button" label="Tenho interesse" size="large" />
            </Link>
          </motion.div>
        </div>

        <div
          className="
            mt-8 mb-10 xl:my-0 grid sm:grid-cols-2 sm:gap-x-8 gap-y-6 lg:gap-y-10 lg:gap-x-12 
          "
        >
          <ResultCard
            index={1}
            title="20%"
            description="aumento de até 20% do ticket médio com
          clientes recorrentes"
          />

          <ResultCard
            index={2}
            title="11x "
            description="retorno de até 11x do valor de cashback
          concedido"
          />

          <ResultCard
            index={3}
            title="10%"
            description="de aumento médio no faturamento bruto"
          />

          <ResultCard
            index={4}
            title="5x"
            description="menos impacto que o tradicional desconto"
          />
        </div>
      </div>

      <div className="w-full md:max-w-xs xl:hidden">
        <Link href="#contact-us">
          <Button type="button" label="Tenho interesse" />
        </Link>
      </div>
    </SectionLayout>
  )
}
