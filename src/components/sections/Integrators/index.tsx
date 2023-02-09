import { IntegratorCard } from './IntegratorCard'

import vtex from '@/assets/logos/vtex.svg'
import linx from '@/assets/logos/linx.svg'
import oracle from '@/assets/logos/oracle.svg'

export function Integrators() {
  return (
    <section
      className="
      bg-neutral-900 flex flex-col lg:flex-row py-16 px-[1.625rem] sm:px-20
        lg:px-12 lg:gap-20 xl:px-16 xl:py-32 xl:gap-32 2xl:px-[7.5rem] 2xl:py-40
        2xl:gap-[16rem]
      "
    >
      <div className="flex flex-col gap-4 lg:h-[18rem] lg:justify-center">
        <h1 className="text-white font-bold text-2xl xl:text-[2.375rem] xl:leading-[3.5rem]">
          Integramos com as principais soluções de mercado
        </h1>
        <span className="text-white opacity-70 font-medium text-sm xl:text-xl xl:leading-[1.875rem]">
          A nossa plataforma API first foi feita de forma intuitiva para
          facilitar a geração de resultado.
        </span>
      </div>

      <div
        className="
          flex items-center justify-center mt-9 lg:mt-0 w-full lg:w-3/4 h-[18rem] 
          xl:w-[28rem] relative
        "
      >
        <IntegratorCard
          logo={vtex}
          className="
              w-[8.125rem] h-[8.125rem] xl:w-[9.375rem] xl:h-[9.375rem] flex 
              items-center justify-center bg-gradient-to-r from-neutral-700
               to-neutral-800 rounded-2xl cursor-pointer transition transform
              ease-in delay-75 hover:scale-105 hover:grayscale-0 hover:opacity-100
              absolute left-0 top-0
            "
          link="https://vtex.com/br-pt/"
        />
        <IntegratorCard
          logo={linx}
          className="
              w-[8.125rem] h-[8.125rem] xl:w-[9.375rem] xl:h-[9.375rem] flex 
              items-center justify-center bg-gradient-to-r from-neutral-700
              to-neutral-800 rounded-2xl cursor-pointer transition transform
              ease-in delay-75 hover:scale-105 hover:grayscale-0 opacity-90
              hover:opacity-100 absolute left-[6.125rem] bottom-0
            "
          link="https://www.linx.com.br/linx-commerce/"
        />
        <IntegratorCard
          logo={oracle}
          className="
              w-[8.125rem] h-[8.125rem] xl:w-[9.375rem] xl:h-[9.375rem] flex 
              items-center justify-center bg-gradient-to-r from-neutral-700 
              to-neutral-800 rounded-2xl cursor-pointer transition transform
              ease-in delay-75 hover:scale-105 hover:grayscale-0 hover:opacity-100 
              absolute left-[12rem] 2xl:top-[-3.625rem]
            "
          link="https://www.oracle.com/br/cx/ecommerce/"
        />
      </div>
    </section>
  )
}
