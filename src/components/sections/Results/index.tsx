import Link from 'next/link'

import { ResultCard } from './ResultCard'
import { Button } from '@/components/Button'

export function Results() {
  return (
    <section
      className="
        py-16 px-[1.625rem] sm:px-11 md:px-12 xl:px-16 xl:py-32 2xl:px-[7.5rem] 2xl:py-40
        flex flex-col items-center xl:items-start
      "
    >
      <div className="flex flex-col xl:flex-row xl:gap-24 2xl:gap-32">
        <div className="flex flex-col">
          <h1
            className="
              text-2xl text-center xl:text-left xl:text-4xl xl:leading-[2.75rem] 2xl:text-[2.375rem] 
              2xl:leading-[3.75rem]
            "
          >
            Potencialize seus resultados com nossa plataforma!
          </h1>
          <span className="text-sm text-center xl:text-left font-medium opacity-50 xl:text-base mt-3">
            Conheça alguns resultados de nossos parceiros utilizando nossa
            solução.
          </span>

          <div className="hidden xl:block xl:mt-10">
            <Link href="#contact-us">
              <Button type="button" label="Tenho interesse" size="large" />
            </Link>
          </div>
        </div>

        <div
          className="
            mt-8 mb-10 xl:my-0 grid sm:grid-cols-2 sm:gap-x-8 gap-y-6 lg:gap-y-10 lg:gap-x-12 
          "
        >
          <ResultCard
            title="20%"
            description="aumento de até 20% do ticket médio com
          clientes recorrentes"
          />

          <ResultCard
            title="11x "
            description="retorno de até 11x do valor de cashback
          concedido"
          />

          <ResultCard
            title="10%"
            description="de aumento médio no faturamento bruto"
          />

          <ResultCard
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
    </section>
  )
}
