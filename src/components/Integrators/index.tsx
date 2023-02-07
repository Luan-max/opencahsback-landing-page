import Container from '@/components/Container'
import { IntegratorCard } from './IntegratorCard'

import vtex from '@/assets/logos/vtex.svg'
import linx from '@/assets/logos/linx.svg'
import shopify from '@/assets/logos/shopify.svg'

export function Integrators() {
  return (
    <div className="bg-neutral-900">
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2 lg:py-36 sm:py-0">
          <div className="mb-20">
            <h1 className="text-4xl font-semibold text-white lg:text-4xl xl:text-5xl">
              Integramos com as principais <br /> soluções de mercado
            </h1>
            <p className="py-5 text-xl font-medium leading-normal text-white lg:text-xl xl:text-2x opacity-70">
              A nossa plataforma API first foi feita de forma intuitiva <br />
              para facilitar a geração de resultado.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 mb-14">
          <IntegratorCard
            logo={vtex}
            className="w-40 h-24 sm:w-40 sm:h-40 sm:flex items-center 
        justify-center bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-2xl cursor-pointer transition transform
        ease-in delay-75 hover:scale-105 hover:grayscale-0
        hover:opacity-100"
            link="https://vtex.com/br-pt/"
          />
          <IntegratorCard
            logo={linx}
            className="w-40 h-24 sm:w-40 -ml-12 mt-72 sm:h-40 sm:flex items-center 
            justify-center bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-2xl cursor-pointer transition transform
            ease-in delay-75 hover:scale-105 hover:grayscale-0 opacity-90
            hover:opacity-100"
            link="https://www.linx.com.br/linx-commerce/"
          />
          <IntegratorCard
            logo={shopify}
            className="w-40 h-24 sm:w-40 sm:h-40 ml-10 mb-16 sm:flex items-center 
            justify-center bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-2xl cursor-pointer transition transform
            ease-in delay-75 hover:scale-105 hover:grayscale-0
            hover:opacity-100"
            link="https://www.shopify.com/br"
          />
        </div>
      </Container>
    </div>
  )
}
